'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Card, CardHeader, CardContent } from './card';
import { Button } from '@base-ui/react';
import LogOut from '@/components/auth/logOut';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfileView() {
  const { register, handleSubmit } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Card size="default" className="mx-auto w-full max-w-xl max-h-fit">
      <CardHeader>
        <h3 className="font-semibold">Perfil do usuário</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p>Nome: </p>
          </div>
          <div>
            <p>Email: </p>
          </div>
        </div>
      </CardContent>
      <Button>  
        <span className="text-sm font-medium">Deletar perfil</span>
      </Button>
      <Button>
        <Link href="/home">
          <span className="text-sm font-medium">Voltar para home</span>
        </Link>
      </Button>
      <LogOut onSuccess={() => {}}/>
    </Card>
  );
}