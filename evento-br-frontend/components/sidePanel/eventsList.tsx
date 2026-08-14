import type { EventType } from '@/types/event';
import EventCard from './eventCard';

interface EventsListProps {
  events: EventType[];
}

export default function EventsList({ events }: EventsListProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Pŕoximos Eventos</h3>
      <ul className="flex flex-col gap-2">
        {events.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}
