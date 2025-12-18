import Link from 'next/link';
import { Building, Mail, Phone, Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">BluePrint Portfolio</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional engineering and design solutions for modern infrastructure.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:contact@blueprint.dev" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
                contact@blueprint.dev
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter /></a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BluePrint Portfolio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
