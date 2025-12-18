import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GenAIIntro } from './genai-intro';

export const metadata = {
  title: 'About Us | BluePrint Portfolio',
  description: 'Learn about our mission, values, and the talented team behind BluePrint Portfolio.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6 lg:py-24">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">About BluePrint</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Discover our story, our values, and the team driving our success.
          </p>
        </div>

        <div className="rounded-lg bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-primary">Our Introduction</h2>
          <GenAIIntro />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              To transform complex engineering challenges into elegant, efficient, and sustainable realities. We are dedicated to pushing the boundaries of design and construction, delivering projects that not only meet but exceed our clients' expectations for quality, safety, and performance.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
              <li><strong>Innovation:</strong> We embrace creativity and new technologies to find the best solutions.</li>
              <li><strong>Integrity:</strong> We operate with honesty and transparency in all our relationships.</li>
              <li><strong>Excellence:</strong> We are committed to the highest standards of quality and precision.</li>
              <li><strong>Collaboration:</strong> We believe the best results come from working together with our clients and partners.</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-center text-lg text-muted-foreground">The architects and engineers behind our success.</p>
          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => {
              const image = PlaceHolderImages.find((img) => img.id === member.imageId);
              return (
                <div key={member.name} className="text-center">
                  <Avatar className="mx-auto h-32 w-32 mb-4">
                    {image && (
                      <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint} />
                    )}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
