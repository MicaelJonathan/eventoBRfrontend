import type { EventType } from '@/types/event';

export const tempMockEvents: EventType[] = [
  {
    id: '0',
    title: 'Evento Patoense',
    imageUrl: '/forro.png',
    spot: 'Praça Edvaldo Motta',
    date: '24 de maio',
    hour: '20:00',
    participantsQuantity: 250,
    latitude: -7.0296,
    longitude: -37.281,
    saved: false,
  },
  {
    id: '1',
    title: 'Evento de Luta',
    imageUrl: '/forro.png',
    spot: 'Pertinho de você',
    date: '18 de agosto',
    hour: '21:00',
    participantsQuantity: 2,
    latitude: -7.021,
    longitude: -37.274,
    saved: false,
  },
];
