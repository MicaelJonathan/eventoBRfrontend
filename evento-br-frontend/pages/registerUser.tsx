import '../app/globals.css';
import RegisterUserForm from '@/components/ui/registerUserForm';

export default function RegisterUserPage({}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 select-none">
      <RegisterUserForm></RegisterUserForm>
    </div>
  );
}
