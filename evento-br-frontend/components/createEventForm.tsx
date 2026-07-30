import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { Card, CardHeader, CardContent } from './ui/card';

type CreateEventFormProps = {
  onCancel?: () => void;
};

export default function CreateEventForm({ onCancel }: CreateEventFormProps) {
  const { register, handleSubmit } = useForm();
  return (
    <Card
      size="default"
      className="mx-auto w-full max-w-4xl max-h-fit bg-primaryui text-(--whiteui)"
    >
      <CardHeader>
        <h3 className="font-semibold">Criar evento</h3>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do evento</Label>
              <Input id="name" placeholder="Digite o nome do evento" {...register('name')} />
            </div>
            <div>
              <Label htmlFor="description">Descrição do evento</Label>
              <Input id="description" placeholder="Digite a descrição do evento" {...register('description')} />
            </div>
            <div>
              <Label htmlFor="date">Data do evento</Label>
              <Input id="date" type="date" {...register('date')} />
            </div>
            <div>
              <Label htmlFor="location">Local do evento "mudar"</Label>
              <Input id="location" placeholder="Digite o local do evento" {...register('location')} />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button type="submit">Create Event</Button>
            <Button onClick={() => onCancel?.()}>Cancelar</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}