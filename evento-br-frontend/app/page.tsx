import HomePage from '@/pages/home';
import RegisterUserPage from '@/pages/registerUser';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 select-none">
      <HomePage />
    </main>
  );
}

export function RegisterUser() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 select-none">
      <RegisterUserPage />
    </main>
  );
}
