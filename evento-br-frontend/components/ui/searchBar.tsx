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

export default function SearchBar({ placeholder, emptyMessage, data }: searchBarProps) {
  return (
    <Combobox items={data}>
      <ComboboxInput placeholder={placeholder} className={'h-12'} />
      <ComboboxContent>
        <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
