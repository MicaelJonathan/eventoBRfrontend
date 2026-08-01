import Image from 'next/image';
import Header from './header';
import forro from '@/public/forro.png';
import SearchBar from './searchBar';
import FilterButton from './filterButton';

export default function SidePanel() {
  return (
    <div className="fixed top-4 left-4 z-1 rounded-md bg-neutral-100 w-1/4 h-content p-4 flex flex-col gap-4 shadow-md ">
      <Header className="mx-auto w-1/3 flex justify-center" />

      <div className="flex gap-4 bg-red-200">
        <div className="flex-1">
          <SearchBar
            placeHolder="Procure um evento..."
            className="border-1 rounded-md border-gray-300 bg-white h-full"
          />
        </div>
        <FilterButton />
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
