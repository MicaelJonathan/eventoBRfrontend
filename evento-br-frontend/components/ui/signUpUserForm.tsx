'use client';

import { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './card';
import { Label } from './label';
import { Input } from './input';
import { Button } from './button';

export default function SignUpUserForm() {
  const [isPessoaJuridica, setIsPessoaJuridica] = useState(false);

  return (
    <Card
      size="default"
      className="mx-auto w-full max-w-4xl max-h-fit bg-primaryui text-(--whiteui)"
    >
      <CardHeader>Criar uma nova conta</CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" type="text" placeholder="Seu nome completo" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="email@exemplo.com" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="senha">Senha</Label>
              <Input id="senha" type="password" placeholder="Digite sua senha aqui..." required />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" type="tel" placeholder="(00) 00000-0000" required />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="documento">{isPessoaJuridica ? 'CNPJ' : 'CPF'}</Label>
                <Button
                  type="button"
                  size="sm"
                  aria-pressed={isPessoaJuridica}
                  onClick={() => setIsPessoaJuridica((prev) => !prev)}
                >
                  {isPessoaJuridica
                    ? 'Cadastrar como pessoa física'
                    : 'Cadastrar como pessoa jurídica'}
                </Button>
              </div>
              <Input
                id="documento"
                type="text"
                placeholder={isPessoaJuridica ? '00.000.000/0000-00' : '000.000.000-00'}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="bg-grayui">
        <Button type="submit">Criar Conta</Button>
        <Button variant={'outline'} className="text-gray-700">
          Cancelar
        </Button>
      </CardFooter>
    </Card>
  );
}
