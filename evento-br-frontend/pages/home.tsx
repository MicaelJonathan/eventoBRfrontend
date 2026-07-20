'use client';

import '../app/globals.css';
import dynamic from 'next/dynamic';
import SearchBar from '@/components/ui/searchBar';
import { Button } from '@/components/ui/button';
import { defaultMapValues } from '@/lib/constants';

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

      <div className="fixed top-8 left-8 z-1">
        <div className="">
          <SearchBar
            placeholder="Procure um evento..."
            data={[]}
            emptyMessage="Esse vento não existe..."
          />

          <div className="flex gap-2">
            <Button className="h-16 w-16 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80" />
            <Button className="h-16 w-16 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80" />
            <Button className="h-16 w-16 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80" />
          </div>
        </div>
      </div>
    </div>
  );
}
