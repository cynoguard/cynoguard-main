import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-1 py-1 pr-4 mb-8 border border-slate-200 rounded-full bg-white hover:bg-slate-50 transition-colors cursor-pointer group">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
          <span className="text-sm font-medium text-slate-600 flex items-center gap-1">
            Introducing v1 Automation 
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6">
          The Security Solutions <br /> For Your Business
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
          Empower your cyber team. The one stop platform for all secure management of small and medium-sized business
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button className="bg-[#0a1120] hover:bg-[#1a253a] text-white px-8 py-5 rounded-md text-base font-medium transition-all">
            Start for free
          </Button>
          
          <Button variant="ghost" className="text-slate-600 hover:text-slate-900 px-8 py-5 text-base font-medium flex items-center gap-2">
            Watch demo
            <Play/>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;