"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  Terminal, 
  Cpu, 
  Zap, 
  Share2, 
  Plus,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

export function FeaturesGrid() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          The way we secure your <br />Business
        </h2>
      </div>
      
      <BentoGrid className="mx-auto">
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
    title: "Ready to go services",
    description: "Deploy production-ready security protocols in minutes.",
    header: (
      <Skeleton className="p-6 flex-col justify-center items-center from-blue-50/50 to-slate-50">
        <div className="flex flex-wrap gap-2 justify-center">
          {['Cybersecurity', 'Powerful APIs', 'Safe Space', 'For Teams', 'Decentralized', 'Revolution'].map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-600 shadow-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </Skeleton>
    ),
    icon: <Zap className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "For growing teams",
    description: "Collaborative workspaces designed to scale.",
    header: (
      <Skeleton className="flex flex-col items-center justify-center gap-4 bg-slate-50">
        <div className="border border-slate-200 bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm w-4/5">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
             <Share2 size={16} className="text-white" />
          </div>
          <div className="flex flex-col flex-1">
            <div className="h-2 w-full bg-slate-100 rounded" />
            <div className="h-2 w-2/3 bg-slate-50 rounded mt-2" />
          </div>
        </div>
        <div className="flex -space-x-2">
           {[1,2,3].map(i => <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-slate-200" />)}
           <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-[10px] text-white font-bold">
             <Plus size={10} />
           </div>
        </div>
      </Skeleton>
    ),
    icon: <Globe className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Powerful APIs for developers,",
    description: "Seamless integration with a few lines of code.",
    header: (
      <Skeleton className="bg-slate-900 p-5 font-mono">
        <div className="space-y-1.5">
          <p className="text-blue-400 text-[11px]">import {"{ protect }"} from cynoguard;</p>
          <p className="text-slate-400 text-[11px]">const app = express();</p>
          <p className="text-emerald-400 text-[11px] mt-2">app.use</p>
          <p className="text-emerald-400 text-[11px] pl-4">mode: aggressive,</p>
          <p className="text-emerald-400 text-[11px] pl-4">ai: true</p>
          <p className="text-emerald-400 text-[11px]">{"}))"}</p>
        </div>
      </Skeleton>
    ),
    icon: <Terminal className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "The best Integration out there",
    description: "Connect your favorite tech stack seamlessly with our native plugins.",
    header: (
       <Skeleton className="flex items-center justify-center bg-slate-50">
          <div className="relative flex items-center justify-center h-32 w-32">
            {/* Solid Orbit Ring */}
            <div className="absolute inset-0 rounded-full border border-slate-200 border-dashed" />
            
            {/* Center Brand Icon */}
            <div className="h-12 w-12 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-center z-10">
               <div className="w-6 h-6 bg-lime-400 rounded-sm" />
            </div>
            
            {/* Fixed Tech Icons */}
            <div className="absolute -top-3 p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
               <div className="w-4 h-4 bg-blue-500 rounded-sm" /> {/* Next.js placeholder */}
            </div>
            <div className="absolute -bottom-3 p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
               <div className="w-4 h-4 bg-emerald-500 rounded-sm" /> {/* React placeholder */}
            </div>
            <div className="absolute -right-3 p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
               <div className="w-4 h-4 bg-orange-500 rounded-sm" /> {/* Logo 3 */}
            </div>
          </div>
       </Skeleton>
    ),
    icon: <Cpu className="h-4 w-4 text-blue-600" />,
  },
];