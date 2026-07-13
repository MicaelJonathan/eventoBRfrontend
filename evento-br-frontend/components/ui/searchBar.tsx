'use client';

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from '@/components/ui/combobox';

interface searchBarProps {
  placeholder?: string;
  emptyMessage?: string;
  data?: string[];
}

export default function SearchBar({
  placeholder = 'Search...',
  emptyMessage = 'Item vazio',
  data = [
    'Item de Exemplo 1',
    'Item de Exemplo 2',
    'Item de Exemplo 3',
    'Item de Exemplo 4',
    'Item de Exemplo 5',
  ],
}: searchBarProps) {
  return (
    <Combobox items={data}>
      <ComboboxInput
        placeholder={placeholder}
        className={'bg-primaryui w-lg h-16 text-(--whiteui)'}
      />
      <ComboboxContent className={'bg-primaryui w-lg text-(--whiteui)'}>
        <ComboboxEmpty className={'h-12 text-(--grayui)'}>{emptyMessage}</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item} className={'h-12 data-highlighted:bg-(--grayui)'}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
