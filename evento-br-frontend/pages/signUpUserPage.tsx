import '../app/globals.css';
import SignUpUserForm from '@/components/ui/signUpUserForm';

export default function SignUpUserPage({}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 select-none">
      <SignUpUserForm></SignUpUserForm>
    </div>
  );
}
