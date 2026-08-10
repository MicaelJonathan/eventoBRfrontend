import type { UserSignInProps } from '@/schemas/userSignInSchema';
import type { UserSignUpProps } from '@/schemas/userSignUpSchema';
import { api } from '@/lib/api';

export async function loginUser(data: UserSignInProps) {
  const response = await api.post('/User/login', data);
  localStorage.setItem('token', response.data.token);
  return response.data;
}

export async function registerUser(data: UserSignUpProps) {
  const response = await api.post('/User/register', data);
  return response.data;
}
