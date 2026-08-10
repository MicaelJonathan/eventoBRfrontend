import * as z from 'zod';

export const UserSignInSchema = z.object({
  email: z.email({ message: 'Digite um e-mail válido' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .max(20, { message: 'A senha deve ter no máximo 20 caracteres' }),
});

export type UserSignInProps = z.infer<typeof UserSignInSchema>;
