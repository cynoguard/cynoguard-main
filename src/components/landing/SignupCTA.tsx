import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SignupCTA = () => {
  return (
    <section className={cn("relative w-full py-32 overflow-hidden bg-white")}>
      {/* Background Gradient Effect */}
      <div 
        className={cn("absolute inset-0 opacity-40")}
        style={{
          background: `radial-gradient(circle at bottom, #276AC3 10%, #ffffff 90%)`
        }}
      />

      <div className={cn("relative max-w-4xl mx-auto px-4 text-center")}>
        {/* Main Heading */}
        <h2 className={cn("text-5xl md:text-6xl font-bold tracking-tight text-[#0a1120] mb-4")}>
          Sign up for free today
        </h2>

        {/* Subtext */}
        <p className={cn("text-slate-500 text-lg md:text-lg font-medium mb-10")}>
          Protect your whole reputation with just 0$
        </p>

        {/* Action Buttons */}
        <div className={cn("flex flex-col sm:flex-row items-center justify-center gap-6")}>
          <Button 
            className={cn("bg-black text-white hover:bg-slate-800 px-8 py-5 rounded-sm text-lg font-bold shadow-xl transition-all hover:scale-101 hover:cursor-pointer")}
          >
            Get for free
          </Button>
          
          <button className={cn("flex items-center gap-2 text-lg font-semibold text-slate-900 hover:gap-3 transition-all group")}>
            Learn more 
            <ArrowRight size={20} className={cn("group-hover:translate-x-1 transition-transform")} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignupCTA;