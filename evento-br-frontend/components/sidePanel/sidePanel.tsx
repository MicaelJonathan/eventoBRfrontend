import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Header from './header';
import SearchBar from './searchBar';
import EventCard from './eventCard';
import EventsList from './eventsList';
import PanelActions from './panelActions';
import FilterButton from './filterButton';
import CalendarDialog from '@/components/ui/viewCalendarForm';
import CreateEventDialog from '@/components/ui/createEventForm';
import CreateSettingsView from '@/components/ui/createSettingsForm';

export default function SidePanel() {
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [painelSideOpen, setPainelSideOpen] = useState(true);
  const router = useRouter();
  const { requireAuth } = useAuth();

  return (
    <>
      <div
        className={`fixed top-4 left-4 z-1 rounded-md bg-neutral-100 w-1/4 h-content p-4 flex flex-col gap-4 shadow-md transition-transform duration-300 ease-in-out ${painelSideOpen ? 'translate-x-0' : '-translate-x-[calc(100%+2rem)]'}`}
      >
        <Header className="mx-auto w-1/3 flex justify-center" />

        <div className="flex gap-2">
          <div className="flex-1">
            <SearchBar
              placeHolder="Procure um evento..."
              className="border-1 rounded-md border-gray-300 bg-white h-full"
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
        />

        <EventsList
          events={[
            {
              id: '0',
              title: 'Evento Patoense',
              imageUrl: '/forro.png',
              spot: 'Praça Edvaldo Motta',
              date: '24 de maio',
              hour: '20:00',
              participantsQuantity: 250,
              saved: false,
            },
            {
              id: '0',
              title: 'Evento Patoense',
              imageUrl: '/forro.png',
              spot: 'Praça Edvaldo Motta',
              date: '24 de maio',
              hour: '20:00',
              participantsQuantity: 250,
              saved: false,
            },
          ]}
        />
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

      <Dialog open={createEventOpen} onOpenChange={setCreateEventOpen}>
        <DialogContent className="p-0 sm:max-w-md">
          <CreateEventDialog onCancel={() => setCreateEventOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={calendarOpen} onOpenChange={setCalendarOpen}>
        <DialogContent className="p-0 sm:max-w-md">
          <CalendarDialog onCancel={() => setCalendarOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="p-0 sm:max-w-md">
          <CreateSettingsView onCancel={() => setSettingsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
