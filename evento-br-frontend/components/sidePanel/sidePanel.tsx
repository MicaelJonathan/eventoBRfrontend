import Header from './header';
import SearchBar from './searchBar';
import FilterButton from './filterButton';
import EventCard from './eventCard';

export default function SidePanel() {
  return (
    <div className="fixed top-4 left-4 z-1 rounded-md bg-neutral-100 w-1/4 h-content p-4 flex flex-col gap-4 shadow-md ">
      <Header className="mx-auto w-1/3 flex justify-center" />

      <div className="flex gap-2">
        <div className="flex-1">
          <SearchBar
            placeHolder="Procure um evento..."
            className="border-1 rounded-md border-gray-300 bg-white h-full"
          />
        </div>
        <FilterButton className="bg-white size-10 rounded-md border-1 border-gray-300 flex items-center justify-center" />
      </div>

      <div className="flex flex-col gap-2">
        <h3>Pŕoximos Eventos</h3>
        <ul className="flex flex-col gap-2">
          <li>
            <EventCard />
          </li>
          <li>
            <EventCard />
          </li>
        </ul>
      </div>
    </div>
  );
}
