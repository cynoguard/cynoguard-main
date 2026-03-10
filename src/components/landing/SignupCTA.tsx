import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const SignupCTA = () => {
  return (
    <section className={cn("relative w-full py-32 overflow-hidden bg-[#020812]")}>

      {/* Dark grid bg */}
      <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />

      {/* Green radial glow from bottom */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 120%, rgba(34,197,94,0.12), transparent)` }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-green-900/20 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-green-800/10 blur-3xl pointer-events-none animate-pulse-slow delay-500" />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 opacity-30">
        <div className="w-8 h-8 border-t-2 border-l-2 border-green-500" />
      </div>
      <div className="absolute top-8 right-8 opacity-30">
        <div className="w-8 h-8 border-t-2 border-r-2 border-green-500" />
      </div>
      <div className="absolute bottom-8 left-8 opacity-30">
        <div className="w-8 h-8 border-b-2 border-l-2 border-green-500" />
      </div>
      <div className="absolute bottom-8 right-8 opacity-30">
        <div className="w-8 h-8 border-b-2 border-r-2 border-green-500" />
      </div>

      <div className={cn("relative z-10 max-w-4xl mx-auto px-4 text-center")}>

        {/* Eyebrow */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
          <div className="inline-flex items-center gap-2 border border-green-900/60 rounded-full bg-green-950/40 px-4 py-1.5 shadow-sm mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-green-300/80 font-medium font-mono">Free forever on the Starter plan</span>
          </div>
        </div>

        <h2 className={cn(
          "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both",
          "text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
        )}>
          Sign up for free today
        </h2>

        <p className={cn(
          "animate-in fade-in duration-700 delay-300 fill-mode-both",
          "text-gray-400 text-lg md:text-lg font-medium mb-10"
        )}>
          Protect your whole reputation with just $0
        </p>

        <div className={cn(
          "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 fill-mode-both",
          "flex flex-col sm:flex-row items-center justify-center gap-6"
        )}>
          <Button
            className={cn(
              "bg-green-600 text-white hover:bg-green-500 px-8 py-5 rounded-md text-base font-bold shadow-xl shadow-green-900/40",
              "transition-all hover:scale-[1.03] hover:shadow-green-800/50 hover:shadow-2xl"
            )}
            asChild
          >
            <Link href="/sign-up">Get for free</Link>
          </Button>

          <Link
            href="/docs"
            className={cn("flex items-center gap-2 text-base font-semibold text-gray-400 hover:text-white group transition-all")}
          >
            <Terminal size={16} className="text-green-500" />
            Learn more
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SignupCTA;