import { Button } from '../ui/button';
import { Plus, Calendar, User, Settings } from 'lucide-react';

interface PanelActionsProps {
  onCreateEvent: () => void;
  onOpenCalendar: () => void;
  onOpenProfile: () => void;
  onOpenSettigns: () => void;
  selectedLocation: { lat: number; lng: number } | null;
}

export default function PanelActions({
  onCreateEvent,
  onOpenCalendar,
  onOpenProfile,
  onOpenSettigns,
  selectedLocation,
}: PanelActionsProps) {
  const hasLocation = selectedLocation !== null;
  return (
    <div className="flex gap-2">
      <Button
        onClick={onCreateEvent}
        variant="outline"
        disabled={!hasLocation}
        className={`size-10 rounded-md border-1 border-gray-300 p-0 transition-colors 
          ${
            hasLocation ? 'bg-white hover:bg-gray-50' : 'bg-gray-200 opacity-50 cursor-not-allowed'
          }`}
      >
        <Plus className="!h-5 !w-5 text-gray-700" strokeWidth={2.5} />
      </Button>
      <Button
        onClick={onOpenCalendar}
        variant="outline"
        className="bg-white size-10 rounded-md border-1 border-gray-300 p-0"
      >
        <Calendar className="!h-5 !w-5 text-gray-700" strokeWidth={2.5} />
      </Button>
      <Button
        onClick={onOpenProfile}
        variant="outline"
        className="bg-white size-10 rounded-md border-1 border-gray-300 p-0"
      >
        <User className="!h-5 !w-5 text-gray-700" strokeWidth={2.5} />
      </Button>
      <Button
        onClick={onOpenSettigns}
        variant="outline"
        className="bg-white size-10 rounded-md border-1 border-gray-300 p-0"
      >
        <Settings className="!h-5 !w-5 text-gray-700" strokeWidth={2.5} />
      </Button>
    </div>
  );
}
