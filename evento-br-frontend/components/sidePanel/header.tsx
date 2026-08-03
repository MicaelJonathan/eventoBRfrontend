import { defaultImages } from '@/lib/constants';
import Image from 'next/image';

type HeaderProps = {
  className: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <div className={className}>
      <Image src={defaultImages.logo} alt="" />
    </div>
  );
}
