import React from 'react';
import { 
  Maximize, 
  Monitor, 
  Moon, 
  Settings2, 
  Zap, 
  Rocket, 
  Languages, 
  Code2 
} from 'lucide-react';
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Accessibility first",
    description: "Fully WCAG 2.0 compliant, made with best a11y practices",
    icon: <Maximize className="w-5 h-5" />,
  },
  {
    title: "Responsive design",
    description: "Looks and works great on any device and screen size",
    icon: <Monitor className="w-5 h-5" />,
  },
  {
    title: "Easy UI for everyone",
    description: "Seamless switching between color schemes, 6 themes included",
    icon: <Moon className="w-5 h-5" />,
  },
  {
    title: "Easy to customize",
    description: "Flexible options to match your product or brand",
    icon: <Settings2 className="w-5 h-5" />,
  },
  {
    title: "Top-level performance",
    description: "Made for lightning-fast load times and smooth interactions",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Production ready",
    description: "Thoroughly tested and launch-prepared components",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "Bot detection worldwide",
    description: "Easy to implement support for multiple browsers and OS systems",
    icon: <Languages className="w-5 h-5" />,
  },
  {
    title: "Developer friendly",
    description: "Built to work with your any tech stack system",
    icon: <Code2 className="w-5 h-5" />,
  },
];

export const FeaturesSub = () => {
  return (
    <section className={cn("py-24 bg-white")}>
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
        {/* Section Header */}
        <div className={cn("text-center mb-20")}>
          <h2 className={cn("text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight")}>
            Everything you need. <br />
            Nothing you don&apos;t.
          </h2>
        </div>

        {/* Features Grid */}
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16")}>
          {features.map((feature, index) => (
            <div key={index} className={cn("flex flex-col items-start text-left")}>
              <div className={cn("mb-4 p-1 text-slate-900")}>
                {feature.icon}
              </div>
              <h3 className={cn("text-lg font-semibold text-slate-900 mb-2")}>
                {feature.title}
              </h3>
              <p className={cn("text-sm text-slate-500 leading-relaxed")}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSub;