import { Input } from '../ui/input';

type SearchBarProps = {
  placeHolder: string;
};

export default function SearchBar({ placeHolder }: SearchBarProps) {
  return <Input placeholder={placeHolder} />;
}
