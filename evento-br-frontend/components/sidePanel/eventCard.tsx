import Image from 'next/image';
import { Users, MapPin, Calendar, Bookmark } from 'lucide-react';
import { EventType } from '@/types/event';

export default function EventCard() {
  const event: EventType = {
    id: '0',
    title: 'Evento Patoense',
    imageUrl: '/forro.png',
    spot: 'Praça Edvaldo Motta',
    date: '24 de maio',
    hour: '20:00',
    participantsQuantity: 250,
    saved: false,
  };

  return (
    <div className="bg-white flex w-full items-center border-1 border-gray-300 rounded-md">
      <div className="relative size-24 overflow-hidden rounded-md shrink-0">
        <Image src={event.imageUrl} alt="" fill className="object-cover" />
      </div>

      <div className="flex flex-1 items-center">
        <div className="flex flex-col p-2">
          <h4>{event.title}</h4>
          <ul className="flex flex-col gap-1">
            <li className="flex text-gray-500 items-center gap-1">
              <Users className="size-4" />
              <p className="text-xs">{event.participantsQuantity}+</p>
            </li>
            <li className="flex text-gray-500 items-center gap-1">
              <MapPin className="size-4" />
              <p className="text-xs">{event.spot}</p>
            </li>
            <li className="flex text-gray-500 items-center gap-1">
              <Calendar className="size-4" />
              <p className="text-xs">
                {event.date} às {event.hour}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Bookmark className="ml-auto mr-3 shrink-0 text-gray-500" />
    </div>
  );
}
