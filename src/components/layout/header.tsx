'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      {/* FULL-WIDTH RELATIVE WRAPPER */}
      <div className="relative flex h-16 items-center px-6">

        {/* LOGO (LEFT) */}
        <Link
          href="/"
          aria-label="Go to Home"
          className="flex flex-col leading-[0.9] cursor-pointer select-none"
        >
          <span className="text-lg font-extrabold italic text-red-600 tracking-wide">
            SVLN
          </span>
          <span className="text-sm font-extrabold italic text-blue-700 tracking-wide -mt-0.5">
            ENGINEERING
          </span>
        </Link>

        {/* DESKTOP NAV — TRUE VIEWPORT CENTER */}
        <nav className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === href ? 'text-primary' : 'text-gray-600'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU (RIGHT) */}
        <div className="ml-auto md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-black" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">

                {/* MOBILE LOGO */}
                <Link
                  href="/"
                  className="flex flex-col leading-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg font-extrabold italic text-red-600 tracking-wide">
                    SVLN
                  </span>
                  <span className="text-sm font-extrabold italic text-blue-700 tracking-wide">
                    ENGINEERING
                  </span>
                </Link>

                {/* MOBILE NAV */}
                <nav className="grid gap-4">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === href ? 'text-primary' : 'text-gray-800'
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
