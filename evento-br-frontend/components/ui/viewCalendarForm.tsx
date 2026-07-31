import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { eventDebug } from '@/lib/constants';
import { eventDebug2 } from '@/lib/constants';
import { eventDebugSame1} from '@/lib/constants';
import { eventDebugSame2 } from '@/lib/constants';
import { Button } from '@/components/ui/button';

type CreateCalendarFormProps = {
  onCancel?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type eventCalendarFormProps = {
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
  capacity: number;
};

const eventPlaceholder: Record<string, eventCalendarFormProps> = {
  [eventDebug.date]: eventDebug,
  [eventDebug2.date]: eventDebug2,
  [eventDebugSame1.date]: eventDebugSame1,
  [eventDebugSame2.date]: eventDebugSame2,
};

function toKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseLocalDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export default function CreateCalendarForm({
  onCancel,
  open = true,
  onOpenChange,
}: CreateCalendarFormProps) {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const markedDates = Object.keys(eventPlaceholder).map((key) => parseLocalDate(key));
  const selectedInfo = selected ? eventPlaceholder[toKey(selected)] : undefined;

  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange?.(isOpen);
    if (!isOpen) onCancel?.();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Calendário de eventos</DialogTitle>
        </DialogHeader>

        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          modifiers={{ marked: markedDates }}
          modifiersClassNames={{
            marked: 'bg-primaryui text-(--whiteui) rounded-full font-semibold',
          }}
          className="mx-auto"
        />

        {selectedInfo ? (
          <div className="mt-2 rounded-xl border border-white/20 p-4 flex flex-col gap-1">
            <p className="font-semibold text-lg">{selectedInfo.title}</p>
            <p className="text-sm text-muted-foreground">{selectedInfo.description}</p>
            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <p>
                <span className="text-sm text-muted-foreground">Data:</span> {selectedInfo.date}
              </p>
              <p>
                <span className="text-sm text-muted-foreground">Horário:</span> {selectedInfo.time}
              </p>
              <p>
                <span className="text-sm text-muted-foreground">Local:</span> {selectedInfo.location}
              </p>
              <p>
                <span className="text-sm text-muted-foreground">Capacidade:</span>{' '}
                {selectedInfo.capacity} pessoas
              </p>
            </div>
          </div>
        ) : selected ? (
          <div className="mt-2 rounded-xl border p-4 text-sm text-muted-foreground">
            Nenhum evento nessa data.
          </div>
        ) : null}
        <Button onClick={() => onCancel?.()} className="mt-4 w-full">
          Fechar
        </Button>
      </DialogContent>
    </Dialog>
  );
}
