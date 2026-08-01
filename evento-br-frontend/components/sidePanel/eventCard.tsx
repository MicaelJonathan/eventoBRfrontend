import Image from 'next/image';
import forro from '@/public/forro.png';
import { Users, MapPin, Calendar, Bookmark } from 'lucide-react';

export default function EventCard() {
  return (
    <div className="bg-white flex w-full items-center border-1 border-gray-300 rounded-md">
      <div className="relative size-24 overflow-hidden rounded-md shrink-0">
        <Image src={forro} alt="" fill className="object-cover" />
      </div>

      <div className="flex flex-1 items-center">
        <div className="flex flex-col p-2">
          <h4>Forró no Coreto</h4>
          <ul className="flex flex-col gap-1">
            <li className="flex text-gray-500 items-center gap-1">
              <Users className="size-4" />
              <p className="text-xs">250+</p>
            </li>
            <li className="flex text-gray-500 items-center gap-1">
              <MapPin className="size-4" />
              <p className="text-xs">Praça Edvaldo Motta</p>
            </li>
            <li className="flex text-gray-500 items-center gap-1">
              <Calendar className="size-4" />
              <p className="text-xs">24 Mai às 20:00</p>
            </li>
          </ul>
        </div>
      </div>
      <Bookmark className="ml-auto mr-3 shrink-0 text-gray-500" />
    </div>
  );
}
