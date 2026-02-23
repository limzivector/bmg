import { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  title?: string;
}

export default function ProcessSteps({ steps, title }: ProcessStepsProps) {
  return (
    <div>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-200"></div>
              )}

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-50 to-orange-50 rounded-full mb-4 mx-auto border-2 border-orange-200">
                  <div className="text-center">
                    <Icon size={40} className="text-orange-500 mx-auto mb-2" />
                    <span className="text-sm font-bold text-gray-600">
                      Step {index + 1}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
