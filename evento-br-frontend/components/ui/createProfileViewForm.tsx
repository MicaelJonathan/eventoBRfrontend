'use client';

import { User } from 'lucide-react';
import { Button } from '@base-ui/react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent, CardFooter } from './card';
import LogOut from '@/components/auth/logOut';

export default function ProfileView() {
  const router = useRouter();

  return (
    <div className="bg-purple-100 size-full flex min-h-screen flex-col items-center justify-center p-6 select-none z-[-1]">
      <div className="size-120 bg-linear-to-r from-purple-300 to-purple-400 fixed top-50 left-40 rounded-full blur-3xl z-[-0]"></div>
      <div className="size-120 bg-radial from-purple-400 to-purple-300 fixed top-0 right-[-200] rounded-full blur-3xl z-[-0]"></div>
      <div className="size-200 bg-linear-to-r from-purple-300 to-purple-400 fixed bottom-[-400] right-70 rounded-full blur-3xl z-[-0]"></div>
      <Card size="default" className="mx-auto w-4xl max-w-xl max-h-fit shadow-md z-1 bg-purple-100">
        <CardHeader>
          <span className="font-semibold text-center text-xl">Perfil do Usuário</span>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <User className="size-50 bg-white rounded-full p-4 " />
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
    </div>
  );
}
