import '../app/globals.css';
import ProfileView from '@/components/ui/createProfileViewForm';

export default function PerfilPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 select-none">
      <ProfileView />
    </main>
  );
}