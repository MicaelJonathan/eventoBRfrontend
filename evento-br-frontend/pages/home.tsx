import '../app/globals.css';
import SearchBar from '@/components/ui/searchBar';

export default function HomePage({}) {
  return (
    <div className="fixed top-16 left-16 z-50">
      <SearchBar
        placeholder="Aqui será o texto antes de digitar"
        data={['Opção 1', 'Opção 2']}
        emptyMessage="Não há esse item..."
      />
    </div>
  );
}
