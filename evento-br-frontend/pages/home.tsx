'use client';

import '../app/globals.css';
import dynamic from 'next/dynamic';
import AuthDialog from '@/components/auth/authDialog';
import { defaultMapValues } from '@/lib/constants';
import SearchBar from '@/components/ui/searchBar';
import Image from 'next/image';
import forro from '@/public/forro.png';
import logoBorali from '@/public/logoBorali.webp';

const MapComponent = dynamic(() => import('@/components/ui/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-screen h-screen bg-zinc-950 flex items-center justify-center text-zinc-400">
      Carregando mapa, por favor aguarde...
    </div>
  ),
});

export default function HomePage({}) {
  return (
    <div className="relative min-h-screen">
      <MapComponent
        latitude={defaultMapValues.lat}
        longitude={defaultMapValues.long}
        className="z-0"
      />

      {/* Início do componente */}
      <div className="fixed top-4 left-4 z-1 rounded-md bg-neutral-100 w-1/4 h-content p-4 flex flex-col gap-4 ">
        <div className="mx-auto w-1/3 flex justify-center">
          <Image src={logoBorali} alt="" />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <SearchBar
              emptyMessage="Procure um item..."
              inputClassName="h-12 border-1 border-gray-300 bg-white"
            />
          </div>
          <div className="bg-white size-12 rounded-md border-1 border-gray-300"></div>
        </div>

        <div>
          <h3>Pŕoximos Eventos</h3>
          <ul>
            <li className="bg-white flex items-center gap-3 border-1 border-gray-300 rounded-md">
              <div className="relative size-24 overflow-hidden rounded-md shrink-0">
                <Image src={forro} alt="" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h4>Forró no Coreto</h4>
                <span>Coreto da Praça de Edvaldo Motta</span>
                <span>24 Mai. 20:00</span>
                <span>250+</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <AuthDialog />
    </div>
  );
}
