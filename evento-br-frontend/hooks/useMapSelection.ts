import { useState } from 'react';

export function useMapSelection() {
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  return { selectedLocation, setSelectedLocation };
}
