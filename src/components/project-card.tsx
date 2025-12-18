import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { projects } from '@/lib/data';

type ProjectCardProps = {
  project: (typeof projects)[0];
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === project.imageId);

  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      {image && (
        <div className="relative h-60 w-full">
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline">
          <Link href={`/projects/${project.slug}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
