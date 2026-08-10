import { api } from '@/lib/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
      await api.post('/User/login', data);
      onSigInSuccess();
    } catch (e) {
      setServerError('E-mail ou senha não encontrado(a)');
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { ...form, handleLogin, serverError, isSubmitting };
}
