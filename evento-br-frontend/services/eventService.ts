import { api } from '@/lib/api';

export async function createEvent() {
  const token = localStorage.getItem('token');

  await api.post(
    '/Event',
    {
      name: 'string',
      description: 'string',
      date_Time: '2026-08-16T12:35:51.870Z',
      location: 'string',
      latitude: 0,
      longitude: 0,
      capacity: 0,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}
