import { Search } from 'lucide-react';
import { InputGroup, InputGroupInput, InputGroupAddon } from '../ui/input-group';
import { ChangeEvent, KeyboardEvent } from 'react';

type SearchBarProps = {
  className?: string;
  placeHolder: string;
  value: string;
  onChange: (value: string) => void;
  onSubmmit: () => void;
};

export default function SearchBar({
  className,
  placeHolder,
  value,
  onChange,
  onSubmmit,
}: SearchBarProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmmit();
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
          <Search onClick={() => onSubmmit()} className="cursor-pointer size-5" />
        </InputGroupAddon>
      </InputGroup>
    </>
  );
}
