import ButtonApp from '@/src/button';
import '../app/globals.css';

import { Tilt_Warp } from 'next/font/google';
const tilt_warp = Tilt_Warp({
  subsets: ['latin'],
});
export default function HomePage({}) {
  return (
    <>
      <div className="text-center space-y-6 max-w-lg">
        <h1 className={tilt_warp.className}>
          <span className="text-blue-500 text-6xl">Evento</span>
          <span className="text-yellow-500 text-6xl">Brasil</span>
        </h1>
        <ButtonApp size="lg" text="Efetuar Login" />
        <ButtonApp size="lg" text="Cadastrar Usuário" />
      </div>
    </>
  );
}
