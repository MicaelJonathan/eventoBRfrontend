type CreateSettingsFormProps = {
  onCancel?: () => void;
};

export default function CreateSettingsForm({ onCancel }: CreateSettingsFormProps) {
  return (
    <div className="p-6 space-y-4">
      <h3 className="font-semibold text-lg">Configurações</h3>
      <p>Em construção...</p>
    </div>
    );
}