import type { CreateEventSchemaType } from '@/schemas/createEventSchema';
import { createEvent } from '@/services/eventService';

export function useCreateEvent() {
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
    await createEvent(paylod);
  };

  return { handleCreateEvent };
}
