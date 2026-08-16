import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { createEvent } from '@/services/eventService';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateEventSchemaType, CreateEventSchema } from '@/schemas/createEventSchema';

export function useCreateEvent() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CreateEventSchemaType>({ resolver: zodResolver(CreateEventSchema) });

  const paylod: CreateEventSchemaType = {
    name: 'string',
    description: 'string',
    date_Time: '2026-08-16T12:35:51.870Z',
    location: 'string',
    latitude: 0,
    longitude: 0,
    capacity: 0,
  };

  const handleCreateEvent = async () => {
    setServerError(null);
    setIsSubmitting(true);

    try {
      await createEvent(paylod);
    } catch (e) {
      setServerError('Informações do formulário não preenchidas corretamente');
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { ...form, handleCreateEvent, serverError, isSubmitting, setValue: form.setValue };
}
