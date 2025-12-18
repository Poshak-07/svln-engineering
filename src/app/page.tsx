import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "hero-background"
  );

  return (
    <div className="flex flex-col">

      {/* ================= HERO SECTION ================= */}
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

        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-primary-foreground">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
              Engineering Reliable Technology Solutions
            </h1>

            {/* FORCED TWO-LINE SUBTITLE */}
            <p className="mt-3 text-lg md:text-xl leading-relaxed">
              India-based IT hardware procurement partner
              <br className="hidden sm:block" />
              supplying genuine OEM products for government and institutional needs.
            </p>

            <Button asChild size="lg" className="mt-8">
              <Link href="/projects">
                Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  Our Services
                </div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  What We Do
                </h2>
                <p className="mx-auto max-w-3xl text-muted-foreground md:text-xl">
                  We offer a comprehensive range of engineering services to meet
                  the needs of any project, from concept to completion.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-start gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service, index) => (
                <div key={index} className="grid gap-2 text-center">
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
        </div>
      </section>

      {/* ================= PARTNERS SECTION ================= */}
      <section className="w-full bg-background py-12 md:py-20">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-7xl">
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
        </div>
      </section>

    </div>
  );
}
