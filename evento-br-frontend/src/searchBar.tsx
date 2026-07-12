'use client';

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from '@/components/ui/combobox';

const examples = [
  'Brasil',
  'Argentina',
  'Chile',
  'Uruguai',
  'Paraguai',
  'Peru',
  'Colômbia',
  'Venezuela',
  'Equador',
  'Bolívia',
  'Guiana',
  'Suriname',
];

export default function SearchBar() {
  return (
    <Combobox items={examples}>
      <ComboboxInput placeholder="Digite o nome de um país..." />
      <ComboboxContent>
        <ComboboxEmpty>E esse país lá existe?</ComboboxEmpty>
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
