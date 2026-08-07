import { Button } from '../ui/button';

type LogOutProps = {
  onSuccess: () => void;
};

export default function LogOut({ onSuccess }: LogOutProps) {
  const handleLogOut = () => {
    localStorage.removeItem('token');
    console.log('Deslogado com sucesso!');
    onSuccess();
  };

  return (
    <div className="fixed top-8 right-8 z-1">
      <Button
        onClick={handleLogOut}
        className={'h-12 px-6 rounded-2xl bg-purple-700 text-sm font-bold hover:bg-purple-900'}
      >
        Sair
      </Button>
    </div>
  );
}
