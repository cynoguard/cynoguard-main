import { cn } from "@/lib/utils";
import { Code2, Languages, Maximize, Monitor, Moon, Rocket, Settings2, Zap } from 'lucide-react';

const features = [
  { title: "Accessibility first", description: "Fully WCAG 2.0 compliant, made with best a11y practices", icon: Maximize },
  { title: "Responsive design", description: "Looks and works great on any device and screen size", icon: Monitor },
  { title: "Easy UI for everyone", description: "Seamless switching between colour schemes, 6 themes included", icon: Moon },
  { title: "Easy to customise", description: "Flexible options to match your product or brand", icon: Settings2 },
  { title: "Top-level performance", description: "Made for lightning-fast load times and smooth interactions", icon: Zap },
  { title: "Production ready", description: "Thoroughly tested and launch-prepared components", icon: Rocket },
  { title: "Bot detection worldwide", description: "Easy to implement support for multiple browsers and OS systems", icon: Languages },
  { title: "Developer friendly", description: "Built to work with any tech stack", icon: Code2 },
];

export const FeaturesSub = () => {
  return (
    <section className={cn("relative py-24 bg-[#020812] overflow-hidden")}>
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-900/40 to-transparent" />

      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className={cn("text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both")}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">Capabilities</p>
          <h2 className={cn("text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight")}>
            Everything you need.{" "}
            <span className="text-gradient-blue">Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12")}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-start text-left group",
                "animate-in fade-in slide-in-from-bottom-4 fill-mode-both",
                index < 4 ? `delay-${(index + 1) * 100}` : `delay-${(index - 3) * 100}`,
                "duration-700"
              )}
            >
              <div className={cn(
                "mb-4 p-2.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-400",
                "group-hover:bg-green-950/40 group-hover:border-green-800 group-hover:text-green-500",
                "transition-all duration-200"
              )}>
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className={cn("text-base font-semibold text-white mb-2 group-hover:text-green-400 transition-colors")}>
                {feature.title}
              </h3>
              <p className={cn("text-sm text-gray-500 leading-relaxed")}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-900/40 to-transparent" />
    </section>
  );
};

export default FeaturesSub;