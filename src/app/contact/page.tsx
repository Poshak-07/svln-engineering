import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';

export const metadata = {
  title: 'Contact Us | BluePrint Portfolio',
  description: 'Get in touch with BluePrint Portfolio for inquiries, consultations, or to start your next project.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6 lg:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We'd love to hear from you. Reach out to discuss your project or ask any questions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Our Office</h3>
                <p>21-45, 5th Lane, Viman Nagar, Visakhapatnam, Andhra Pradesh-530009</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <a href="mailto:contact@blueprint.dev" className="hover:text-primary">
                  info@svlnengineering.in
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Call Us</h3>
                <a href="tel:+919885588966" className="hover:text-primary">
                  +91 9885588966
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
