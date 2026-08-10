import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';

type CreateProfileViewFormProps = {
  onCancel?: () => void;
};

export default function CreateProfileViewForm({ onCancel }: CreateProfileViewFormProps) {
  const { register, handleSubmit } = useForm();
  return (
    <DialogContent className="sm:max-w-xl">
      <DialogHeader>
        <DialogTitle>Perfil do usuário</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div>
          <p>Nome: </p>
        </div>
        <div>
          <p>Email: </p>
        </div>
      </div>
    </DialogContent>
  );
}
