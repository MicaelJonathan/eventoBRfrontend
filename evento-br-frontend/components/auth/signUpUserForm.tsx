'use client';

import { Card, CardHeader, CardContent } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useSignUp } from '@/hooks/useSignUp';

type SignUpUserFormProps = {
  onCancel?: () => void;
  onSignUpSuccess: () => void;
};

export default function SignUpUserForm({ onCancel, onSignUpSuccess }: SignUpUserFormProps) {
  const {
    register,
    handleSubmit,
    handleRegister,
    serverError,
    isSubmitting,
    formState: { errors },
  } = useSignUp(onSignUpSuccess);

  return (
    <Card size="default" className="mx-auto w-full max-w-4xl max-h-fit">
      <CardHeader className="font-semibold">Criar uma nova conta</CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input {...register('name')} type="text" placeholder="Seu nome completo" />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input {...register('email')} type="email" placeholder="email@exemplo.com" />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="senha">Senha</Label>
              <Input
                {...register('password')}
                type="password"
                placeholder="Digite sua senha aqui..."
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input {...register('phone')} type="tel" placeholder="(00) 00000-0000" />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="state">Estado</Label>
              <Input {...register('state')} placeholder="Paraíba" />
              {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="city">Cidade</Label>
              <Input {...register('city')} placeholder="Patos" />
              {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
            </div>

            {serverError && <p className="text-sm text-red-500">{serverError}</p>}

            <div className="flex gap-2">
              <Button
                type="submit"
                variant={'default'}
                size={'lg'}
                className="font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Criando conta...' : 'Criar Conta'}
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
