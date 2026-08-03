'use client';

import { Card, CardHeader, CardContent } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as z from 'zod';

type SignUpUserFormProps = {
  onCancel?: () => void;
};

type UserDataProps = {
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  state: string;
  accountType: 0 | 1;
  documentNumber: string | null;
};

const userDataSchema = z.object({
  name: z
    .string()
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
  accountType: z.number(),
  documentNumber: z.string(),
});

const handleSave = (data: UserDataProps) => {
  data.accountType = 0;
  const safeParsedData = userDataSchema.safeParse(data);
  if (safeParsedData.success) {
    console.log(safeParsedData.data);
  } else {
    console.log(safeParsedData.error);
  }

  axios.post('https://eventobrbackend.onrender.com/api/User/register', safeParsedData.data);
};

export default function SignUpUserForm({ onCancel }: SignUpUserFormProps) {
  const { register, handleSubmit } = useForm<UserDataProps>();

  return (
    <Card
      size="default"
      className="mx-auto w-full max-w-4xl max-h-fit bg-primaryui text-(--whiteui)"
    >
      <CardHeader>Criar uma nova conta</CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleSave)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input {...register('name')} type="text" placeholder="Seu nome completo" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input {...register('email')} type="string" placeholder="email@exemplo.com" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="senha">Senha</Label>
              <Input
                {...register('password')}
                type="password"
                placeholder="Digite sua senha aqui..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input {...register('phone')} type="tel" placeholder="(00) 00000-0000" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="state">Estado</Label>
              <Input {...register('state')} placeholder="Paraíba" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="city">Cidade</Label>
              <Input {...register('city')} placeholder="Patos" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="accountType">Tipo da Conta</Label>
              <Input {...register('accountType')} placeholder="0 ou 1" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="documentNumber">Número do Documento</Label>
              <Input {...register('documentNumber')} placeholder="000" />
            </div>

            <div className="flex gap-2">
              <Button type="submit" variant={'outline'} className="text-gray-700">
                Criar Conta
              </Button>
              <Button type="button" onClick={() => onCancel?.()}>
                Cancelar
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
