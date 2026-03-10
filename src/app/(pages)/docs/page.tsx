import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Terminal, Zap, Shield, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignupCTA } from "@/components/landing/SignupCTA";

const sections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Set up CynoGuard in under 10 minutes. Walk through account creation, project setup, and your first monitoring rule.",
    links: [
      { label: "Quick start guide", href: "#" },
      { label: "Dashboard overview", href: "#" },
      { label: "Create your first project", href: "#" },
    ],
  },
  {
    icon: Terminal,
    title: "API Reference",
    description: "Full reference for the CynoGuard REST API. Authenticate, query threat data, and manage projects programmatically.",
    links: [
      { label: "Authentication", href: "#" },
      { label: "Endpoints overview", href: "#" },
      { label: "Rate limits & quotas", href: "#" },
    ],
  },
  {
    icon: Code2,
    title: "SDKs & Libraries",
    description: "Official SDKs for Node.js, Python, and Go. Drop-in clients with typed responses and built-in retry logic.",
    links: [
      { label: "Node.js SDK", href: "#" },
      { label: "Python SDK", href: "#" },
      { label: "Go SDK", href: "#" },
    ],
  },
  {
    icon: Shield,
    title: "Bot Detection",
    description: "Integrate the bot detection snippet, configure ML sensitivity, and set custom rules for your traffic patterns.",
    links: [
      { label: "Script installation", href: "/bot-detection" },
      { label: "Custom rules", href: "#" },
      { label: "Challenge modes", href: "#" },
    ],
  },
  {
    icon: Globe,
    title: "Domain Monitoring",
    description: "Add domains, configure alert thresholds, and understand the typo-squatting detection algorithm.",
    links: [
      { label: "Add your first domain", href: "/domain-monitoring" },
      { label: "Alert configuration", href: "#" },
      { label: "Detection logic", href: "#" },
    ],
  },
  {
    icon: Zap,
    title: "Social Monitoring",
    description: "Connect social platforms, set brand keywords, and configure phishing alert pipelines.",
    links: [
      { label: "Connect X (Twitter)", href: "/social-media-monitoring" },
      { label: "Keyword management", href: "#" },
      { label: "Webhook alerts", href: "#" },
    ],
  },
];

const guides = [
  { title: "Migrate from a legacy WAF to CynoGuard", category: "Migration", time: "12 min" },
  { title: "Set up Slack alerts for high-risk events", category: "Integrations", time: "5 min" },
  { title: "Build a custom threat dashboard", category: "Advanced", time: "20 min" },
  { title: "Tune false-positive rates for checkout flows", category: "Bot Detection", time: "8 min" },
];

export default function DocsPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full bg-white px-4 py-1.5 shadow-sm">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Docs
              </span>
              <span className="text-sm text-slate-600">
                Always up to date
              </span>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
              Documentation
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Everything you need to integrate, configure, and get the most out of CynoGuard.
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-white text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doc sections grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 mb-4">
                  <section.icon className="h-5 w-5 text-slate-700" />
                </div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">{section.title}</h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular guides */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Popular guides</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
              Step-by-step walkthroughs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href="#"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {guide.category}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-slate-900 group-hover:text-slate-700">
                    {guide.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">{guide.time} read</p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Our team is available around the clock to help you get unstuck.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-[#0a1120] hover:bg-[#1a253a] text-white px-8 py-5 rounded-md text-base font-medium"
              asChild
            >
              <Link href="/support">Contact support <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button
              variant="outline"
              className="border-slate-200 text-slate-600 hover:bg-slate-50 px-8 py-5 rounded-md text-base font-medium bg-transparent"
              asChild
            >
              <Link href="/sign-up">Start for free</Link>
            </Button>
          </div>
        </div>
      </section>

      <SignupCTA />
    </div>
  );
}