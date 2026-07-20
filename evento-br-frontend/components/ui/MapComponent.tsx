'use client';

import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  className?: string;
}

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapComponent({ latitude, longitude, className }: MapComponentProps) {
  const centerPosition: [number, number] = [latitude, longitude];
  const mapRef = useRef<L.Map | null>(null);

  return (
    <MapContainer
      center={centerPosition}
      zoom={13}
      zoomControl={false}
      style={{ width: '100vw', height: '100vh' }}
      className={className}
      // Pelo que entendi, garante que o mapa apareça corretamente e não fique "duplicado" nas refs.
      whenReady={() => {
      const container = mapRef.current?.getContainer();
        if (container) {
          (container as any)._leaflet_id = mapRef.current
            ? (mapRef.current as any)._leaflet_id
            : null;
        }
      }}
    >
      {}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Pin exemplo teste, delete depois */}
      <Marker position={centerPosition} icon={defaultIcon}>
        <Popup>
          <span className="text-zinc-900 font-medium">Evento massa aqui!</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
