import { Card, CardHeader, CardAction, CardContent, CardFooter } from './card';
import { Label } from './label';
import { Input } from './input';
import { Button } from './button';

export default function RegisterUserForm() {
  return (
    <Card size="default" className="mx-auto w-full max-w-4xl max-h-fit">
      <CardHeader>
        <CardAction></CardAction>
      </CardHeader>
      <CardContent>
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
              ></Input>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit">Criar Conta</Button>
        <Button variant={'outline'}>Cancelar</Button>
      </CardFooter>
    </Card>
  );
}
