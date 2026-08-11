import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from '@/services/authService';
import { UserSignUpProps, UserSignUpSchema } from '@/schemas/userSignUpSchema';

export function useSignUp(onSignUpSuccess: () => void) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<UserSignUpProps>({ resolver: zodResolver(UserSignUpSchema) });

  const handleRegister = async (data: UserSignUpProps) => {
    setServerError(null);
    setIsSubmitting(true);

    try {
      await registerUser({
        ...data,
      });
      onSignUpSuccess();
    } catch (e) {
      setServerError('Informações do cadastro não preenchidas corretamente');
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { ...form, handleRegister, serverError, isSubmitting };
}
