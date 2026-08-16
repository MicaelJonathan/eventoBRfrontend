import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

type CreateEventFormProps = {
  onCancel?: () => void;
  selectedLocation: { lat: number; lng: number } | null;
};

export default function CreateEventForm({ onCancel, selectedLocation }: CreateEventFormProps) {
  const { register, handleSubmit } = useForm();

  const coordinatesToString = selectedLocation
    ? `${selectedLocation.lat.toFixed(5)}, ${selectedLocation.lng.toFixed(5)}`
    : 'Nenhuma coordenada selecionada';

  return (
    <Card
      size="default"
      className="mx-auto max-w-4x1 w-full max-h-fit"
    >
      <CardHeader>
        <h3 className="font-semibold">Criar evento</h3>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do evento</Label>
              <Input id="name" placeholder="Ex: Feira de Tecnologia" {...register('name')} />
            </div>
            <div>
              <Label htmlFor="description">Descrição do evento</Label>
              <Input
                id="description"
                placeholder="Ex: Uma feira de tecnologia com palestras e workshops"
                {...register('description')}
              />
            </div>
            <div>
              <Label htmlFor="date">Data do evento</Label>
              <Input id="date" type="date" {...register('date')} />
            </div>
            <div>
              <Label htmlFor="time">Horário do evento</Label>
              <Input id="time" type="time" {...register('time')} />
            </div>
            <div>
              <Label htmlFor="location">Local do evento</Label>
              <Input
                id="location"
                placeholder="Ex: Centro de Convenções - Centro"
                {...register('location')}
              />
            </div>
            <div>
              <Label htmlFor="capacity">Número de esperado participantes</Label>
              <Input id="capacity" type="number" placeholder="Ex: 100" {...register('capacity')} />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button type="submit">Criar evento</Button>
            <Button onClick={() => onCancel?.()}>Cancelar</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
