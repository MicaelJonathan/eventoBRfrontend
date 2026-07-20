import '../app/globals.css';
import SignupUserForm from '@/components/ui/signupUserForm';

export default function SignupUserPage({}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 select-none">
      <SignupUserForm></SignupUserForm>
    </div>
  );
}
