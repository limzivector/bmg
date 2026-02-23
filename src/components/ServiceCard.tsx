import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="group bg-white border border-gray-200 rounded-xl p-6 card-hover cursor-pointer">
        <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg group-hover:shadow-lg transition-all duration-300">
          <Icon size={28} className="text-orange-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
          Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
