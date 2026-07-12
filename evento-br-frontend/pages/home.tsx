import '../app/globals.css';
import SearchBar from '@/src/searchBar';

export default function HomePage({}) {
  return (
    <div className="fixed top-16 left-16 z-50">
      <SearchBar />
    </div>
  );
}
