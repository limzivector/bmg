import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Warehouse,
  Zap,
  Layers,
  Trash2,
  BarChart3,
  MapPin,
  Calendar,
  ShieldAlert,
  AlertCircle,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Commercial Moving Services | Business Moving Group",
  description:
    "Orange County & LA commercial moving specialists. Office, warehouse, and industrial relocations. 500+ businesses moved, $0 damage claims.",
};

export default function HomePage() {
  const services = [
    {
      icon: Building2,
      title: "Office Moving",
      description: "Strategic office relocations with minimal downtime",
      href: "/services/office-movers",
    },
    {
      icon: Warehouse,
      title: "Warehouse Moving",
      description: "Large-scale warehouse relocations and inventory logistics",
      href: "/services/warehouse-moving",
    },
    {
      icon: Zap,
      title: "Industrial Movers",
      description: "Heavy equipment and machinery relocation specialists",
      href: "/services/industrial-movers",
    },
    {
      icon: Layers,
      title: "Cubicle Moving",
      description: "Specialized cubicle disassembly and reassembly",
      href: "/services/cubicle-movers",
    },
    {
      icon: Trash2,
      title: "Office Decommissioning",
      description: "Lease surrender and furniture liquidation",
      href: "/services/office-decommissioning",
    },
    {
      icon: BarChart3,
      title: "Project Management",
      description: "Comprehensive moving project oversight and coordination",
      href: "/services/project-management",
    },
  ];

  const problems = [
    {
      icon: AlertCircle,
      title: "Lost Productivity",
      stat: "3-5 days",
    },
    {
      icon: ShieldAlert,
      title: "Damaged Equipment",
      stat: "1 in 4",
    },
    {
      icon: Zap,
      title: "Complete Chaos",
      stat: "No Process",
    },
    {
      icon: Calendar,
      title: "Blown Deadlines",
      stat: "40% late",
    },
    {
      icon: MapPin,
      title: "Hidden Costs",
      stat: "30% over budget",
    },
    {
      icon: AlertCircle,
      title: "No Communication",
      stat: "Kept in dark",
    },
  ];

  const solutions = [
    {
      title: "After-Hours Moving",
      description: "We work nights and weekends so your business stays open",
    },
    {
      title: "Experienced Crews",
      description: "Specialized teams with 20+ years average experience",
    },
    {
      title: "Color-Coded System",
      description: "Proprietary labeling system for zero lost items",
    },
    {
      title: "Detailed Timeline",
      description: "Real-time updates and 48-hour average completion",
    },
    {
      title: "Flat-Rate Quote",
      description: "No surprises—transparent pricing upfront",
    },
    {
      title: "Single Point of Contact",
      description: "One dedicated project manager from start to finish",
    },
  ];

  const processSteps = [
    {
      icon: Building2,
      title: "Planning",
      description: "Comprehensive site assessment and inventory cataloging",
    },
    {
      icon: Layers,
      title: "Preparation",
      description: "Color-coded labeling, custom crating, and packing",
    },
    {
      icon: Warehouse,
      title: "Execution",
      description: "Expert crews working nights/weekends with precision",
    },
    {
      icon: BarChart3,
      title: "Completion",
      description: "Assembly, unpacking, and final debris removal",
    },
  ];

  const testimonials = [
    {
      company: "Easy Clothes",
      description:
        "Moved 20,000 sq ft in one weekend with zero days of lost productivity. Seamless execution.",
      metric: "20,000 sq ft, 1 weekend, 0 days lost",
    },
    {
      company: "Pelican Parts",
      description:
        "Two separate warehouses relocated in 3 days each. Perfect inventory tracking throughout.",
      metric: "2 locations, 3 days each, 100% inventory verified",
    },
    {
      company: "Garcia & Artigliere",
      description:
        "35 employees relocated with all workstations ready day one. Professional and organized.",
      metric: "35 employees, 2 days, ready to work",
    },
  ];

  const faqItems = [
    {
      question: "How long does a typical office move take?",
      answer:
        "Most office moves are completed in 2-3 days depending on size. Our average completion time is 48 hours. We coordinate to minimize downtime by working nights and weekends when needed.",
    },
    {
      question: "Do you offer after-hours moving?",
      answer:
        "Yes, this is our specialty. We frequently work nights and weekends to keep businesses operational during the move. Many companies prefer this approach to avoid any productivity loss.",
    },
    {
      question: "What is your damage protection policy?",
      answer:
        "We maintain $4M in insurance coverage. We've achieved $0 damage claims through our meticulous color-coded labeling system and experienced crews. If any damage occurs, we handle it immediately.",
    },
    {
      question: "Can you handle large warehouse moves?",
      answer:
        "Absolutely. We specialize in warehouse relocations of any size. We manage inventory logistics, pallet racking disassembly/installation, and can coordinate multiple crews for expedited timelines.",
    },
    {
      question: "Do you provide moving supplies?",
      answer:
        "Yes, we provide all necessary moving supplies including custom crates, color-coded labels, and packing materials. Everything is included in our flat-rate quote.",
    },
    {
      question: "How do you handle IT and server equipment?",
      answer:
        "Our crews are trained in sensitive electronics handling. We provide careful packing, secure transportation, and can coordinate with your IT team for seamless server relocation.",
    },
    {
      question: "Will there be any hidden costs?",
      answer:
        "No. We provide transparent, flat-rate quotes with no surprises. Everything is detailed upfront, including labor, supplies, and any specialized handling required.",
    },
    {
      question: "Can you work on a tight timeline?",
      answer:
        "Yes. We maintain flexibility to accommodate expedited moves. We can mobilize multiple crews and coordinate 24-hour operations if needed.",
    },
  ];

  return (
    <>
      <StructuredData
        type="organization"
        data={{
          name: "Business Moving Group",
          url: "https://businessmoving.com",
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-navy">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mb-32"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              LA & Orange County's #1 Commercial Movers
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-3 animate-fade-in-up">
              We Move Your Business, Not Just Your Stuff
            </p>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed animate-fade-in-up">
              Trusted by law firms, labs, warehouses, and medical offices. 500+ businesses moved with zero damage claims.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
              <Link href="/#contact" className="btn-primary text-center">
                Get Instant Quote
              </Link>
              <a
                href="tel:+1-949-866-4583"
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span>(949) 866-4583</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { stat: "500+", label: "Businesses Moved" },
                { stat: "$0", label: "Damage Claims" },
                { stat: "48hr", label: "Avg Completion" },
                { stat: "$4M", label: "Insurance" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <p className="text-2xl md:text-3xl font-bold text-orange-400">
                    {item.stat}
                  </p>
                  <p className="text-sm text-blue-100">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive moving solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="animate-fade-in-up">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          {/* Problems Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              What Really Happens During Most Business Moves
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Without proper planning and expertise, moves go wrong. Here's what to watch for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, i) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border-l-4 border-red-500 rounded-lg p-6 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Icon size={28} className="text-red-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {problem.title}
                        </h3>
                        <p className="text-2xl font-bold text-red-600">
                          {problem.stat}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center mb-20">
            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white">
              <ArrowRight size={32} />
            </div>
          </div>

          {/* Solutions Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              We Do Business Moves Completely Different
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our proven system eliminates guesswork and ensures smooth, professional moves:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, i) => (
                <div
                  key={i}
                  className="bg-white border-l-4 border-green-500 rounded-lg p-6 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-bold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <ProcessSteps steps={processSteps} title="Our Proven Process" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our clients have to say about their moves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
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
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about moving your business
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll contact you within 24 hours
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <CTASection
          title="Ready to Move Your Business?"
          subtitle="Let's get started with a free consultation. No obligations, just honest guidance."
        />
      </section>
    </>
  );
}
