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
  inputClassName?: string;
}

export default function SearchBar({
  placeholder,
  emptyMessage,
  data,
  inputClassName,
}: searchBarProps) {
  return (
    <Combobox items={data}>
      <ComboboxInput placeholder={placeholder} className={inputClassName} />
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
