'use client';

import '../app/globals.css';
import dynamic from 'next/dynamic';
import AuthDialog from '@/components/auth/authDialog';
import { defaultMapValues } from '@/lib/constants';
import SidePanel from '@/components/sidePanel/sidePanel';

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

      <SidePanel />

      <AuthDialog />
    </div>
  );
}
