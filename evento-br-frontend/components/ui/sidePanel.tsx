import SearchBar from '@/components/ui/searchBar';
import Image from 'next/image';
import forro from '@/public/forro.png';
import logoBorali from '@/public/logoBorali.webp';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SidePanel() {
  return (
    <div className="fixed top-4 left-4 z-1 rounded-md bg-neutral-100 w-1/4 h-content p-4 flex flex-col gap-4 ">
      <div className="mx-auto w-1/3 flex justify-center">
        <Image src={logoBorali} alt="" />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <SearchBar
            placeholder="Procure um evento..."
            emptyMessage="Não há eventos com esse nome..."
            inputClassName="h-12 border-1 border-gray-300 bg-white"
          />
        </div>
        <Button
          variant={'ghost'}
          className="bg-white size-12 rounded-md border-1 border-gray-300 flex items-center justify-center"
        >
          <SlidersHorizontal />
        </Button>
      </div>

      <div>
        <h3>Pŕoximos Eventos</h3>
        <ul>
          <li className="bg-white flex items-center gap-3 border-1 border-gray-300 rounded-md">
            <div className="relative size-24 overflow-hidden rounded-md shrink-0">
              <Image src={forro} alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <h4>Forró no Coreto</h4>
              <span>Coreto da Praça de Edvaldo Motta</span>
              <span>24 Mai. 20:00</span>
              <span>250+</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
