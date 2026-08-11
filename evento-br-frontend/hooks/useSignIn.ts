import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { loginUser } from '@/services/authService';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSignInProps, UserSignInSchema } from '@/schemas/userSignInSchema';

export function useSignIn(onSigInSuccess: () => void) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<UserSignInProps>({ resolver: zodResolver(UserSignInSchema) });

  const handleLogin = async (data: UserSignInProps) => {
    setServerError(null);
    setIsSubmitting(true);

    try {
      await loginUser(data);
      onSigInSuccess();
    } catch (e) {
      setServerError('E-mail ou senha não encontrado(a)');
      console.error(e);
    } finally {
      setIsSubmitting(false);
      window.location.reload();
    }
  };

  return { ...form, handleLogin, serverError, isSubmitting };
}
