import { projects } from '@/lib/data';
import ProjectCard from '@/components/project-card';

export const metadata = {
  title: 'Our Projects | BluePrint Portfolio',
  description: 'Browse our portfolio of completed projects, showcasing our expertise and commitment to quality.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6 lg:py-24">
      <div className="text-center space-y-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Our Projects</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A showcase of our dedication to engineering excellence and innovative design across various sectors.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
