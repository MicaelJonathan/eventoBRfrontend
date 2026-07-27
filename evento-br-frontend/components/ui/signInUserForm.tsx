import { Label } from './label';
import { Input } from './input';
import { Button } from './button';
import { useForm } from 'react-hook-form';
import { Card, CardHeader, CardContent } from './card';

type SignInUserFormProps = {
  onCancel?: () => void;
};

type userDataProps = {
  email: string;
  password: string;
};

const handleLogin = (data: userDataProps) => {
  console.log(data);
};

export default function SignInUserForm({ onCancel }: SignInUserFormProps) {
  const { register, handleSubmit } = useForm<userDataProps>();

  return (
    <Card
      size="default"
      className="mx-auto w-full max-w-4xl max-h-fit bg-primaryui text-(--whiteui)"
    >
      <CardHeader>Entrar na sua conta</CardHeader>
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
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <Label htmlFor="senha">Senha</Label>
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
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <Button type="submit">Entrar</Button>
            <Button onClick={() => onCancel?.()}>Cancelar</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
