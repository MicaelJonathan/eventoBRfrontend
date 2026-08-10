import { UserSignInProps } from '@/schemas/userSignInSchema';
import { api } from '@/lib/api';
import { useForm } from 'react-hook-form';

export function useSignIn(onSigInSuccess: () => void) {
  const form = useForm<UserSignInProps>();

  const handleLogin = async (data: UserSignInProps) => {
    console.log('Dados enviados:' + data);

    try {
      await api.post('/User/login', data);
      onSigInSuccess();
    } catch (e) {
      console.error(e);
    }
  };

  return { ...form, handleLogin };
}
