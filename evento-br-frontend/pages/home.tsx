'use client';

import '../app/globals.css';
import dynamic from 'next/dynamic';
import AuthDialog from '@/components/auth/authDialog';
import { defaultMapValues } from '@/lib/constants';
import SidePanel from '@/components/sidePanel/sidePanel';
import { useEffect, useState } from 'react';
import LogOut from '@/components/auth/logOut';

const MapComponent = dynamic(() => import('@/components/ui/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-screen h-screen bg-zinc-950 flex items-center justify-center text-zinc-400">
      Carregando mapa, por favor aguarde...
    </div>
  ),
});

export default function HomePage({}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoggedIn(Boolean(token));
  }, []);

  return (
    <div className="relative min-h-screen">
      <MapComponent
        latitude={defaultMapValues.lat}
        longitude={defaultMapValues.long}
        className="z-0"
      />

      <SidePanel />

      {!isLoggedIn && <AuthDialog onSignInSuccess={() => setIsLoggedIn(true)} />}
      {isLoggedIn && (
        <LogOut
          onSuccess={() => {
            setIsLoggedIn(false);
          }}
        />
      )}
    </div>
  );
}
