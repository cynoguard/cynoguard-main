import { cn } from "@/lib/utils";
import { Bell, FileSearch, Radar } from "lucide-react";

const steps = [
  { title: "Connect your brand portfolio", description: "Add domains, trademarks, and brand keywords to define your risk perimeter.", icon: <Radar className="h-5 w-5 text-green-500" /> },
  { title: "We monitor registrations and changes", description: "CynoGuard watches global registries, DNS, SSL, and hosting indicators 24/7.", icon: <FileSearch className="h-5 w-5 text-green-500" /> },
  { title: "Get alerts with playbooks", description: "Receive prioritized alerts and step-by-step guidance for takedown and mitigation.", icon: <Bell className="h-5 w-5 text-green-500" /> },
];

const HowItWorks = () => {
  return (
    <section className={cn("py-20 bg-[#020812] border-t border-gray-900")}>
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className={cn("text-center mb-14")}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">How it works</p>
          <h2 className={cn("text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight")}>How domain monitoring works</h2>
          <p className={cn("mt-4 text-lg text-gray-400")}>A streamlined workflow that keeps your team ahead of brand abuse.</p>
        </div>
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6")}>
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 hover:border-green-800 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-green-900/40 bg-green-950/40 text-sm font-semibold text-green-400 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step.icon}
              </div>
              <h3 className={cn("text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors")}>{step.title}</h3>
              <p className={cn("text-sm text-gray-500 leading-relaxed")}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;