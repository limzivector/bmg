import { Star } from "lucide-react";

interface TestimonialCardProps {
  company: string;
  description: string;
  metric?: string;
}

export default function TestimonialCard({
  company,
  description,
  metric,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-orange-500 text-orange-500"
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-gray-900">{company}</p>
        {metric && <p className="text-sm text-gray-600 mt-1">{metric}</p>}
      </div>
    </div>
  );
}
