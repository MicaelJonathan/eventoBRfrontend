import * as z from 'zod';

export const userSignInSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .max(20, { message: 'A senha deve ter no máximo 20 caracteres' }),
});

export type userSignInProps = z.infer<typeof userSignInSchema>;
