import { Button } from '@/components/ui/button';
import SignInUserForm from '@/components/auth/signInUserForm';
import SignUpUserForm from '@/components/auth/signUpUserForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useState } from 'react';

export default function AuthDialog() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-8 right-8 z-1 flex gap-3">
        <Button
          onClick={() => setSignInOpen(true)}
          className="h-16 px-10 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80"
        >
          Login
        </Button>
        <Button
          onClick={() => setSignUpOpen(true)}
          className="h-16 px-10 rounded-2xl bg-primaryui text-(--whiteui) hover:bg-primaryui/80"
        >
          Cadastro
        </Button>
      </div>

      <Dialog open={signInOpen} onOpenChange={setSignInOpen}>
        <DialogContent className="p-0 sm:max-w-md">
          <SignInUserForm onCancel={() => setSignInOpen(false)} />
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
