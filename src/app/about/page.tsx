import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | SVLN Engineering',
  description:
    'SVLN Engineering is an India-based firm supplying IT hardware and technology solutions to Government, Defence, PSUs, and institutional clients.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6 lg:py-24">
      <div className="space-y-20">

        {/* PAGE HEADER */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Us
          </h1>

          {/* LOGO AFTER HEADING */}
          <div className="flex flex-col items-center leading-[0.9] select-none">
            <span className="text-3xl font-extrabold italic text-red-600 tracking-wide">
              SVLN
            </span>
            <span className="text-lg font-extrabold italic text-blue-700 tracking-wide -mt-1">
              ENGINEERING
            </span>
          </div>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            A trusted partner in IT hardware procurement and technology solutions
            for Government and institutional clients across India.
          </p>
        </div>

        {/* COMPANY OVERVIEW */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              Company Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              SVLN ENGINEERING is an India-based firm engaged in the supply of IT
              hardware and technology solutions to Government, Defence, Public
              Sector Undertakings (PSUs), and institutional clients. The firm
              operates in compliance-driven environments and supports Central and
              State Government departments, educational institutions, and
              enterprise organizations across India.
            </p>
          </div>

          <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/about/overview.jpg"
              alt="SVLN Engineering company overview"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* OPERATIONS & COMPLIANCE */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-sm md:order-1">
            <Image
              src="/about/compliance.jpg"
              alt="Compliance and procurement operations"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 md:order-2">
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              Operations & Compliance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              SVLN ENGINEERING undertakes procurement and supply of genuine OEM
              products through authorized distribution channels, ensuring strict
              adherence to applicable technical specifications, warranty terms,
              and service requirements. All engagements are executed in alignment
              with established procurement norms and compliance standards.
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              Our Professional Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The company follows a professional, transparent, and
              process-oriented approach, with a strong emphasis on quality,
              accountability, and timely execution. SVLN ENGINEERING is committed
              to building long-term and sustainable business relationships by
              consistently delivering reliable solutions and dependable service
              outcomes.
            </p>
          </div>

          <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/about/approach.jpg"
              alt="Professional approach and execution"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* KEY STRENGTHS */}
        <section className="rounded-xl border bg-muted/40 p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-primary mb-6 text-center">
            Key Strengths
          </h2>

          <ul className="mx-auto max-w-3xl list-disc list-inside space-y-3 text-muted-foreground">
            <li>Experience in Government and PSU procurement environments</li>
            <li>Supply of genuine OEM products through authorized channels</li>
            <li>Strong focus on compliance, documentation, and process adherence</li>
            <li>Commitment to quality assurance and timely delivery</li>
            <li>Long-term relationship-driven engagement model</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
