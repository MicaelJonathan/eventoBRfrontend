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
      <div className="text-center space-y-6 max-w-lg">
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
