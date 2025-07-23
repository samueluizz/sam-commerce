'use client';
import { CiLocationOn, CiDeliveryTruck } from 'react-icons/ci';

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header
      className={`flex justify-between items-center w-full text-xs sm:text-sm p-2 text-gray mt-2 md:mt-0`}
    >
      <div className='hidden sm:block'>{title}</div>
      <div className='sm:hidden text-center flex-1'>{title}</div>

      <div className='hidden sm:flex justify-between gap-2 md:gap-4 font-mono'>
        <div className='flex items-center gap-1'>
          <CiLocationOn />
          <span>Our Store</span>
        </div>
        <div className='flex items-center gap-1'>
          <CiDeliveryTruck />
          <span>Track your order</span>
        </div>
      </div>
    </header>
  );
}
