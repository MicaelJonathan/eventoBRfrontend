import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type CreateSettingsFormProps = {
  onCancel?: () => void;
};

export default function CreateSettingsForm({ onCancel }: CreateSettingsFormProps) {
  return (
    <DialogContent className="sm:max-w-xl">
      <DialogHeader>
        <DialogTitle>Configurações</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <p>Em construção...</p>
      </div>
    </DialogContent>
    );
}