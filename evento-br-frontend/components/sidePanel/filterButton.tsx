import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FilterButton() {
  return (
    <Button
      variant={'ghost'}
      className="bg-white size-10 rounded-md border-1 border-gray-300 flex items-center justify-center"
    >
      <SlidersHorizontal />
    </Button>
  );
}
