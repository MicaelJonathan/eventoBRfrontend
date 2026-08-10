import { api } from '@/lib/api';
import type { userSignInProps } from '@/schemas/userSignInSchema';

export async function loginUser(data: userSignInProps) {
  const response = await api.post('/User/login', data);
  localStorage.setItem('token', response.data.token);
  return response.data;
}
