import Link from "next/link";
import { ArrowRight, Shield, Zap, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignupCTA } from "@/components/landing/SignupCTA";

const values = [
  {
    icon: Shield,
    title: "Security first",
    description: "Every product decision starts with the question: does this make our customers safer? We never ship shortcuts.",
  },
  {
    icon: Zap,
    title: "Speed matters",
    description: "Threat detection that slows your product is not useful. We obsess over sub-millisecond latency at every layer.",
  },
  {
    icon: Globe,
    title: "Built for builders",
    description: "We make enterprise-grade security accessible to startups and SMBs — not just companies with dedicated security teams.",
  },
  {
    icon: Users,
    title: "Customer obsessed",
    description: "Our support team answers in hours, not days. We treat every bug report like a P0 and every feature request seriously.",
  },
];

const team = [
  { name: "Kaveesha Wijetunge", role: "Founder & CEO", initials: "KW" },
  { name: "Sarah Chen", role: "Head of Engineering", initials: "SC" },
  { name: "Marcus Reid", role: "Head of Threat Intelligence", initials: "MR" },
  { name: "Priya Nair", role: "Head of Product", initials: "PN" },
  { name: "Jonas Weber", role: "Lead Security Researcher", initials: "JW" },
  { name: "Amina Diallo", role: "Head of Customer Success", initials: "AD" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full bg-white px-4 py-1.5 shadow-sm mb-8">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                About
              </span>
              <span className="text-sm text-slate-600">Founded 2024 · Remote-first</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
              We protect the internet&apos;s builders
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
              CynoGuard was founded on the belief that every company — regardless of size — deserves enterprise-grade security intelligence without the enterprise price tag or complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">Our mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Make brand protection automatic for every business
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                Bots, domain impersonators, and social media scammers cost businesses billions every year. Most of that damage hits companies that don&apos;t have dedicated security teams to fight back.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
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
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <p className="text-4xl font-extrabold text-slate-900">{stat.number}</p>
                  <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">What we believe</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-slate-200 bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 mb-5">
                  <value.icon className="h-6 w-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">The team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Who we are</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-slate-200 bg-white p-6 text-center hover:shadow-md transition-all">
                <div className="h-16 w-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to join the mission?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            We&apos;re a remote-first team that loves solving hard security problems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-5 rounded-md text-base font-medium" asChild>
              <Link href="/careers">View open roles <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-5 rounded-md text-base font-medium bg-transparent" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <SignupCTA />
    </div>
  );
}