import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Building2,
  Warehouse,
  Zap,
  Layers,
  Trash2,
  BarChart3,
  Users,
  Grid3x3,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

const serviceData: Record<
  string,
  {
    title: string;
    metaTitle: string;
    metaDesc: string;
    tagline: string;
    subtitle: string;
    heroIcon: any;
    benefits: string[];
    services: Array<{ icon: any; title: string; description: string }>;
    processSteps: Array<{ icon: any; title: string; description: string }>;
    testimonials: Array<{
      company: string;
      description: string;
      metric?: string;
    }>;
    faqItems: Array<{ question: string; answer: string }>;
  }
> = {
  "office-movers": {
    title: "Commercial & Office Movers",
    metaTitle: "Office Moving Services in Orange County & Los Angeles",
    metaDesc:
      "Professional office relocations with minimal downtime. Serving Orange County and LA for law firms, tech companies, and more.",
    tagline: "Commercial & Office Movers in Orange County & Los Angeles",
    subtitle:
      "Strategic office relocations that keep your business running smoothly",
    heroIcon: Building2,
    benefits: [
      "Minimal downtime",
      "IT equipment expertise",
      "After-hours options",
      "Furniture reassembly included",
    ],
    services: [
      {
        icon: Building2,
        title: "Office Moving",
        description: "Complete office relocations with precision planning",
      },
      {
        icon: Zap,
        title: "IT & Server Moving",
        description: "Specialized handling of sensitive tech equipment",
      },
      {
        icon: Layers,
        title: "Packing Services",
        description: "Professional packing and unpacking for office items",
      },
      {
        icon: Grid3x3,
        title: "Furniture Handling",
        description: "Expert furniture disassembly, moving, and reassembly",
      },
    ],
    processSteps: [
      {
        icon: Building2,
        title: "Free Assessment",
        description: "On-site evaluation of office space and inventory",
      },
      {
        icon: BarChart3,
        title: "Logistics Planning",
        description: "Detailed timeline and resource allocation",
      },
      {
        icon: Warehouse,
        title: "The Move",
        description: "Professional execution with experienced crews",
      },
      {
        icon: CheckCircle,
        title: "Setup & Settle",
        description: "Furniture assembly and space organization",
      },
    ],
    testimonials: [
      {
        company: "Kirkland & Ellis",
        description:
          "Law firm with 150+ employees moved without losing a single business day.",
        metric: "150 employees, 3 days, zero downtime",
      },
      {
        company: "Tech Startup",
        description:
          "Server relocation coordinated with IT team, no data loss or downtime.",
        metric: "8,000 sq ft, 2 days, full IT coordination",
      },
      {
        company: "Medical Office",
        description:
          "Sensitive equipment handled with care, patients never disrupted.",
        metric: "5,000 sq ft, 2 days, ongoing operations",
      },
    ],
    faqItems: [
      {
        question: "How do you minimize office downtime?",
        answer:
          "We coordinate nights and weekends for key equipment moves, set up workstations ahead of time, and have dedicated IT coordinators work with your team.",
      },
      {
        question: "Do you handle server and IT equipment?",
        answer:
          "Yes, we're experienced with sensitive electronics. We pack, transport, and set up servers with IT best practices. We can coordinate with your IT department.",
      },
      {
        question: "Can you move on a weekend?",
        answer:
          "Absolutely. Weekend moves are common for office relocations to avoid business disruption.",
      },
      {
        question: "What about furniture assembly?",
        answer:
          "Included. We disassemble at the old location and reassemble at the new one, including cubicles, desks, and custom setups.",
      },
      {
        question: "How long does a typical office move take?",
        answer:
          "Most office moves are 2-3 days depending on size. Our average is 48 hours for coordination and execution.",
      },
    ],
  },
  "warehouse-moving": {
    title: "Warehouse Moving Services",
    metaTitle: "Warehouse Moving Services in Orange County & Los Angeles",
    metaDesc:
      "Industrial warehouse relocations with inventory management. Expert handling of pallet racking and heavy equipment.",
    tagline: "Warehouse Moving Services in Orange County & Los Angeles",
    subtitle: "Industrial relocation experts for warehouses of any size",
    heroIcon: Warehouse,
    benefits: [
      "Inventory tracking",
      "Pallet racking expertise",
      "Large-scale coordination",
      "Quick turnaround",
    ],
    services: [
      {
        icon: Warehouse,
        title: "Warehouse Moving",
        description: "Complete warehouse relocations with full inventory control",
      },
      {
        icon: TrendingUp,
        title: "Pallet Racking",
        description: "Disassembly, transport, and reinstallation of racking systems",
      },
      {
        icon: Grid3x3,
        title: "Office Furniture",
        description: "Integrated office and warehouse relocation",
      },
      {
        icon: BarChart3,
        title: "Inventory Logistics",
        description: "Complete inventory management and tracking",
      },
    ],
    processSteps: [
      {
        icon: Building2,
        title: "Site & Safety Audit",
        description: "Comprehensive evaluation and safety planning",
      },
      {
        icon: Layers,
        title: "Prep & Dismantle",
        description: "Systematic disassembly of racking and equipment",
      },
      {
        icon: Warehouse,
        title: "Heavy Transport",
        description: "Expert handling of industrial equipment and inventory",
      },
      {
        icon: CheckCircle,
        title: "Install & Anchor",
        description: "Professional installation and safety verification",
      },
    ],
    testimonials: [
      {
        company: "Pelican Parts",
        description:
          "Two 40,000 sq ft warehouses moved in parallel with zero inventory loss.",
        metric: "80,000 total sq ft, 6 days, 100% inventory verified",
      },
      {
        company: "Manufacturing Facility",
        description:
          "Heavy equipment and pallet racking relocated with precision scheduling.",
        metric: "50,000 sq ft, 5 days, full equipment coordination",
      },
      {
        company: "Distribution Center",
        description:
          "Minimal inventory disruption achieved through expert planning.",
        metric: "60,000 sq ft, 4 days, continuous operations",
      },
    ],
    faqItems: [
      {
        question: "How do you handle pallet racking?",
        answer:
          "We disassemble with safety protocols, label every section, transport carefully, and reinstall to exact specifications. All anchoring and safety checks included.",
      },
      {
        question: "Can you move while operations continue?",
        answer:
          "Yes. We coordinate phased moves to keep sections operational while others relocate. This requires careful planning but is our specialty.",
      },
      {
        question: "How do you track inventory?",
        answer:
          "Every item is color-coded and logged. We provide real-time inventory reports throughout the move.",
      },
      {
        question: "What's your timeline for large warehouses?",
        answer:
          "Typically 3-5 days depending on size and complexity. We can expedite with multiple crews.",
      },
      {
        question: "Do you handle hazardous materials?",
        answer:
          "We coordinate with certified hazmat specialists. We can manage specialized storage requirements.",
      },
    ],
  },
  "industrial-movers": {
    title: "Industrial Movers",
    metaTitle: "Industrial Movers In Orange County & Los Angeles",
    metaDesc:
      "Heavy equipment and machinery moving specialists. Expert handling of industrial equipment relocation.",
    tagline: "Heavy Equipment & Warehouse Relocation",
    subtitle:
      "Specialized in moving industrial machinery and complex equipment",
    heroIcon: Zap,
    benefits: [
      "Heavy equipment expertise",
      "Safety certifications",
      "Equipment commissioning",
      "Production minimization",
    ],
    services: [
      {
        icon: Zap,
        title: "Machinery Moving",
        description: "Professional relocation of heavy industrial equipment",
      },
      {
        icon: Warehouse,
        title: "Warehouse Relocation",
        description: "Full-scale industrial facility moves",
      },
      {
        icon: TrendingUp,
        title: "Pallet Racking",
        description: "Industrial racking systems disassembly and reinstall",
      },
      {
        icon: Grid3x3,
        title: "Industrial Storage",
        description: "Specialized storage solution setup and optimization",
      },
    ],
    processSteps: [
      {
        icon: Building2,
        title: "Safety Analysis",
        description: "Engineering assessment of equipment and space",
      },
      {
        icon: Layers,
        title: "Tag & Crate",
        description: "Professional crating and protective wrapping",
      },
      {
        icon: Warehouse,
        title: "Heavy Transport",
        description: "Specialized trucks and equipment for safe movement",
      },
      {
        icon: CheckCircle,
        title: "Re-Commission",
        description: "Professional setup and operational verification",
      },
    ],
    testimonials: [
      {
        company: "Manufacturing Plant",
        description:
          "CNC machines relocated and recommissioned with precision. Zero downtime.",
        metric: "$2M+ equipment, 4 days, full re-commissioning",
      },
      {
        company: "Tech Lab",
        description:
          "Sensitive testing equipment moved without any calibration loss.",
        metric: "Specialized equipment, 3 days, verified accuracy",
      },
      {
        company: "Food Processing",
        description: "Complex machinery moved with sanitation protocols maintained.",
        metric: "Heavy equipment, 5 days, compliance verified",
      },
    ],
    faqItems: [
      {
        question: "How do you handle equipment re-commissioning?",
        answer:
          "We can coordinate with your technicians. Many equipment moves require professional setup and testing, which we manage.",
      },
      {
        question: "What weight limits do you have?",
        answer:
          "We specialize in heavy equipment. Our trucks can handle weights up to 80,000 lbs. For heavier loads, we arrange specialized transport.",
      },
      {
        question: "How do you protect sensitive machinery?",
        answer:
          "Custom crating, climate-controlled transport, and careful handling. We work with your engineers on specific requirements.",
      },
      {
        question: "Can you handle international moves?",
        answer:
          "For equipment moving, we can coordinate relocation within the US. International moves require specialized logistics.",
      },
      {
        question: "What about production stoppage costs?",
        answer:
          "We minimize this through careful planning. Many clients use our after-hours services to eliminate production impact.",
      },
    ],
  },
  "cubicle-movers": {
    title: "Professional Cubicle Movers",
    metaTitle: "Professional Cubicle Movers In OC & LA",
    metaDesc:
      "Specialized cubicle disassembly, reconfiguration, and reassembly. Workspace optimization experts.",
    tagline: "Professional Cubicle Movers In OC & LA",
    subtitle: "Specialized disassembly, reconfiguration, and reassembly",
    heroIcon: Layers,
    benefits: [
      "Zero component loss",
      "Layout optimization",
      "Quick reassembly",
      "Workspace optimization",
    ],
    services: [
      {
        icon: Layers,
        title: "Cubicle Moving",
        description: "Professional cubicle disassembly and reassembly",
      },
      {
        icon: Grid3x3,
        title: "Reconfiguration",
        description: "Reorganizing cubicle layouts for optimal workspace",
      },
      {
        icon: Building2,
        title: "New Installation",
        description: "New cubicle systems installed and optimized",
      },
      {
        icon: Trash2,
        title: "Liquidation & Disposal",
        description: "Responsible disposal or liquidation of old systems",
      },
    ],
    processSteps: [
      {
        icon: Building2,
        title: "Audit & Blueprint",
        description: "Current layout assessment and new design planning",
      },
      {
        icon: Layers,
        title: "Dismantle",
        description: "Systematic disassembly with component tracking",
      },
      {
        icon: Warehouse,
        title: "Transport",
        description: "Careful transportation of components",
      },
      {
        icon: CheckCircle,
        title: "Rebuild & Level",
        description: "Expert reassembly and workspace optimization",
      },
    ],
    testimonials: [
      {
        company: "Garcia & Artigliere",
        description:
          "35 cubicles reconfigured for new layout. All employees productive day one.",
        metric: "35 stations, 2 days, zero component loss",
      },
      {
        company: "Tech Company",
        description:
          "Open office conversion. 80 cubicles converted to collaborative spaces.",
        metric: "80 cubicles, 3 days, full reconfiguration",
      },
      {
        company: "Corporate Office",
        description:
          "Cubicle upgrade with new systems. Seamless transition.",
        metric: "45 stations, 2 days, new systems installed",
      },
    ],
    faqItems: [
      {
        question: "Do you specialize in specific cubicle brands?",
        answer:
          "We work with all major brands including Steelcase, Herman Miller, Knoll, and generic systems. Our experience spans different designs.",
      },
      {
        question: "What if cubicles are damaged during the move?",
        answer:
          "We're meticulous about component care. Our track record is excellent. If any damage occurs, we handle replacement.",
      },
      {
        question: "Can you reconfigure for a new layout?",
        answer:
          "Yes. We can redesign your space for better collaboration, privacy, or efficiency. We provide layout design consultation.",
      },
      {
        question: "How long does a cubicle move take?",
        answer:
          "Typically 1-3 days depending on quantity. Our team works efficiently while maintaining quality.",
      },
      {
        question: "What about old cubicles?",
        answer:
          "We can liquidate, donate, or dispose responsibly. Many clients sell used systems to offset moving costs.",
      },
    ],
  },
  "office-decommissioning": {
    title: "Office Decommissioning Services",
    metaTitle: "Office Decommissioning Services in OC & LA",
    metaDesc:
      "Lease surrender, furniture liquidation, and eco-friendly disposal. Expert office closeout solutions.",
    tagline: "Lease Surrender & Liquidation",
    subtitle: "Complete office closeout and space restoration",
    heroIcon: Trash2,
    benefits: [
      "Lease compliance",
      "Furniture recovery",
      "Eco-friendly disposal",
      "Cost recovery",
    ],
    services: [
      {
        icon: Trash2,
        title: "Furniture Liquidation",
        description: "Sale or responsible disposal of office furnishings",
      },
      {
        icon: BarChart3,
        title: "Eco-Friendly Disposal",
        description: "Sustainable waste management and recycling",
      },
      {
        icon: Zap,
        title: "Low Voltage Removal",
        description: "Professional removal of IT and communication infrastructure",
      },
      {
        icon: Building2,
        title: "Space Restoration",
        description: "Preparation for landlord handover and new tenants",
      },
    ],
    processSteps: [
      {
        icon: Building2,
        title: "Site Audit",
        description: "Complete inventory of all equipment and furnishings",
      },
      {
        icon: BarChart3,
        title: "Disposition Plan",
        description: "Strategy for sale, donation, or disposal",
      },
      {
        icon: Warehouse,
        title: "Clear & Restore",
        description: "Professional removal and space restoration",
      },
      {
        icon: CheckCircle,
        title: "Handover",
        description: "Final inspection and lease surrender documentation",
      },
    ],
    testimonials: [
      {
        company: "Corporate Office",
        description:
          "Decommissioned office in 5 days. Recovered $30K in furniture sales.",
        metric: "15,000 sq ft, 5 days, $30K recovery",
      },
      {
        company: "Tech Startup",
        description:
          "Clean exit from lease. All equipment responsibly recycled.",
        metric: "8,000 sq ft, 3 days, zero landfill",
      },
      {
        company: "Legal Firm",
        description:
          "Furniture liquidated, space restored. Lease released on time.",
        metric: "12,000 sq ft, 4 days, compliant handover",
      },
    ],
    faqItems: [
      {
        question: "Can you help recover cost from furniture sales?",
        answer:
          "Yes. We handle liquidation and help maximize recovery. Many clients offset moving costs significantly.",
      },
      {
        question: "How do you handle IT equipment?",
        answer:
          "We coordinate removal of servers, networking equipment, and phone systems. We ensure secure data destruction when needed.",
      },
      {
        question: "What about lease compliance?",
        answer:
          "We ensure spaces meet lease requirements for handover. We document everything for landlord sign-off.",
      },
      {
        question: "How long does decommissioning take?",
        answer:
          "Typically 3-5 days depending on size. We work efficiently to minimize lease holdover costs.",
      },
      {
        question: "Is everything recycled?",
        answer:
          "We prioritize recycling and donation. Items that can't be recovered are disposed responsibly per environmental regulations.",
      },
    ],
  },
  "project-management": {
    title: "Commercial Moving Project Management",
    metaTitle: "Commercial Moving Project Management",
    metaDesc:
      "Comprehensive moving project oversight, coordination, and vendor management for large relocations.",
    tagline: "Comprehensive Oversight",
    subtitle: "Expert project management for complex moves",
    heroIcon: BarChart3,
    benefits: [
      "Master scheduling",
      "Vendor coordination",
      "Risk mitigation",
      "Compliance management",
    ],
    services: [
      {
        icon: BarChart3,
        title: "Master Scheduling",
        description: "Coordinated timeline for complex multi-phase moves",
      },
      {
        icon: Users,
        title: "Vendor Management",
        description: "Coordination of multiple service providers",
      },
      {
        icon: TrendingUp,
        title: "Risk Mitigation",
        description: "Contingency planning and issue resolution",
      },
      {
        icon: CheckCircle,
        title: "Compliance",
        description: "Regulatory compliance and documentation",
      },
    ],
    processSteps: [
      {
        icon: Building2,
        title: "Discovery",
        description: "Comprehensive understanding of scope and requirements",
      },
      {
        icon: BarChart3,
        title: "Planning",
        description: "Detailed project plan with timeline and resources",
      },
      {
        icon: Warehouse,
        title: "Execution",
        description: "Active management throughout the move",
      },
      {
        icon: CheckCircle,
        title: "Close-Out",
        description: "Final verification and project completion",
      },
    ],
    testimonials: [
      {
        company: "National Instruments",
        description:
          "Managed 20,000 sq ft complex relocation across multiple departments.",
        metric: "20,000 sq ft, 5 days, zero disputes",
      },
      {
        company: "Multi-Location Corp",
        description:
          "Coordinated simultaneous moves across 3 locations with precision.",
        metric: "3 locations, 7 days, coordinated execution",
      },
      {
        company: "Enterprise Client",
        description:
          "Complex move with IT, equipment, and staff coordination. Flawless execution.",
        metric: "30,000 sq ft, 4 days, all targets met",
      },
    ],
    faqItems: [
      {
        question: "How do you manage complex projects?",
        answer:
          "We use project management software, daily stand-ups, and real-time communication. A dedicated PM is assigned to your project.",
      },
      {
        question: "Can you handle multiple locations?",
        answer:
          "Yes. We coordinate simultaneous moves across multiple locations with synchronized timing.",
      },
      {
        question: "What's your process for risk management?",
        answer:
          "We identify risks upfront, create contingency plans, and have backup resources for unexpected issues.",
      },
      {
        question: "How often do you provide updates?",
        answer:
          "Daily updates are standard. We provide real-time access to project status and immediate escalation of issues.",
      },
      {
        question: "Do you handle budget management?",
        answer:
          "Yes. We provide detailed budgets, track spend, and work within allocated resources.",
      },
    ],
  },
  "out-of-town-dealer-support": {
    title: "Out of Town Office Furniture Dealer Support",
    metaTitle: "Out of Town Office Furniture Dealer Support",
    metaDesc:
      "Local receiving, delivery, and installation support for office furniture dealers operating in Orange County and LA.",
    tagline: "Local Partner for Receiving & Installation",
    subtitle: "Seamless dealer support for out-of-town partners",
    heroIcon: Warehouse,
    benefits: [
      "Receiving services",
      "Last-mile delivery",
      "Professional installation",
      "Warranty support",
    ],
    services: [
      {
        icon: Warehouse,
        title: "Receiving & Inspection",
        description: "Complete receiving and quality inspection services",
      },
      {
        icon: Warehouse,
        title: "Last-Mile Delivery",
        description: "Professional delivery to end customer locations",
      },
      {
        icon: Building2,
        title: "Installation",
        description: "Professional assembly and setup by trained teams",
      },
      {
        icon: CheckCircle,
        title: "Warranty Repairs",
        description: "Post-delivery support and repair coordination",
      },
    ],
    processSteps: [
      {
        icon: Users,
        title: "Coordination",
        description: "Schedule alignment with dealer and customer",
      },
      {
        icon: Warehouse,
        title: "Receiving",
        description: "Inspect all shipments for damage and completeness",
      },
      {
        icon: Building2,
        title: "Install",
        description: "Professional assembly and customer setup",
      },
      {
        icon: CheckCircle,
        title: "Reporting",
        description: "Documentation and warranty coordination",
      },
    ],
    testimonials: [
      {
        company: "National Furniture Dealer",
        description:
          "Reliable local partner for Orange County deliveries. Professional, on-time.",
        metric: "50+ deliveries/month, 99% on-time",
      },
      {
        company: "Regional Supplier",
        description:
          "Installation team handles everything. Customers always satisfied.",
        metric: "100+ installations, zero complaints",
      },
      {
        company: "Furniture Distributor",
        description:
          "Logistics partner we can trust for complex projects.",
        metric: "Complex projects, consistent quality",
      },
    ],
    faqItems: [
      {
        question: "What regions do you serve?",
        answer:
          "We serve Orange County, Los Angeles, and surrounding areas. If you need delivery outside these areas, contact us for special arrangements.",
      },
      {
        question: "Can you handle large volume deliveries?",
        answer:
          "Yes. We can coordinate multiple deliveries daily and can scale capacity for major projects.",
      },
      {
        question: "Do you provide installation training?",
        answer:
          "Yes. We can train dealer staff on installation best practices.",
      },
      {
        question: "How quickly can you turn around deliveries?",
        answer:
          "Typically same-week delivery for standard orders. Rush deliveries available.",
      },
      {
        question: "What about damaged items?",
        answer:
          "We document all damage at receiving and coordinate replacement with dealers.",
      },
    ],
  },
  "office-reconfiguration": {
    title: "Office Furniture Reconfiguration",
    metaTitle: "Office Furniture Reconfiguration In OC & LA",
    metaDesc:
      "Workspace optimization and reconfiguration services. Redesign your office layout for maximum productivity.",
    tagline: "Optimize Workspace Layout",
    subtitle: "Expert reconfiguration for improved workspace efficiency",
    heroIcon: Grid3x3,
    benefits: [
      "Layout optimization",
      "Productivity improvement",
      "Cost savings",
      "Employee satisfaction",
    ],
    services: [
      {
        icon: Grid3x3,
        title: "Workspace Restacking",
        description: "Reorganize existing furniture for better layouts",
      },
      {
        icon: Layers,
        title: "Cubicle Rebuild",
        description: "Reconfigure cubicle systems for new designs",
      },
      {
        icon: Building2,
        title: "Space Planning",
        description: "Professional design for optimal workspace usage",
      },
      {
        icon: BarChart3,
        title: "Asset Management",
        description: "Track and optimize furniture assets",
      },
    ],
    processSteps: [
      {
        icon: Building2,
        title: "Audit",
        description: "Current space and furniture assessment",
      },
      {
        icon: BarChart3,
        title: "Design",
        description: "Layout redesign for improved functionality",
      },
      {
        icon: Warehouse,
        title: "Execute",
        description: "Professional reconfiguration and setup",
      },
      {
        icon: CheckCircle,
        title: "Review",
        description: "Final walkthrough and adjustment",
      },
    ],
    testimonials: [
      {
        company: "Tech Company",
        description:
          "Reconfigured office to encourage collaboration. Employee satisfaction up 40%.",
        metric: "40% satisfaction increase, improved productivity",
      },
      {
        company: "Design Studio",
        description:
          "New layout improved workflow efficiency significantly.",
        metric: "25% efficiency gain, team approved",
      },
      {
        company: "Corporate Office",
        description: "Space optimization reduced footprint by 15%.",
        metric: "15% space reduction, cost savings",
      },
    ],
    faqItems: [
      {
        question: "Can you improve our current space without buying new furniture?",
        answer:
          "Often yes. Smart reconfiguration can maximize existing furniture and space. We provide recommendations.",
      },
      {
        question: "How long does reconfiguration take?",
        answer:
          "Depends on scope. Most reconfigurations take 1-3 days. We can work nights/weekends.",
      },
      {
        question: "Do you provide design consultation?",
        answer:
          "Yes. Our team can recommend layouts for better collaboration, focus, or efficiency.",
      },
      {
        question: "What if employees don't like the new layout?",
        answer:
          "We build in feedback periods and can make adjustments. Minor changes are included.",
      },
      {
        question: "Can this save us money?",
        answer:
          "Absolutely. Smart reconfiguration often reduces total square footage needs and improves productivity.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const data = serviceData[params.slug];
  if (!data) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const data = serviceData[params.slug];

  if (!data) {
    notFound();
  }

  const HeroIcon = data.heroIcon;

  return (
    <>
      <StructuredData
        type="service"
        data={{
          name: data.title,
          description: data.subtitle,
          areaServed: "Orange County, Los Angeles",
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-navy">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mb-32"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-6 border border-orange-500/30">
              <HeroIcon size={40} className="text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-blue-100 mb-2">{data.tagline}</p>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {data.benefits.map((benefit, i) => (
                <span
                  key={i}
                  className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.services.map((service, i) => (
              <ServiceCard
                key={i}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href="#"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ProcessSteps steps={data.processSteps} title="Our Process" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                company={testimonial.company}
                description={testimonial.description}
                metric={testimonial.metric}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={data.faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <CTASection />
      </section>
    </>
  );
}
