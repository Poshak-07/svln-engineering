import { Building, FileCheck, GanttChart, Calculator, Wrench, DraftingCompass, type LucideIcon } from 'lucide-react';
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  outcome: string;
  technologies: string[];
  imageId: string;
  imageIds: string[];
};

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

type TeamMember = {
  name: string;
  role: string;
  imageId: string;
};

export const services: Service[] = [
  {
    icon: DraftingCompass,
    title: 'Architectural & 3D Modeling',
    description: 'Creating stunning and functional architectural designs and realistic 3D models to visualize your project before it\'s built.',
  },
  {
    icon: Building,
    title: 'Structural Design & Detailing',
    description: 'Expert structural design services ensuring safety, stability, and efficiency for all types of buildings and structures.',
  },
  {
    icon: FileCheck,
    title: 'Peer Review/Proof Checking',
    description: 'Comprehensive review of structural designs to ensure compliance with codes, standards, and project requirements.',
  },
  {
    icon: GanttChart,
    title: 'Bar Bending Schedule (BBS)',
    description: 'Detailed and accurate Bar Bending Schedules for efficient reinforcement management and cost control.',
  },
  {
    icon: Calculator,
    title: 'Quantity Survey & Estimation',
    description: 'Precise quantity surveying and cost estimation services to help you plan and manage your project budget effectively.',
  },
  {
    icon: Wrench,
    title: 'Rehabilitation & Retrofitting',
    description: 'Strengthening and upgrading existing structures to meet new standards, extend their lifespan, and improve performance.',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'urban-residence-complex',
    title: 'Urban Residence Complex',
    description: 'A multi-story residential project focusing on modern living and sustainable design. Our team provided complete structural design and project management.',
    longDescription: 'The Urban Residence Complex is a landmark project in the heart of the city, comprising three residential towers with a total of 300 apartments. Our scope included initial conceptual design, detailed structural analysis using advanced software, and preparation of all construction documents. We worked closely with the architects to integrate green building principles, resulting in a 20% reduction in energy consumption.',
    outcome: 'Completed on time and within budget, the complex has set a new standard for urban living in the area, receiving an award for Excellence in Residential Design.',
    technologies: ['AutoCAD', 'STAAD.Pro', 'Revit', 'Sustainable Design'],
    imageId: 'proj1-thumb',
    imageIds: ['proj1-1', 'proj1-2', 'proj1-3']
  },
  {
    id: '2',
    slug: 'corporate-headquarters',
    title: 'Corporate Headquarters',
    description: 'Design and construction of a state-of-the-art corporate headquarters featuring a unique glass facade and open-plan office spaces.',
    longDescription: 'This project involved the structural design of a 15-story office building. The key challenge was the complex geometry of the glass curtain wall and the requirement for large, column-free interior spaces. We employed a composite steel and concrete structure to achieve the desired architectural vision while ensuring structural integrity and cost-effectiveness.',
    outcome: 'The building is now an iconic part of the city skyline and provides a dynamic and collaborative workspace for over 1000 employees.',
    technologies: ['ETABS', 'Tekla Structures', 'Facade Engineering', 'Composite Structures'],
    imageId: 'proj2-thumb',
    imageIds: ['proj2-1', 'proj2-2', 'proj2-3']
  },
  {
    id: '3',
    slug: 'logistics-park-warehouse',
    title: 'Logistics Park Warehouse',
    description: 'A large-scale industrial warehouse project for a major logistics company, optimized for heavy-duty storage and automated operations.',
    longDescription: 'We provided end-to-end structural engineering services for this 500,000 sq. ft. logistics warehouse. The design featured long-span steel trusses, high-performance concrete flooring for heavy forklift traffic, and foundations designed for complex soil conditions. Our detailed BBS and quantity estimates were crucial for the project\'s financial planning.',
    outcome: 'The facility was delivered ahead of schedule and has significantly improved the client\'s operational efficiency in the region.',
    technologies: ['Steel Design', 'Concrete Slabs', 'Geotechnical Engineering', 'BBS'],
    imageId: 'proj3-thumb',
    imageIds: ['proj3-1', 'proj3-2', 'proj3-3']
  },
  {
    id: '4',
    slug: 'river-crossing-bridge',
    title: 'River-Crossing Bridge',
    description: 'Structural rehabilitation and retrofitting of a historic bridge to increase its load capacity and extend its service life.',
    longDescription: 'Our team was tasked with the challenging project of retrofitting a 100-year-old steel truss bridge. This involved a detailed structural assessment, non-destructive testing, and the design of strengthening measures using modern materials like fiber-reinforced polymers (FRP). The project was executed with minimal disruption to traffic.',
    outcome: 'The bridge now meets current seismic and traffic load standards, preserving a historic landmark for future generations.',
    technologies: ['Bridge Engineering', 'Retrofitting', 'FRP Composites', 'NDT'],
    imageId: 'proj4-thumb',
    imageIds: ['proj4-1', 'proj4-2', 'proj4-3']
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: 'BluePrint Portfolio delivered an exceptional structural design for our headquarters. Their attention to detail and innovative solutions were second to none. Highly recommended!',
    name: 'John Doe',
    title: 'CEO, Innovate Corp',
  },
  {
    quote: 'The team\'s expertise in retrofitting saved our historical building. They were professional, efficient, and a pleasure to work with throughout the project.',
    name: 'Jane Smith',
    title: 'Project Manager, City Heritage Foundation',
  },
  {
    quote: 'Their precise quantity surveys and estimations were instrumental in keeping our project on budget. The accuracy of their work is commendable.',
    name: 'Samuel Green',
    title: 'Director, Greenfield Construction',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Michael Foster',
    role: 'Founder & Principal Engineer',
    imageId: 'team-member-1',
  },
  {
    name: 'Linda Williams',
    role: 'Lead Architect',
    imageId: 'team-member-2',
  },
  {
    name: 'David Chen',
    role: 'Senior Structural Engineer',
    imageId: 'team-member-3',
  }
];

export const businessDescriptionForAI = `BluePrint Portfolio is a premier engineering and design consultancy specializing in comprehensive solutions for the modern built environment. Our core services include Structural Design & Detailing, Peer Review/Proof Checking, Bar Bending Schedule (BBS) preparation, Quantity Survey & Estimation, Rehabilitation & Retrofitting of existing structures, and state-of-the-art Architectural & 3D Modeling. We are committed to delivering innovative, sustainable, and cost-effective solutions that ensure the safety, longevity, and performance of our clients' projects. Our mission is to transform complex challenges into elegant and efficient engineering realities, building a better future, one structure at a time.`;
