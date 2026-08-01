import { Input } from '../ui/input';
import { Search } from 'lucide-react';

type SearchBarProps = {
  className?: string;
  placeHolder: string;
};

export default function SearchBar({ className, placeHolder }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute right-2 top-[5] pointer-events-none size-5 text-muted-foreground" />
      <Input className={className} placeholder={placeHolder} />
    </div>
  );
}
