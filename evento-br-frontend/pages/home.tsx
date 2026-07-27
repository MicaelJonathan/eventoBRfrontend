'use client';

import '../app/globals.css';
import dynamic from 'next/dynamic';
import SearchBar from '@/components/ui/searchBar';
import { Button } from '@/components/ui/button';
import SignInUserForm from '@/components/ui/signInUserForm';
import SignUpUserForm from '@/components/ui/signUpUserForm';
import { defaultMapValues } from '@/lib/constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';
import { Plus, Calendar, Settings } from 'lucide-react';

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

      <div className="fixed top-8 left-8 z-1">
        <div className="">
          <SearchBar
            placeholder="Procure um evento..."
            data={[]}
            emptyMessage="Esse vento não existe..."
          />

          <div className="flex gap-2">
            <Button className="h-16 w-16 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80">
              <Plus className="!h-8 !w-8" strokeWidth={2.5} />
            </Button>
            <Button className="h-16 w-16 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80">
              <Calendar className="!h-8 !w-8" strokeWidth={2.5} />
            </Button>
            <Button className="h-16 w-16 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80">
              <Settings className="!h-8 !w-8" strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </div>

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
