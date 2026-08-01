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
