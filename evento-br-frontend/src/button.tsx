import { Button } from '@/components/ui/button';

import { Roboto } from 'next/font/google';
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

export interface ButtonAppInterface {
  size:
    'lg' | 'default' | 'xs' | 'sm' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg' | null | undefined;
  text: string;
}

export default function ButtonApp({ size, text }: ButtonAppInterface) {
  return (
    <>
      <div className={roboto.className}>
        <Button className={'w-lg py-6 text-2xl bg-lime-400 text-amber-950'} size={size}>
          {text}
        </Button>
      </div>
    </>
  );
}
