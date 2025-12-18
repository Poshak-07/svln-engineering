import Link from 'next/link';
import { Mail, Phone, Twitter, Linkedin, Facebook } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
];

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="px-6 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-4">
            <Link
              href="/"
              aria-label="Go to Home"
              className="flex flex-col leading-[0.9] select-none"
            >
              <span className="text-lg font-extrabold italic text-red-600 tracking-wide">
                SVLN
              </span>
              <span className="text-sm font-extrabold italic text-blue-700 tracking-wide -mt-0.5">
                ENGINEERING
              </span>
            </Link>

            <p className="text-sm text-gray-600 max-w-sm">
              India-based IT hardware procurement partner for government and institutional clients.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <a
                href="mailto:info@svlnengineering.in"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                info@svlnengineering.in
              </a>
              <a
                href="tel:+919885588966"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +91 9885588966
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Follow Us</h4>
            <div className="flex space-x-4 text-gray-600">

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/svlnengineering/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>

            </div>
          </div>

        </div>

        {/* LEGAL BAR */}
        <div className="mt-10 border-t pt-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
            <span>
              © {new Date().getFullYear()} SVLN Engineering. All Rights Reserved.
            </span>
            <div className="flex gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
