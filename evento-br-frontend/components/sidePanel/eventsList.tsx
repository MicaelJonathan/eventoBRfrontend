import { getEventsResponseType } from '@/types/getEventsResponse';
import EventCard from './eventCard';

interface EventsListProps {
  events: getEventsResponseType[] | null;
}

export default function EventsList({ events }: EventsListProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1">
      <h3 className="text-lg font-semibold">Pŕoximos Eventos</h3>
      <ul className="flex flex-col gap-2">
        {events?.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}
