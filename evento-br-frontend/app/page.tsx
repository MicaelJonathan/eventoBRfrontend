// Pequeno teste 2
import HomePage from '@/pages/home';
import PerfilPage from '@/pages/perfil';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center select-none">
      <HomePage />
    </main>
  );
}

export function Perfil() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center select-none">
      <PerfilPage />
    </main>
  );
}
