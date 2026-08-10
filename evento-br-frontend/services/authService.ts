import { api } from '@/lib/api';
import type { UserSignInProps } from '@/schemas/userSignInSchema';

export async function loginUser(data: UserSignInProps) {
  const response = await api.post('/User/login', data);
  localStorage.setItem('token', response.data.token);
  return response.data;
}
