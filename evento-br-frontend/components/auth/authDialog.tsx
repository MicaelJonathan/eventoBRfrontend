import { Button } from '@/components/ui/button';
import SignInUserForm from '@/components/auth/signInUserForm';
import SignUpUserForm from '@/components/auth/signUpUserForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useState } from 'react';

type AuthDialogProps = {
  onSignInSuccess: () => void;
};

export default function AuthDialog({ onSignInSuccess }: AuthDialogProps) {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-8 right-8 z-1 flex gap-3">
        <Button
          onClick={() => setSignInOpen(true)}
          variant={'outline'}
          className="h-14 px-8 rounded-2xl text-md font-bold"
        >
          Entrar
        </Button>
        <Button
          onClick={() => setSignUpOpen(true)}
          className="h-14 px-8 rounded-2xl bg-purple-700 text-md font-bold hover:bg-purple-900 "
        >
          Cadastro
        </Button>
      </div>

      <Dialog open={signInOpen} onOpenChange={setSignInOpen}>
        <DialogContent className="p-0 sm:max-w-md">
          <SignInUserForm onSignInSuccess={onSignInSuccess} onCancel={() => setSignInOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={signUpOpen} onOpenChange={setSignUpOpen}>
        <DialogContent className="p-0 sm:max-w-md">
          <SignUpUserForm onCancel={() => setSignUpOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
