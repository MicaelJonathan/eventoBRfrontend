'use client';

import { User } from 'lucide-react';
import { Button } from '@base-ui/react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent, CardFooter } from './card';
import LogOut from '@/components/auth/logOut';

export default function ProfileView() {
  const router = useRouter();

  return (
    <Card size="default" className="mx-auto w-full max-w-xl max-h-fit shadow-md">
      <CardHeader>
        <span className="font-semibold text-center text-xl">Perfil do Usuário</span>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <User className="size-50 bg-gray-200 rounded-full p-4 " />
        <span className="text-lg mt-4">Em construção...</span>
      </CardContent>
      <CardFooter className="flex text-white gap-2 justify-center">
        <Button
          className={'h-12 px-6 rounded-2xl bg-purple-700 text-sm font-bold hover:bg-purple-900'}
          onClick={() => {
            router.push('/home');
          }}
        >
          <span className="text-sm font-medium font-semibold">Voltar para home</span>
        </Button>
        <LogOut
          onSuccess={() => {
            router.push('/home');
          }}
        />
      </CardFooter>
    </Card>
  );
}
