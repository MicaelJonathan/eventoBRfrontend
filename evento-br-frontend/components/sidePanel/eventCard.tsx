import Image from 'next/image';
import forro from '@/public/forro.png';
import { Users, MapPin, Calendar, Bookmark } from 'lucide-react';

export default function EventCard() {
  const evento = {
    imagem: forro,
    titulo: 'Evento Patoense',
    capacidade: 250,
    local: 'Praça Edvaldo Motta',
    dia: 24,
    mes: 'maio',
    horario: '20:00',
  };

  return (
    <div className="bg-white flex w-full items-center border-1 border-gray-300 rounded-md">
      <div className="relative size-24 overflow-hidden rounded-md shrink-0">
        <Image src={evento.imagem} alt="" fill className="object-cover" />
      </div>

      <div className="flex flex-1 items-center">
        <div className="flex flex-col p-2">
          <h4>{evento.titulo}</h4>
          <ul className="flex flex-col gap-1">
            <li className="flex text-gray-500 items-center gap-1">
              <Users className="size-4" />
              <p className="text-xs">{evento.capacidade}+</p>
            </li>
            <li className="flex text-gray-500 items-center gap-1">
              <MapPin className="size-4" />
              <p className="text-xs">{evento.local}</p>
            </li>
            <li className="flex text-gray-500 items-center gap-1">
              <Calendar className="size-4" />
              <p className="text-xs">
                {evento.dia} de {evento.mes} às {evento.horario}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Bookmark className="ml-auto mr-3 shrink-0 text-gray-500" />
    </div>
  );
}
