import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | BluePrint Portfolio`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailsPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectImages = project.imageIds.map(id => 
    PlaceHolderImages.find(img => img.id === id)
  ).filter(Boolean) as (typeof PlaceHolderImages)[0][];

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6 lg:py-24">
      <div className="space-y-8">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {projectImages.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <Image
                        src={image.imageUrl}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>{project.longDescription}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Outcome</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>{project.outcome}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
