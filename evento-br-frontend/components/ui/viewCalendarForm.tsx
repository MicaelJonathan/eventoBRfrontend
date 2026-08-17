import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { useCalendarEvents } from '@/hooks/useCalendarEvents';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type CreateCalendarFormProps = {
  onCancel?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function CreateCalendarForm({
  onCancel,
  open = true,
  onOpenChange,
}: CreateCalendarFormProps) {
  const [selected, setSelected] = useState<Date | undefined>(undefined);

  const { events, markedDates } = useCalendarEvents();

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
