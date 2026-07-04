import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import CadastroPage from '@/pages/cadastro';
import MapaPage from '@/pages/mapa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 select-none">
      <HomePage />
    </main>
  );
}

export function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 select-none">
      <LoginPage />
    </main>
  );
}

export function Cadastro() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 select-none">
      <CadastroPage />
    </main>
  );
}

export function Mapa() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 select-none">
      <MapaPage />
    </main>
  );
}
