import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { eventDebug, eventDebug2, eventDebugSame1, eventDebugSame2 } from '@/lib/constants';
import { Button } from '@/components/ui/button';

type CreateCalendarFormProps = {
  onCancel?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type EventCalendarFormProps = {
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
  capacity: number;
};

const eventPlaceholder = [eventDebug, eventDebug2, eventDebugSame1, eventDebugSame2].reduce<
  Record<string, EventCalendarFormProps[]>
>((eventsByDate, event) => {
  if (!eventsByDate[event.date]) {
    eventsByDate[event.date] = [];
  }

  eventsByDate[event.date].push(event);
  return eventsByDate;
}, {});

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
  const selectedEvents = selected ? (eventPlaceholder[toKey(selected)] ?? []) : [];

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
            marked: 'rounded-full font-semibold',
          }}
          className="mx-auto"
        />

        {selected ? (
          selectedEvents.length > 0 ? (
            <div className="mt-2 flex flex-col gap-3">
              {selectedEvents.map((event) => (
                <div
                  key={`${event.date}-${event.time}-${event.title}`}
                  className="flex flex-col gap-1 rounded-xl border border-white/20 p-4"
                >
                  <p className="text-lg font-semibold">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <p>
                      <span className="text-sm text-muted-foreground">Data:</span> {event.date}
                    </p>
                    <p>
                      <span className="text-sm text-muted-foreground">Horário:</span> {event.time}
                    </p>
                    <p>
                      <span className="text-sm text-muted-foreground">Local:</span> {event.location}
                    </p>
                    <p>
                      <span className="text-sm text-muted-foreground">Capacidade:</span>{' '}
                      {event.capacity} pessoas
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-2 rounded-xl border p-4 text-sm text-muted-foreground">
              Nenhum evento nessa data.
            </div>
          )
        ) : null}
        <Button onClick={() => onCancel?.()} className="mt-4 w-full">
          Fechar
        </Button>
      </DialogContent>
    </Dialog>
  );
}
