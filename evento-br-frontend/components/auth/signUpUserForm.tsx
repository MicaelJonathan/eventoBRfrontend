'use client';

import { Card, CardHeader, CardContent } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { UserSignUpProps } from '@/schemas/userSignUpSchema';
import { registerUser } from '@/services/authService';

type SignUpUserFormProps = {
  onCancel?: () => void;
};

const handleSave = async (data: UserSignUpProps) => {
  data.accountType = 0;
  await registerUser(data);
};

export default function SignUpUserForm({ onCancel }: SignUpUserFormProps) {
  const { register, handleSubmit } = useForm<UserSignUpProps>();

  return (
    <Card size="default" className="mx-auto w-full max-w-4xl max-h-fit">
      <CardHeader className="font-semibold">Criar uma nova conta</CardHeader>
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
              <Button type="submit" variant={'default'} size={'lg'} className="font-semibold">
                Criar Conta
              </Button>
              <Button
                onClick={() => onCancel?.()}
                type="button"
                variant={'secondary'}
                size={'lg'}
                className={'font-semibold'}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
