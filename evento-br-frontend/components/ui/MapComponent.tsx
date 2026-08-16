'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { defaultMapValues } from '@/lib/constants';
import { tempMockEvents } from '@/lib/tempMockEvents'; // Importando os eventos mockados, remover dps.
import { useGetEvents } from '@/hooks/useGetEvents';
import { getEventsResponseType } from '@/types/getEventsResponse';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  className?: string;
  selectedLocation: { lat: number; lng: number } | null;
  onLocationSelect: (location: { lat: number; lng: number }) => void;
}

function createPinIcon(color: string) {
  return L.divIcon({
    className: '',
    html: `
      <svg width="32" height="42" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 0C7.163 0 0 7.163 0 16c0 11 16 26 16 26s16-15 16-26c0-8.837-7.163-16-16-16z"
          fill="${color}"
        />
        <circle cx="16" cy="16" r="6" fill="white" />
      </svg>
    `,
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -42],
  });
}

const IconEvent1 = createPinIcon('#7e22ce'); // Icon 1, roxo
const IconEvent2 = createPinIcon('#1717b6'); // Icon 2, azul
const IconMarker = createPinIcon('#19191a'); // Icon de marcador, preto

function ClickHandler({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function MapComponent({
  latitude,
  longitude,
  className,
  selectedLocation,
  onLocationSelect,
}: MapComponentProps) {
  const [events, setEvents] = useState<[getEventsResponseType] | null>(null);
  const { handleGetEvents } = useGetEvents();

  const centerPosition: [number, number] = [latitude, longitude];
  const mapRef = useRef<L.Map | null>(null);

  const mapHandlerClick = (lat: number, lng: number) => {
    onLocationSelect({ lat, lng });
    console.log('Coordenadas: ', { latitude: lat, longitude: lng });
  };

  const fetchEvents = useCallback(async () => {
    setEvents(await handleGetEvents());
  }, [handleGetEvents]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchEvents();
  }, []);

  return (
    <MapContainer
      center={centerPosition}
      zoom={defaultMapValues.zoom}
      maxBounds={defaultMapValues.bounds}
      minZoom={defaultMapValues.minZoom}
      maxZoom={defaultMapValues.maxZoom}
      zoomControl={false}
      style={{ width: '100vw', height: '100vh' }}
      className={className}
      whenReady={() => {
        const container = mapRef.current?.getContainer();
        if (container) {
          (container as any)._leaflet_id = mapRef.current
            ? (mapRef.current as any)._leaflet_id
            : null;
        }
      }}
    >
      <ZoomControl position="bottomright" />
      {}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickHandler onMapClick={mapHandlerClick} />
      {/* Modificar "tempMockEvents.map" para pegar os eventos do backend, por enquanto está pegando dos mocks.
      Se o tempo deixar modificar esse box tb.. não sou bom nisso e tá feio que doi os cabelo. */}
      {events?.map((event) => (
        <Marker key={event.id} position={[event.latitude, event.longitude]} icon={IconEvent2}>
          <Popup>
            {/* <img src={event.imageUrl} /> */}
            <div className="flex flex-col gap-1 text-zinc-900">
              <p className="font-semibold">{event.name}</p>
              <p className="text-sm">{event.location}</p>
              <p className="text-sm">{event.date_Time}</p>
              <p className="text-sm">{event.capacity} participantes</p>
            </div>
          </Popup>
        </Marker>
      ))}
      {selectedLocation && (
        <Marker position={[selectedLocation.lat, selectedLocation.lng]} icon={IconMarker} />
      )}
    </MapContainer>
  );
}
