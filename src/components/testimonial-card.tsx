import { Card, CardContent } from '@/components/ui/card';
import type { testimonials } from '@/lib/data';

type TestimonialCardProps = {
  testimonial: (typeof testimonials)[0];
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col justify-between p-6">
        <blockquote className="text-lg italic text-foreground">
          "{testimonial.quote}"
        </blockquote>
        <div className="mt-4 text-right">
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </CardContent>
    </Card>
  );
}
