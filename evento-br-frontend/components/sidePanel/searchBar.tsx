import { Search } from 'lucide-react';
import { InputGroup, InputGroupInput, InputGroupAddon } from '../ui/input-group';
import { ChangeEvent, KeyboardEvent } from 'react';

type SearchBarProps = {
  className?: string;
  placeHolder: string;
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
};

export default function SearchBar({
  className,
  placeHolder,
  value,
  onChange,
  onEnter,
}: SearchBarProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onEnter();
    }
  };

  return (
    <>
      <InputGroup className={className}>
        <InputGroupInput
          placeholder={placeHolder}
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </>
  );
}
