'use client';

import '../app/globals.css';
import dynamic from 'next/dynamic';
import SearchBar from '@/components/ui/searchBar';
import { defaultMapValues } from '@/lib/constants';

const MapComponent = dynamic(() => import('@/components/ui/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-screen h-screen bg-zinc-950 flex items-center justify-center text-zinc-400">
      Carregando mapa...
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

      <div className="fixed top-8 left-8 z-1">
        <div className="">
          <SearchBar
            placeholder="Procure um evento..."
            data={[]}
            emptyMessage="Esse vento não existe..."
          />
        </div>
      </div>
    </div>
  );
}
