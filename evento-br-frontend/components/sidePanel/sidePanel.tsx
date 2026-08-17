import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useGetEvents } from '@/hooks/useGetEvents';
import { getEventsResponseType } from '@/types/getEventsResponse';
import { useCallback, useEffect, useState } from 'react';
import Header from './header';
import SearchBar from './searchBar';
import EventsList from './eventsList';
import PanelActions from './panelActions';
import FilterButton from './filterButton';
import SidePanelDialogs from './sidePanelDialogs';

interface SidePanelProps {
  selectedLocation: { lat: number; lng: number } | null;
}

export default function SidePanel({ selectedLocation }: SidePanelProps) {
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [painelSideOpen, setPainelSideOpen] = useState(true);
  const [events, setEvents] = useState<getEventsResponseType[] | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const { requireAuth } = useAuth();
  const { handleGetEvents } = useGetEvents();

  const router = useRouter();

  const fetchEvents = useCallback(async () => {
    setEvents(await handleGetEvents());
  }, [handleGetEvents]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchEvents();
  }, []);

  const filteredEvents = events?.filter((event) => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return true;
    }

    return [event.name, event.location].some((field) => field.toLowerCase().includes(query));
  });

  return (
    <>
      <div
        className={`fixed top-4 left-4 z-1 flex max-h-[calc(100vh-2rem)] w-1/4 flex-col gap-4 overflow-hidden rounded-md bg-neutral-100 p-4 shadow-md transition-transform duration-300 ease-in-out ${painelSideOpen ? 'translate-x-0' : '-translate-x-[calc(100%+2rem)]'}`}
      >
        <Header className="mx-auto w-1/3 flex justify-center" />

        <div className="flex gap-2">
          <div className="flex-1">
            <SearchBar
              placeHolder="Procure um evento..."
              className="border-1 rounded-md border-gray-300 bg-white h-full"
              value={searchInput}
              onChange={setSearchInput}
              onSubmmit={() => setSearchQuery(searchInput)}
            />
          </div>
          <FilterButton className="bg-white size-10 rounded-md border-1 border-gray-300 flex items-center justify-center" />
        </div>

        <PanelActions
          onCreateEvent={() => requireAuth(() => setCreateEventOpen(true))}
          onOpenCalendar={() => requireAuth(() => setCalendarOpen(true))}
          onOpenProfile={() =>
            requireAuth(() => {
              router.push('/perfil');
            })
          }
          onOpenSettigns={() => requireAuth(() => setSettingsOpen(true))}
          selectedLocation={selectedLocation}
        />

        <EventsList events={filteredEvents ?? null} />
      </div>

      <Button
        onClick={() => setPainelSideOpen((prev) => !prev)}
        variant="outline"
        className="fixed top-8 left-8 z-2 size-10 rounded-md border-1 border-gray-300 bg-white p-0 shadow-md"
      >
        <Menu
          className={`!h-5 !w-5 text-gray-700 transition-transform duration-300 ease-in-out ${
            painelSideOpen ? 'rotate-0' : 'rotate-90'
          }`}
          strokeWidth={2.5}
        />
      </Button>

      <SidePanelDialogs
        createEventOpen={createEventOpen}
        setCreateEventOpen={setCreateEventOpen}
        selectedLocation={selectedLocation}
        calendarOpen={calendarOpen}
        setCalendarOpen={setCalendarOpen}
        settingsOpen={settingsOpen}
        setSettingsOpen={setSettingsOpen}
      />
    </>
  );
}
