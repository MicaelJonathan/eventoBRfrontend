import logo from '@/public/logoBorali.webp';
import { StaticImageData } from 'next/image';

interface defaultMapValuesProps {
  lat: number;
  long: number;
  iconSize: [number, number];
  iconAnchor: [number, number];
  zoom: number;
  bounds: [
    corner1: [number, number],
    corner2: [number, number],
    corner3: [number, number],
    corner4: [number, number],
  ];
  minZoom: number;
  maxZoom: number;
}
// Eventos de props para o calendario, Kayke por favor remova os mesmos depois.
interface eventDebugProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
}

export const eventDebug: eventDebugProps = {
  title: 'Evento de Teste',
  description: 'Descrição do evento de teste',
  date: '2026-07-29',
  time: '19:00',
  location: 'Sala de Eventos',
  capacity: 100
};

export const eventDebug2: eventDebugProps = {
  title: 'Evento de Teste 2',
  description: 'Descrição do evento de teste 2',
  date: '2026-07-25',
  time: '20:00',
  location: 'Auditório Principal',
  capacity: 200
};

export const eventDebugSame1: eventDebugProps = {
  title: 'Evento de Teste 3',
  description: 'Descrição do evento de teste 2',
  date: '2026-07-25',
  time: '21:00',
  location: 'Auditório Principal',
  capacity: 200
};

export const eventDebugSame2: eventDebugProps = {
  title: 'Evento de Teste 4',
  description: 'Descrição do evento de teste',
  date: '2026-07-29',
  time: '22:00',
  location: 'Sala de Eventos',
  capacity: 100
};

//-------------------------------

export const defaultMapValues: defaultMapValuesProps = {
  lat: -7.02556,
  long: -37.2779,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  zoom: 13,
  bounds: [
    [5.2697, -60.2097],
    [-33.7511, -53.3947],
    [-7.155, -34.7931],
    [-7.5531, -73.9869],
  ],
  minZoom: 10,
  maxZoom: 18,
};

interface defaultImagesProps {
  logo: StaticImageData;
}

export const defaultImages: defaultImagesProps = {
  logo: logo,
};
