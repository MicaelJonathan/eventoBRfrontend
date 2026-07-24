import '../app/globals.css';
import SignInUserForm from '@/components/ui/signInUserForm';

export default function SignInUserPage({}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 select-none">
      <SignInUserForm></SignInUserForm>
    </div>
  );
}
