import '../app/globals.css';

import { Tilt_Warp } from 'next/font/google';
const font = Tilt_Warp({
  subsets: ['latin'],
});

export default function HomePage({}) {
  return (
    <div className="text-center space-y-6 max-w-lg">
      <h1 className={font.className}>EventoBrasil</h1>
      <div className="text-6xl">🚧</div>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
        Em Construção...
      </h1>
    </div>
  );
}
