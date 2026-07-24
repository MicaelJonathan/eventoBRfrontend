import HomePage from '@/pages/home';
import RegisterUserPage from '@/pages/signUpUserPage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center select-none">
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
