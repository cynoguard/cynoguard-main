import Link from "next/link";
import { ArrowRight, Shield, Zap, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignupCTA } from "@/components/landing/SignupCTA";

const values = [
  { icon: Shield, title: "Security first", description: "Every product decision starts with the question: does this make our customers safer? We never ship shortcuts." },
  { icon: Zap, title: "Speed matters", description: "Threat detection that slows your product is not useful. We obsess over sub-millisecond latency at every layer." },
  { icon: Globe, title: "Built for builders", description: "We make enterprise-grade security accessible to startups and SMBs — not just companies with dedicated security teams." },
  { icon: Users, title: "Customer obsessed", description: "Our support team answers in hours, not days. We treat every bug report like a P0 and every feature request seriously." },
];

const team = [
  { name: "Mahima Sanketh", role: "Team Leader", initials: "MS" },
  { name: "Kaveesh Wijetunge", role: "Backend Lead", initials: "KW" },
  { name: "Vihagi Dawalagala", role: "Frontend Lead", initials: "VD" },
  { name: "Yoshan Jayasinghe", role: "Feature Lead", initials: "YJ" },
  { name: "Yugeeth Damsuka", role: "Testing Lead", initials: "YD" },
  { name: "Sasmitha Wijesinghe", role: "Marketing Lead", initials: "SW" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#020812]">

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(34,197,94,0.07),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-green-900/60 rounded-full bg-green-950/40 px-4 py-1.5 shadow-sm mb-8">
              <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">About</span>
              <span className="text-sm text-green-300/70">Founded 2024 · Remote-first</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              We protect the internet&apos;s builders
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              CynoGuard was founded on the belief that every company — regardless of size — deserves enterprise-grade security intelligence without the enterprise price tag or complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-4 font-mono">// Our mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Make brand protection automatic for every business</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Bots, domain impersonators, and social media scammers cost businesses billions every year. Most of that damage hits companies that don&apos;t have dedicated security teams to fight back.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                CynoGuard automates the detection, scoring, and alerting so founders and small teams can focus on building — not firefighting.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "10M+", label: "Threats blocked" },
                { number: "500+", label: "Companies protected" },
                { number: "99.9%", label: "Uptime SLA" },
                { number: "<1ms", label: "Detection latency" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 text-center hover:border-green-800 transition-colors">
                  <p className="text-4xl font-extrabold text-white">{stat.number}</p>
                  <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-4 font-mono">// What we believe</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-8 hover:border-green-800 transition-all group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-950/40 border border-green-900/40 mb-5 group-hover:border-green-700 transition-colors">
                  <value.icon className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-4 font-mono">// The team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Who we are</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 text-center hover:border-green-800 transition-all group">
                <div className="h-16 w-16 rounded-full bg-green-950/60 border border-green-900/40 text-green-400 flex items-center justify-center text-lg font-bold mx-auto mb-4 font-mono group-hover:border-green-600 transition-colors">
                  {member.initials}
                </div>
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 border-t border-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(34,197,94,0.08),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to join the mission?</h2>
          <p className="text-gray-400 text-lg mb-8">We&apos;re a remote-first team that loves solving hard security problems.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-500 text-white px-8 py-5 rounded-md text-base font-medium shadow-lg shadow-green-900/40" asChild>
              <Link href="/careers">View open roles <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 px-8 py-5 rounded-md text-base font-medium bg-transparent" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <SignupCTA />
    </div>
  );
}