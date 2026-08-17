import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useCallback } from 'react';
import { useGetEvents } from '@/hooks/useGetEvents';
import { useEffect, useState } from 'react';
import { getEventsResponseType } from '@/types/getEventsResponse';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type CreateCalendarFormProps = {
  onCancel?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

function parseLocalDate(dateStr: string) {
  const formattedDateStr = dateStr.split('T')[0];
  const [year, month, day] = formattedDateStr.split('-').map(Number);
  console.log([year, month, day]);
  return new Date(year, month - 1, day);
}

export default function CreateCalendarForm({
  onCancel,
  open = true,
  onOpenChange,
}: CreateCalendarFormProps) {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const [events, setEvents] = useState<getEventsResponseType[] | null>(null);

  const { handleGetEvents } = useGetEvents();

  const allData: Date[] = [];
  const markDate = events?.map((event) => {
    allData.push(parseLocalDate(event.date_Time));
  });

  const fetchEvents = useCallback(async () => {
    setEvents(await handleGetEvents());
  }, [handleGetEvents]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchEvents();
  }, []);

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
          modifiers={{ marked: allData }}
          modifiersClassNames={{
            marked: 'rounded-full font-semibold bg-gray-700 text-white',
          }}
          className="mx-auto"
        />

        <ul>
          {selected ? (
            events?.map((event) => (
              <li key={event.id}>
                <div className="mt-2 rounded-xl p-4 flex flex-col gap-1">
                  <p className="font-semibold text-lg">{event.name}</p>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <p>
                      <span className="text-sm text-muted-foreground">Data:</span> {event.date_Time}
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
              </li>
            ))
          ) : (
            <div className="mt-2 rounded-xl  p-4 text-sm text-muted-foreground">
              Nenhum evento nessa data.
            </div>
          )}
        </ul>
        <Button onClick={() => onCancel?.()} className="mt-4 w-full">
          Fechar
        </Button>
      </DialogContent>
    </Dialog>
  );
}
