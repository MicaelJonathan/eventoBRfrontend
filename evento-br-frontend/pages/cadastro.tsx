import ButtonApp from '@/src/button';
import { Input } from '@/components/ui/input';
import '../app/globals.css';
import Link from 'next/link';

import { Tilt_Warp } from 'next/font/google';
const tilt_warp = Tilt_Warp({
  subsets: ['latin'],
});

export default function LoginPage({}) {
  return (
    <>
      <div className="text-center space-y-6 max-w-lg">
        <h1 className={tilt_warp.className}>
          <span className="text-blue-500 text-6xl">Evento</span>
          <span className="text-yellow-500 text-6xl">Brasil</span>

          <Input placeholder="Insira nome" />

          <Input placeholder="Insira email" />

          <Input placeholder="Insira senha" />

          <Input placeholder="Insira telefone" />

          <Input placeholder="Insira localidade" />

          <Link href="/home">
            <ButtonApp size="lg" text="Cadastrar Usuário" />
          </Link>
        </h1>
      </div>
    </>
  );
}
