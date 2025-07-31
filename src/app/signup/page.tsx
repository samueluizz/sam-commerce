'use client';

import SignUp from '@/components/customComponents/users/signUp';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function LoginPage() {
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === 'dark' ? '/logo-dark.png' : '/logo.png';

  return (
    <div className='bg-transparent flex flex-col items-center justify-center gap-6 p-6 md:p-10'>
      <div className='flex w-full max-w-3xl flex-col gap-6'>
        <Link href='/' className='flex items-center justify-center'>
          <Image
            src={logoSrc}
            alt='logo da empresa'
            width={420}
            height={280}
            quality={100}
            className='object-contain'
            style={{ height: 'auto' }}
            priority
          />
        </Link>

        <SignUp />
      </div>
    </div>
  );
}
