import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Our Services | BluePrint Portfolio',
  description: 'Explore the comprehensive range of engineering and design services offered by BluePrint Portfolio.',
};

export default function ServicesPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6 lg:py-24">
        <div className="text-center space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            From initial concept to final execution, we provide expert solutions to bring your vision to life.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center">
              <CardHeader className="items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <service.icon className="h-10 w-10" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
