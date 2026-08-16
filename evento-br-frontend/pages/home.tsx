'use client';

import '../app/globals.css';
import dynamic from 'next/dynamic';
import SidePanel from '@/components/sidePanel/sidePanel';
import AuthDialog from '@/components/auth/authDialog';
import { useAuth } from '@/hooks/useAuth';
import { useMapSelection } from '@/hooks/useMapSelection';
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
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { selectedLocation, setSelectedLocation } = useMapSelection();

  return (
    <div className="relative min-h-screen">
      <MapComponent
        latitude={defaultMapValues.lat}
        longitude={defaultMapValues.long}
        className="z-0"
        selectedLocation={selectedLocation}
        onLocationSelect={setSelectedLocation}
      />
      <SidePanel selectedLocation={selectedLocation} />
      {!isLoggedIn && <AuthDialog onSignInSuccess={() => setIsLoggedIn(true)} />}
    </div>
  );
}
