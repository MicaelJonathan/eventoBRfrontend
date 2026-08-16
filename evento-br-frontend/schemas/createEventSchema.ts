import * as z from 'zod';

export const CreateEventSchema = z.object({
  name: z
    .string({ message: 'Digite um nome válido!' })
    .min(3, { message: 'O nome é muito curto! Digite ao menos 3 caracteres.' })
    .max(100, { message: 'O nome é grande demais! O limite permitido é de 100 caracteres.' }),
  description: z
    .string({ message: 'Digite uma descrição válida!' })
    .min(5, { message: 'A descrição é curta! Ela precisa ter, no mínimo, 5 caracteres.' })
    .max(1000, {
      message: 'A descrição é muito grande! Ela pode ter, no máximo, 1000 caracteres.',
    }),
  date_Time: z
    .string({ message: 'Digite uma data válida!' })
    .datetime({ message: 'A data deve estar no formato ISO 8601 (ex: 2026-08-16T13:23:05.110Z)' }),
  location: z
    .string('Digite um local válido!')
    .min(3, { message: 'O local é muito curto! Ele precisa ter, no mínimo, 3 caracteres.' })
    .max(50, { message: 'O local é muito grande! Ele pode ter, no máximo, 50 caracteres.' }),
  latitude: z
    .number()
    .min(-90, { message: 'Latitude mínima é -90' })
    .max(90, { message: 'Latitude máxima é 90' }),
  longitude: z
    .number()
    .min(-180, { message: 'Longitude mínima é -180' })
    .max(180, { message: 'Longitude máxima é 180' }),
  capacity: z
    .number({ message: 'Digite um número válido!' })
    .int({ message: 'A capacidade de pessoas deve ser um número inteiro!' })
    .min(1, { message: 'Seu evento deve comportar ao menos uma pessoa!' })
    .max(1000000000, { message: 'Que evento é esse para um bilhão de pessoas?' }),
});

export type CreateEventSchemaType = z.infer<typeof CreateEventSchema>;
