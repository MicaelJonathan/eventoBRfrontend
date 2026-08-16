import type { CreateEventSchemaType } from '@/schemas/createEventSchema';
import { api } from '@/lib/api';

export async function createEvent(data: CreateEventSchemaType) {
  await api.post('/Event', data);
}
