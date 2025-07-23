import * as React from 'react';

import { cn } from '@/lib/utils';

function Navbar({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot='navbar'
      className={cn(
        'flex items-center justify-center py-2 md:py-4 w-full',
        className,
      )}
      {...props}
    />
  );
}

function NavbarLeft({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot='navbar-left'
      className={cn(
        'flex items-center justify-start gap-2 md:gap-4',
        className,
      )}
      {...props}
    />
  );
}

function NavbarRight({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot='navbar-right'
      className={cn('flex items-center justify-end gap-2 md:gap-4', className)}
      {...props}
    />
  );
}

function NavbarCenter({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot='navbar-center'
      className={cn(
        'flex items-center justify-center gap-2 md:gap-4',
        className,
      )}
      {...props}
    />
  );
}

export { Navbar, NavbarCenter, NavbarLeft, NavbarRight };
