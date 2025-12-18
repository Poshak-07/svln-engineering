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
      <section className="relative h-[60vh] min-h-[420px] w-full">
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

            <p className="mt-3 text-lg md:text-xl leading-relaxed">
              India-based IT hardware procurement partner
              <br className="hidden sm:block" />
              supplying genuine OEM products for government and institutional needs.
            </p>

            <Button asChild size="lg" className="mt-6">
              <Link href="/about">
                Know About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section
        id="services"
        className="w-full pt-10 pb-16 md:pt-14 md:pb-24"
      >
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                Our Services
              </div>
              <h2 className="font-headline text-3xl font-bold sm:text-5xl">
                What We Do
              </h2>
              <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
                We offer a comprehensive range of services aligned with
                government, infrastructure, and technology requirements.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service, index) => (
                <div key={index} className="grid gap-2 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
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
      <section className="w-full bg-background pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <h2 className="font-headline text-3xl font-bold sm:text-4xl">
                Our Trusted Partners
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                We work with established OEMs and industry-leading brands.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
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
                  className="flex items-center justify-center rounded-xl border bg-white p-5 shadow-sm"
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
