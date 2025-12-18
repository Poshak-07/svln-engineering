import {
  ShieldCheck,
  Landmark,
  Building2,
  HardHat,
  Laptop,
  Server,
  type LucideIcon,
} from 'lucide-react';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: ShieldCheck,
    title: 'Defence & Government Contracting',
    description:
      'Execution of Central Government projects, defence-related works, and institutional contracts in compliance with applicable norms and specifications.',
  },
  {
    icon: Landmark,
    title: 'Institutional & Public Sector Projects',
    description:
      'Handling government and institutional contracts with a strong focus on documentation, compliance, and timely execution.',
  },
  {
    icon: HardHat,
    title: 'Construction & Infrastructure Works',
    description:
      'Civil and infrastructure works including government and institutional construction projects executed with quality and accountability.',
  },
  {
    icon: Building2,
    title: 'Residential & Apartment Construction',
    description:
      'Construction of apartments and residential developments with adherence to approved designs, standards, and safety practices.',
  },
  {
    icon: Laptop,
    title: 'IT Hardware Procurement',
    description:
      'Supply of IT hardware including laptops, desktops, workstations, and OEM-branded products for government and institutional requirements.',
  },
  {
    icon: Server,
    title: 'Servers, Networking & OEM Solutions',
    description:
      'Procurement of servers, networking equipment, and warranty-compliant OEM products through authorized distribution channels.',
  },
];
