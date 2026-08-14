import { Dialog, DialogContent } from '@/components/ui/dialog';
import CreateEventDialog from '@/components/ui/createEventForm';
import CalendarDialog from '@/components/ui/viewCalendarForm';
import CreateSettingsView from '@/components/ui/createSettingsForm';

interface SidePanelDialogsProps {
  createEventOpen: boolean;
  setCreateEventOpen: (open: boolean) => void;
  calendarOpen: boolean;
  setCalendarOpen: (open: boolean) => void;
  settingsOpen: boolean;
  setSettingsOpen: (open: boolean) => void;
}

export default function SidePanelDialogs({
  createEventOpen,
  setCreateEventOpen,
  calendarOpen,
  setCalendarOpen,
  settingsOpen,
  setSettingsOpen,
}: SidePanelDialogsProps) {
  return (
    <>
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
