import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignupCTA } from "@/components/landing/SignupCTA";

const openRoles = [
  {
    title: "Senior Security Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and improve our threat detection pipeline, work on ML models for bot classification, and harden our infrastructure.",
  },
  {
    title: "Full Stack Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Work across our Next.js dashboard and Fastify API to ship features that help security teams move faster.",
  },
  {
    title: "Threat Intelligence Analyst",
    team: "Research",
    location: "Remote",
    type: "Full-time",
    description: "Monitor emerging attack patterns, maintain our threat keyword database, and publish research the community can learn from.",
  },
  {
    title: "Customer Success Manager",
    team: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "Be the main point of contact for our enterprise customers, help them get maximum value from CynoGuard, and drive renewals.",
  },
];

const perks = [
  { emoji: "🌍", title: "Fully remote", description: "Work from anywhere in the world." },
  { emoji: "🏥", title: "Health coverage", description: "Full medical, dental, and vision." },
  { emoji: "📚", title: "Learning budget", description: "$2,000/year for courses and conferences." },
  { emoji: "🖥️", title: "Home office setup", description: "$1,500 to build your ideal workspace." },
  { emoji: "🏖️", title: "Unlimited PTO", description: "We trust you to manage your time." },
  { emoji: "🤝", title: "Equity", description: "Everyone gets a stake in what we build." },
];

export default function CareersPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full bg-white px-4 py-1.5 shadow-sm mb-8">
            <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Careers</span>
            <span className="text-sm text-slate-600">{openRoles.length} open roles · Remote-first</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl">
            Help us secure the internet
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
            We&apos;re a small, focused team solving hard problems in brand protection and threat intelligence. If that sounds exciting, we&apos;d love to meet you.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why CynoGuard?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk) => (
              <div key={perk.title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{perk.emoji}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{perk.title}</h3>
                <p className="text-sm text-slate-500">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Open positions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Join the team</h2>
          </div>

          <div className="space-y-4">
            {openRoles.map((role) => (
              <div key={role.title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{role.team}</span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="h-3 w-3" />{role.location}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="h-3 w-3" />{role.type}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{role.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{role.description}</p>
                  </div>
                  <Button className="bg-[#0a1120] hover:bg-[#1a253a] text-white rounded-md px-6 py-4 text-sm font-medium shrink-0" asChild>
                    <Link href="/contact">Apply now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-10">
            Don&apos;t see your role?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline font-medium">
              Send us an open application
            </Link>
          </p>
        </div>
      </section>

      <SignupCTA />
    </div>
  );
}