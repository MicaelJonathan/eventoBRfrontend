import Image from 'next/image';
import { Users, MapPin, Calendar, Bookmark } from 'lucide-react';
import { EventType } from '@/types/event';

interface EventCardProps {
  event: EventType;
}

export default function EventCard({ event }: EventCardProps) {
  const informationLineClassName = 'flex text-gray-500 items-center gap-1 text-xs';
  const iconsSizeClassName = 'size-4';

  return (
    <div className="bg-white flex w-full items-center border-1 border-gray-300 rounded-md">
      <div className="relative size-24 overflow-hidden rounded-md shrink-0">
        <Image src={event.imageUrl} alt="" fill className="object-cover" />
      </div>

      <div className="flex flex-1 items-center">
        <div className="flex flex-col p-2">
          <h4>{event.title}</h4>
          <ul className="flex flex-col gap-1">
            <li className={informationLineClassName}>
              <Users className={iconsSizeClassName} />
              <span>{event.participantsQuantity}+</span>
            </li>
            <li className={informationLineClassName}>
              <MapPin className={iconsSizeClassName} />
              <span>{event.spot}</span>
            </li>
            <li className={informationLineClassName}>
              <Calendar className={iconsSizeClassName} />
              <span>
                {event.date} às {event.hour}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Bookmark className="ml-auto mr-3 shrink-0 text-gray-500" />
    </div>
  );
}
