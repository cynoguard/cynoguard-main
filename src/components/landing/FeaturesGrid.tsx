"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  Terminal, 
  Cpu, 
  Zap, 
  Shield,
  Globe,
  AlertTriangle,
  Activity,
  Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

export function FeaturesGrid() {
  return (
    <section className={cn("py-24 max-w-6xl mx-auto px-4")}>
      <div className={cn("text-center mb-16")}>
        <h2 className={cn("text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight")}>
          The way we secure your <br />Business
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
              "group/bento transition duration-200 shadow-sm p-4 bg-white border border-slate-200 justify-between flex flex-col space-y-4 hover:border-blue-500/50 hover:shadow-md",
              i === 0 || i === 3 ? "md:col-span-2" : ""
            )}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = ({ className, children }: { className?: string; children?: React.ReactNode }) => (
  <div className={cn("flex flex-1 w-full h-full rounded-xl bg-slate-50 border border-slate-100 overflow-hidden relative", className)}>
    {children}
  </div>
);

const items = [
  {
    title: "AI-Powered Domain Monitoring",
    description: "Detect typo-squatting and scam domains targeting your brand in real-time.",
    header: (
      <Skeleton className="p-6 flex-col justify-center items-center bg-gradient-to-br from-blue-50/50 to-slate-50">
        <div className="flex flex-wrap gap-2 justify-center">
          {['Domain Watch', 'Typo Detection', 'Brand Protection', 'Real-time Alerts', 'AI Analysis', 'Threat Intel'].map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-600 shadow-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <Activity className="w-3 h-3 text-blue-600" />
          <span>24/7 Monitoring Active</span>
        </div>
      </Skeleton>
    ),
    icon: <Shield className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Advanced Bot Detection",
    description: "Identify and block malicious bots without impacting legitimate users.",
    header: (
      <Skeleton className="flex flex-col items-center justify-center gap-4 bg-slate-50 p-6">
        <div className="border border-slate-200 bg-white rounded-xl p-4 flex flex-col gap-3 shadow-sm w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Lock size={14} className="text-white" />
              </div>
              <div className="flex flex-col">
                <div className="h-2 w-20 bg-slate-900 rounded" />
                <div className="h-1.5 w-16 bg-slate-300 rounded mt-1.5" />
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
              <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse" />
              Verified
            </div>
          </div>
          <div className="h-px bg-slate-100" />
          <div className="flex items-center justify-between text-[10px] text-slate-500">
            <span>Bot Score: 98%</span>
            <span className="text-red-600">Threats Blocked: 1,234</span>
          </div>
        </div>
      </Skeleton>
    ),
    icon: <Zap className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Developer-Friendly APIs",
    description: "Integrate security protection into your stack with simple, powerful APIs.",
    header: (
      <Skeleton className="bg-slate-900 p-5 font-mono">
        <div className="space-y-1.5">
          <p className="text-blue-400 text-[11px]">import {"{ monitorDomain }"} from '@cynoguard/sdk';</p>
          <p className="text-slate-400 text-[11px]">const config = {"{"}</p>
          <p className="text-emerald-400 text-[11px] pl-4">domain: 'yourbrand.com',</p>
          <p className="text-emerald-400 text-[11px] pl-4">botDetection: true,</p>
          <p className="text-emerald-400 text-[11px] pl-4">aiMode: 'aggressive'</p>
          <p className="text-slate-400 text-[11px]">{"}"}</p>
          <p className="text-blue-400 text-[11px] mt-2">monitorDomain(config);</p>
        </div>
      </Skeleton>
    ),
    icon: <Terminal className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Social Signal Monitoring",
    description: "Track phishing discussions on Reddit, X, and other platforms automatically.",
    header: (
       <Skeleton className="flex items-center justify-center bg-slate-50 p-6">
          <div className="relative flex items-center justify-center h-32 w-32">
            {/* Orbit Ring */}
            <div className="absolute inset-0 rounded-full border border-slate-200 border-dashed" />
            
            {/* Center Alert Icon */}
            <div className="h-12 w-12 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-center z-10">
               <AlertTriangle className="w-6 h-6 text-orange-500" />
            </div>
            
            {/* Social Platform Icons */}
            <div className="absolute -top-3 p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
               <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">R</div>
            </div>
            <div className="absolute -bottom-3 p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
               <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center text-[8px] text-white font-bold">X</div>
            </div>
            <div className="absolute -right-3 p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
               <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">f</div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 font-medium">
            Real-time Signal Detection
          </div>
       </Skeleton>
    ),
    icon: <Globe className="h-4 w-4 text-blue-600" />,
  },
];