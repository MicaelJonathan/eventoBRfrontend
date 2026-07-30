'use client';

import '../app/globals.css';
import dynamic from 'next/dynamic';
import AuthDialog from '@/components/auth/authDialog';
import { defaultMapValues } from '@/lib/constants';
import SearchBar from '@/components/ui/searchBar';

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
        <div className="bg-neutral-300">Nome</div>
        <div className="flex gap-4">
          <div className="flex-1">
            <SearchBar
              emptyMessage="Procure um item..."
              inputClassName="h-12 border-1 border-gray-300 bg-white"
            />
          </div>
          <div className="bg-white size-12 rounded-md border-1 border-gray-300"></div>
        </div>
      </div>

      <AuthDialog />
    </div>
  );
}
