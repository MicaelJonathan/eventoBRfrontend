import { Label } from './label';
import { Input } from './input';
import { Button } from './button';

export default function LoginForm() {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="email@exemplo.com" required />
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
            id="password"
            type="password"
            placeholder="Digite sua senha aqui..."
            required
          />
        </div>
      </div>
      <div className="flex gap-2 mt-6">
        <Button type="submit">Entrar</Button>
        <Button variant={'outline'} type="button">
          Cancelar
        </Button>
      </div>
    </form>
  );
}