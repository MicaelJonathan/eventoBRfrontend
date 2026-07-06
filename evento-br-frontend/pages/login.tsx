import ButtonApp from '@/src/button';
import '../app/globals.css';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

import { Tilt_Warp } from 'next/font/google';
const tilt_warp = Tilt_Warp({
  subsets: ['latin'],
});

export default function LoginPage({}) {
  return (
    <>
      <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col items-center justify-center space-y-6 px-4 text-center">
        <h1 className={tilt_warp.className}>
          <span className="text-blue-500 text-6xl">Evento</span>
          <span className="text-yellow-500 text-6xl">Brasil</span>
        </h1>
        <Input placeholder="Inserir email" />
        <Input placeholder="Inserir senha" />
        <Link href="/mapa">
          <ButtonApp size="lg" text="Log in" />
        </Link>
      </div>
    </>
  );
}
