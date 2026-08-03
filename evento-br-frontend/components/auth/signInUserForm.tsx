import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { Card, CardHeader, CardContent } from '../ui/card';
import * as z from 'zod';
import axios from 'axios';

type SignInUserFormProps = {
  onCancel?: () => void;
};

type userDataProps = {
  email: string;
  password: string;
};

const userDataSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .max(20, { message: 'A senha deve ter no máximo 20 caracteres' }),
});

const handleLogin = (data: userDataProps) => {
  const safeParsedData = userDataSchema.safeParse(data);
  console.log(safeParsedData.data);
  if (safeParsedData.success) {
    axios
      .post('https://eventobrbackend.onrender.com/api/User/login', safeParsedData.data)
      .then((response) => console.log(response.data));
  } else {
    console.log(safeParsedData.error);
  }
};

export default function SignInUserForm({ onCancel }: SignInUserFormProps) {
  const { register, handleSubmit } = useForm<userDataProps>();

  return (
    <Card size="default" className="mx-auto w-full max-w-4xl max-h-fit ">
      <CardHeader className="font-semibold">Entrar na sua conta</CardHeader>
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
            <Button type="submit" variant={'default'} size={'lg'} className={'font-semibold'}>
              Entrar
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
