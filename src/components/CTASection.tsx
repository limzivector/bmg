import Link from "next/link";
import { Phone } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  secondaryText?: string;
}

export default function CTASection({
  title = "Ready to Move Your Business?",
  subtitle = "Get a free, instant quote today. No obligations.",
  primaryText = "Get Free Quote",
  secondaryText = "Call Us Now",
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-20 bg-gradient-navy rounded-2xl overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mb-32"></div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="btn-primary text-center">
              {primaryText}
            </Link>
            <a
              href="tel:+1-949-866-4583"
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Phone size={20} />
              {secondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
