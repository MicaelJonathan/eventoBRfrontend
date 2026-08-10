import * as z from 'zod';

export const UserSignUpSchema = z.object({
  name: z
    .string({ message: 'Digite um e-mail válido' })
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    .max(100, { message: 'O nome deve ter no máximo 100 caracteres' }),

  email: z.email(),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .max(20, { message: 'A senha deve ter no máximo 20 caracteres' }),

  phone: z.string().regex(/^\d{2}9\d{8}$/, {
    message: 'O telefone deve estar no formato (00) 00000-0000',
  }),

  city: z.string(),
  state: z.string(),
});

export type UserSignUpProps = z.infer<typeof UserSignUpSchema>;
