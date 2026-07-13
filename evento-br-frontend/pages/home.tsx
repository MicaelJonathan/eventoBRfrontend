'use client';

import '../app/globals.css';
import dynamic from 'next/dynamic';
import SearchBar from '@/components/ui/searchBar';

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
    <div className="relative w-screen h-screen overflow-hidden bg-zinc-950">
      <MapComponent latitude={-7.02556} longitude={-37.2779}/>

      <div className="fixed top-0 left-0 z-[1000]">
        <SearchBar
          placeholder="Aqui será o texto antes de digitar"
          data={['Opção 1', 'Opção 2']}
          emptyMessage="Não há esse item..."
        />
      </div>
    </div>
  );
}
