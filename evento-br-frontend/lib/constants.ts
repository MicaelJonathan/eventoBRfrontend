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
  title: 'Apresentação MPV Boralí',
  description: 'Apresentação do MPV Boralí na sala do P6.',
  date: '2026-08-18',
  time: '07:00',
  location: 'UEPB - Sala P6',
  capacity: 30
};

export const eventDebug2: eventDebugProps = {
  title: 'Promoção de estoque Armazem Paraíba',
  description: 'Todos os produtos em até 30% de desconto, venha conferir!',
  date: '2026-08-20',
  time: '10:00',
  location: 'Armazém Paraíba - Loja Central Centro Patos',
  capacity: 250
};

export const eventDebugSame1: eventDebugProps = {
  title: 'Corrida Solidaria - Alça sudoeste 2026',
  description: 'Corrida em prol da luta contra o cancer, venha participar e ajudar a salvar vidas!',
  date: '2026-08-22',
  time: '05:00',
  location: 'Alça Sudoeste - Patos PB',
  capacity: 150
};

export const eventDebugSame2: eventDebugProps = {
  title: 'Campanha de vacinação aos animais',
  description: 'Campanha de vacinação aos animais do bairro, venha vacinar seu animalzinho e ajudar a manter a saúde da população!',
  date: '2026-08-30',
  time: '10:00',
  location: 'Hospital Veterinário Alto da Tubiba - Patos PB',
  capacity: 500
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
