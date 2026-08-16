import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useCreateEvent } from '@/hooks/useCreateEvent';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

type CreateEventFormProps = {
  onCancel?: () => void;
  selectedLocation: { lat: number; lng: number } | null;
};

export default function CreateEventForm({ onCancel, selectedLocation }: CreateEventFormProps) {
  const {
    register,
    handleSubmit,
    handleCreateEvent,
    setValue,
    serverError,
    isSubmitting,
    formState: { errors },
  } = useCreateEvent();

  useEffect(() => {
    if (selectedLocation) {
      setValue('latitude', selectedLocation.lat);
      setValue('longitude', selectedLocation.lng);
    }
  }, [selectedLocation, setValue]);

  return (
    <Card size="default" className="mx-auto max-w-4x1 w-full max-h-fit">
      <CardHeader>
        <h3 className="font-semibold">Criar evento</h3>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(() => handleCreateEvent())}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do evento</Label>
              <Input id="name" placeholder="Ex: Feira de Tecnologia" {...register('name')} />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="description">Descrição do evento</Label>
              <Input
                id="description"
                placeholder="Ex: Uma feira de tecnologia com palestras e workshops"
                {...register('description')}
              />
              {errors.description && (
                <p className="text-sm text-red-500">{errors.description.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="datetime-local">Data do evento</Label>
              <Input
                id="datetime-local"
                type="datetime-local"
                {...register('date_Time', {
                  setValueAs: (value) => (value ? new Date(value).toISOString() : ''),
                })}
              />
              {errors.date_Time && (
                <p className="text-sm text-red-500">{errors.date_Time.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="location">Local do evento</Label>
              <Input
                id="location"
                placeholder="Ex: Centro de Convenções - Centro"
                {...register('location')}
              />
              {errors.location && <p className="text-sm text-red-500">{errors.location.message}</p>}
            </div>
            <div>
              <Label htmlFor="capacity">Número de esperado participantes</Label>
              <Input id="capacity" type="number" placeholder="Ex: 100" {...register('capacity')} />
              {errors.capacity && <p className="text-sm text-red-500">{errors.capacity.message}</p>}
            </div>
          </div>

          {serverError && <p className="text-sm text-red-500">{serverError}</p>}

          <div className="mt-4 flex gap-2">
            <Button
              type="submit"
              variant={'default'}
              size={'lg'}
              className="font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Criando conta...' : 'Criar Conta'}
            </Button>
            <Button
              onClick={() => onCancel?.()}
              type="button"
              variant={'secondary'}
              size={'lg'}
              className={'font-semibold'}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
