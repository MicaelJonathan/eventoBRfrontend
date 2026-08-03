import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterButtonProps {
  className?: string;
}

export default function FilterButton({ className }: FilterButtonProps) {
  return (
    <Button variant={'ghost'} className={className}>
      <SlidersHorizontal />
    </Button>
  );
}
