import '../app/globals.css';

import { Tilt_Warp } from 'next/font/google';
const font = Tilt_Warp({
  subsets: ['latin'],
});

export default function HomePage({}) {
  return (
    <div className="text-center space-y-6 max-w-lg">
      <h1 className={font.className}>
        <span className="text-blue-500 text-6xl">Evento</span>
        <span className="text-yellow-500 text-6xl">Brasil</span>
      </h1>
    </div>
  );
}
