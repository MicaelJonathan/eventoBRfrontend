import { useState } from 'react';
import { createEvent } from '@/services/eventService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Resolver } from 'react-hook-form';
import { CreateEventSchemaType, CreateEventSchema } from '@/schemas/createEventSchema';

export function useCreateEvent() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resolver = zodResolver(CreateEventSchema) as Resolver<CreateEventSchemaType>;
  const form = useForm<CreateEventSchemaType>({ resolver });

  const handleCreateEvent = async (data: CreateEventSchemaType) => {
    setServerError(null);
    setIsSubmitting(true);

    try {
      await createEvent(data);
    } catch (e) {
      setServerError('Informações do formulário não preenchidas corretamente');
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { ...form, handleCreateEvent, serverError, isSubmitting, setValue: form.setValue };
}
