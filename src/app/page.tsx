import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services, projects, testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "hero-background"
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Engineering Reliable Technology Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            India-based IT hardware procurement partner supplying genuine OEM
            products for government and institutional needs.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/projects">
              Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                Our Services
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                What We Do
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a comprehensive range of engineering services to meet
                the needs of any project, from concept to completion.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 pt-12">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-background py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Our Trusted Partners
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              We collaborate with established OEMs and industry-leading brands
              to deliver reliable and compliant technology solutions.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {[
              "bluestar.png",
              "pristine.jpg",
              "Bosch.png",
              "powerol.png",
              "Vertiv.png",
              "Amaron.png",
            ].map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center rounded-xl border bg-white p-6 shadow-sm"
              >
                {/* Fixed-size logo container */}
                <div className="relative h-20 w-40">
                  <Image
                    src={`/${partner}`}
                    alt={`${partner.replace(/\.(png|jpg|jpeg)/i, "")} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full border-t">
        <div className="container grid items-center gap-6 px-4 py-12 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Start Your Next Project?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's build something amazing together. Contact us today for a
              consultation.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
