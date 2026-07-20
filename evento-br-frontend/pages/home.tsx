'use client';

import '../app/globals.css';
import dynamic from 'next/dynamic';
import SearchBar from '@/components/ui/searchBar';
import { Button } from '@/components/ui/button';
import LoginForm from '@/components/ui/registerUserForm';
import SignupUserForm from '@/components/ui/signupUserForm';
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
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

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
          onClick={() => setLoginOpen(true)}
          className="h-16 px-10 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80"
        >
          Login
        </Button>
        <Button
          onClick={() => setSignupOpen(true)}
          className="h-16 px-10 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80"
        >
          Cadastro
        </Button>
      </div>

      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Entrar na sua conta</DialogTitle>
          </DialogHeader>
          <LoginForm />
        </DialogContent>
      </Dialog>

      <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Criar conta</DialogTitle>
          </DialogHeader>
          <SignupUserForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
