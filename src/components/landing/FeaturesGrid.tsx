"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Terminal, Zap, Shield, Globe, AlertTriangle, Activity, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeaturesGrid() {
  return (
    <section className={cn("relative py-24 max-w-6xl mx-auto px-4 overflow-hidden")}>

      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      <div className={cn("relative z-10")}>
        <div className={cn(
          "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both text-center mb-16"
        )}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// Platform</p>
          <h2 className={cn("text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight")}>
            The way we secure your{" "}
            <span className="text-gradient-blue">Business</span>
          </h2>
        </div>

        <BentoGrid className={cn("mx-auto")}>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={cn(
                "group/bento transition-all duration-300 shadow-sm p-4 bg-gray-900/80 border border-gray-800 justify-between flex flex-col space-y-4",
                "hover:border-green-700/60 hover:shadow-lg hover:-translate-y-0.5 hover:glow-green-sm",
                "animate-in fade-in slide-in-from-bottom-4 fill-mode-both",
                i === 0 || i === 3 ? "md:col-span-2" : "",
                i === 0 ? "duration-500 delay-100" :
                i === 1 ? "duration-500 delay-200" :
                i === 2 ? "duration-500 delay-300" :
                           "duration-500 delay-400"
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const Skeleton = ({ className, children }: { className?: string; children?: React.ReactNode }) => (
  <div className={cn("flex flex-1 w-full h-full rounded-xl bg-gray-900 border border-gray-800 overflow-hidden relative", className)}>
    {children}
  </div>
);

const items = [
  {
    title: "AI-Powered Domain Monitoring",
    description: "Detect typo-squatting and scam domains targeting your brand in real-time.",
    header: (
      <Skeleton className="p-6 flex-col justify-center items-center bg-gradient-to-br from-green-950/40 to-gray-900">
        <div className="flex flex-wrap gap-2 justify-center">
          {['Domain Watch', 'Typo Detection', 'Brand Protection', 'Real-time Alerts', 'AI Analysis', 'Threat Intel'].map((tag, i) => (
            <span
              key={tag}
              className="text-[10px] px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300 shadow-sm font-medium hover:border-green-600 hover:text-green-400 transition-colors cursor-default font-mono"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <Activity className="w-3 h-3 text-green-500" />
          <span>24/7 Monitoring Active</span>
        </div>
      </Skeleton>
    ),
    icon: <Shield className="h-4 w-4 text-green-500" />,
  },
  {
    title: "Advanced Bot Detection",
    description: "Identify and block malicious bots without impacting legitimate users.",
    header: (
      <Skeleton className="flex flex-col items-center justify-center gap-4 bg-gray-900 p-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent animate-scan" />
        </div>
        <div className="border border-gray-700 bg-gray-800 rounded-xl p-4 flex flex-col gap-3 shadow-sm w-full relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Lock size={14} className="text-white" />
              </div>
              <div className="flex flex-col">
                <div className="h-2 w-20 bg-gray-300 rounded" />
                <div className="h-1.5 w-16 bg-gray-600 rounded mt-1.5" />
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-green-500 font-medium font-mono">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Verified
            </div>
          </div>
          <div className="h-px bg-gray-700" />
          <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
            <span>Bot Score: 98%</span>
            <span className="text-red-400 font-medium">Threats Blocked: 1,234</span>
          </div>
        </div>
      </Skeleton>
    ),
    icon: <Zap className="h-4 w-4 text-green-500" />,
  },
  {
    title: "Developer-Friendly APIs",
    description: "Integrate security protection into your stack with simple, powerful APIs.",
    header: (
      <Skeleton className="bg-[#060d14] p-5 font-mono relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer pointer-events-none" />
        <div className="space-y-1.5 relative z-10">
          <p className="text-green-400 text-[11px]">import {"{ monitorDomain }"} from <span className="text-emerald-400">&apos;@cynoguard/sdk&apos;</span>;</p>
          <p className="text-gray-500 text-[11px]">const config = {"{"}</p>
          <p className="text-green-400 text-[11px] pl-4">domain: <span className="text-amber-300">&apos;yourbrand.com&apos;</span>,</p>
          <p className="text-green-400 text-[11px] pl-4">botDetection: <span className="text-green-300">true</span>,</p>
          <p className="text-green-400 text-[11px] pl-4">aiMode: <span className="text-amber-300">&apos;aggressive&apos;</span></p>
          <p className="text-gray-500 text-[11px]">{"}"}</p>
          <p className="text-green-400 text-[11px] mt-2">monitorDomain(config);</p>
          <div className="flex items-center gap-1 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-green-500 text-[10px]">// Monitoring started</p>
          </div>
        </div>
      </Skeleton>
    ),
    icon: <Terminal className="h-4 w-4 text-green-500" />,
  },
  {
    title: "Social Signal Monitoring",
    description: "Track phishing discussions on X and other platforms automatically.",
    header: (
      <Skeleton className="flex items-center justify-center bg-gray-900 p-6">
        <div className="relative flex items-center justify-center h-32 w-32">
          <div className="absolute inset-0 rounded-full border border-green-700/40 border-dashed animate-orbit-slow" />
          <div className="absolute inset-3 rounded-full border border-gray-700" />

          <div className="h-12 w-12 bg-gray-800 rounded-xl shadow-md border border-gray-700 flex items-center justify-center z-10 animate-float">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
          </div>

          <div className="absolute -top-3 p-1.5 bg-gray-800 rounded-lg shadow-sm border border-gray-700 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center text-[8px] text-white font-bold">X</div>
          </div>
          <div className="absolute -bottom-3 p-1.5 bg-gray-800 rounded-lg shadow-sm border border-gray-700 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">R</div>
          </div>
          <div className="absolute -right-3 p-1.5 bg-gray-800 rounded-lg shadow-sm border border-gray-700 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">f</div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[10px] text-gray-500 font-medium font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Real-time Signal Detection
        </div>
      </Skeleton>
    ),
    icon: <Globe className="h-4 w-4 text-green-500" />,
  },
];