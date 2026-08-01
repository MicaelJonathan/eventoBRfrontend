import { Search } from 'lucide-react';
import { InputGroup, InputGroupInput, InputGroupAddon } from '../ui/input-group';

type SearchBarProps = {
  className?: string;
  placeHolder: string;
};

export default function SearchBar({ className, placeHolder }: SearchBarProps) {
  return (
    <>
      <InputGroup className={className}>
        <InputGroupInput placeholder={placeHolder} />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </>
  );
}
