import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useSignIn } from '@/hooks/useSignIn';
import { Card, CardHeader, CardContent } from '../ui/card';

type SignInUserFormProps = {
  onSignInSuccess: () => void;
  onCancel?: () => void;
};

export default function SignInUserForm({ onSignInSuccess, onCancel }: SignInUserFormProps) {
  const {
    register,
    handleSubmit,
    handleLogin,
    serverError,
    isSubmitting,
    formState: { errors },
  } = useSignIn(onSignInSuccess);

  return (
    <Card size="default" className="mx-auto w-full max-w-4xl max-h-fit ">
      <CardHeader>
        <span className="font-semibold">Entrar na sua conta</span>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                {...register('email')}
                id="email"
                type="text"
                placeholder="email@exemplo.com"
                required
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <Label htmlFor="password">Senha</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-2 hover:underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <Input
                {...register('password')}
                id="password"
                type="password"
                placeholder="Digite sua senha aqui..."
                required
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
          </div>

          {serverError && <p className="mt-2 text-sm text-red-500">{serverError}</p>}
          <div className="flex gap-2 mt-6">
            <Button
              type="submit"
              variant={'default'}
              size={'lg'}
              className={'font-semibold'}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </Button>
            <Button
              onClick={() => onCancel?.()}
              variant={'secondary'}
              size={'lg'}
              className={'font-semibold'}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
