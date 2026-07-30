'use client';

import '../app/globals.css';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import SignInUserForm from '@/components/ui/signInUserForm';
import SignUpUserForm from '@/components/ui/signUpUserForm';
import { defaultMapValues } from '@/lib/constants';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useState } from 'react';

const MapComponent = dynamic(() => import('@/components/ui/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-screen h-screen bg-zinc-950 flex items-center justify-center text-zinc-400">
      Carregando mapa, por favor aguarde...
    </div>
  ),
});

export default function HomePage({}) {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <MapComponent
        latitude={defaultMapValues.lat}
        longitude={defaultMapValues.long}
        className="z-0"
      />

      <div className="fixed top-8 right-8 z-1 flex gap-3">
        <Button
          onClick={() => setSignInOpen(true)}
          className="h-16 px-10 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80"
        >
          Login
        </Button>
        <Button
          onClick={() => setSignUpOpen(true)}
          className="h-16 px-10 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80"
        >
          Cadastro
        </Button>
      </div>

      <Dialog open={signInOpen} onOpenChange={setSignInOpen}>
        <DialogContent className="p-0 sm:max-w-md">
          <SignInUserForm onCancel={() => setSignInOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={signUpOpen} onOpenChange={setSignUpOpen}>
        <DialogContent className="p-0 sm:max-w-md">
          <SignUpUserForm onCancel={() => setSignUpOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
