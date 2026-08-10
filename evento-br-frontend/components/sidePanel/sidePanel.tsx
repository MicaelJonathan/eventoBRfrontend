import Header from './header';
import SearchBar from './searchBar';
import FilterButton from './filterButton';
import EventCard from './eventCard';
import { Button } from '@/components/ui/button';
import { Plus, Calendar, User, Settings, Menu } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import CreateEventDialog from '@/components/ui/createEventForm';
import CalendarDialog from '@/components/ui/viewCalendarForm';
import CreateProfileView from '@/components/ui/createProfileViewForm';
import CreateSettingsView from '@/components/ui/createSettingsForm';

export default function SidePanel() {
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [painelSideOpen, setPainelSideOpen] = useState(true);

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

        <div className="flex gap-2">
          <Button
            onClick={() => setCreateEventOpen(true)}
            variant="outline"
            className="bg-white size-10 rounded-md border-1 border-gray-300 p-0"
          >
            <Plus className="!h-5 !w-5 text-gray-700" strokeWidth={2.5} />
          </Button>
          <Button
            onClick={() => setCalendarOpen(true)}
            variant="outline"
            className="bg-white size-10 rounded-md border-1 border-gray-300 p-0"
          >
            <Calendar className="!h-5 !w-5 text-gray-700" strokeWidth={2.5} />
          </Button>
          <Button
            onClick={() => setUserOpen(true)}
            variant="outline"
            className="bg-white size-10 rounded-md border-1 border-gray-300 p-0"
          >
            <User className="!h-5 !w-5 text-gray-700" strokeWidth={2.5} />
          </Button>
          <Button
            onClick={() => setSettingsOpen(true)}
            variant="outline"
            className="bg-white size-10 rounded-md border-1 border-gray-300 p-0"
          >
            <Settings className="!h-5 !w-5 text-gray-700" strokeWidth={2.5} />
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Pŕoximos Eventos</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <EventCard />
            </li>
            <li>
              <EventCard />
            </li>
          </ul>
        </div>
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

      <Dialog open={userOpen} onOpenChange={setUserOpen}>
        <DialogContent className="p-0 sm:max-w-md">
          <CreateProfileView onCancel={() => setUserOpen(false)} />
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
