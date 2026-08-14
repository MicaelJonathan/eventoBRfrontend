import { Button } from '../ui/button';

type LogOutProps = {
  onSuccess: () => void;
};

export default function LogOut({ onSuccess }: LogOutProps) {
  const handleLogOut = () => {
    localStorage.removeItem('token');
    onSuccess();
    window.location.href = '/home';
  };

  return (
    <div className="">
      <Button
        onClick={handleLogOut}
        className={'h-12 px-6 rounded-2xl bg-purple-700 text-sm font-bold hover:bg-purple-900'}
      >
        Sair da Conta
      </Button>
    </div>
  );
}
