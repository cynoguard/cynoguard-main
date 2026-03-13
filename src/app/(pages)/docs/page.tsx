import { SignupCTA } from "@/components/landing/SignupCTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, ChevronRight, Code2, Globe, Shield, Terminal, Zap } from "lucide-react";
import Link from "next/link";

const sections = [
  { icon: BookOpen, title: "Getting Started", description: "Set up CynoGuard in under 10 minutes. Walk through account creation, project setup, and your first monitoring rule.", links: [{ label: "Quick start guide", href: "/support" }, { label: "Dashboard overview", href: "/support" }, { label: "Create your first project", href: "/sign-up" }] },
  { icon: Terminal, title: "API Reference", description: "Full reference for the CynoGuard REST API. Authenticate, query threat data, and manage projects programmatically.", links: [{ label: "Authentication", href: "/support" }, { label: "Endpoints overview", href: "/support" }, { label: "Rate limits & quotas", href: "/support" }] },
  { icon: Code2, title: "SDKs & Libraries", description: "Official SDKs for Node.js, Python, and Go. Drop-in clients with typed responses and built-in retry logic.", links: [{ label: "Node.js SDK", href: "/support" }, { label: "Python SDK", href: "/support" }, { label: "Go SDK", href: "/support" }] },
  { icon: Shield, title: "Bot Detection", description: "Integrate the bot detection snippet, configure ML sensitivity, and set custom rules for your traffic patterns.", links: [{ label: "Script installation", href: "/bot-detection" }, { label: "Custom rules", href: "/support" }, { label: "Challenge modes", href: "/support" }] },
  { icon: Globe, title: "Domain Monitoring", description: "Add domains, configure alert thresholds, and understand the typo-squatting detection algorithm.", links: [{ label: "Add your first domain", href: "/domain-monitoring" }, { label: "Alert configuration", href: "/support" }, { label: "Detection logic", href: "/support" }] },
  { icon: Zap, title: "Social Monitoring", description: "Connect social platforms, set brand keywords, and configure phishing alert pipelines.", links: [{ label: "Connect X (Twitter)", href: "/social-media-monitoring" }, { label: "Keyword management", href: "/support" }, { label: "Webhook alerts", href: "/support" }] },
];

const guides = [
  { title: "Migrate from a legacy WAF to CynoGuard", category: "Migration", time: "12 min", href: "/support" },
  { title: "Set up Slack alerts for high-risk events", category: "Integrations", time: "5 min", href: "/integrations" },
  { title: "Build a custom threat dashboard", category: "Advanced", time: "20 min", href: "/support" },
  { title: "Tune false-positive rates for checkout flows", category: "Bot Detection", time: "8 min", href: "/bot-detection" },
];

export default function DocsPage() {
  return (
    <div className="bg-[#020812] min-h-screen">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      {/* Hero */}
      <section className="relative z-10 pt-24 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 border border-green-900/60 rounded-full bg-green-950/40 px-4 py-1.5 shadow-sm">
              <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Docs</span>
              <span className="text-sm text-green-300/70">Always up to date</span>
            </div>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">Documentation</h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Everything you need to integrate, configure, and get the most out of CynoGuard.
            </p>
          </div>
          <div className="mt-10 max-w-xl mx-auto">
            <input type="text" placeholder="Search documentation..."
              className="w-full pl-5 pr-4 py-4 rounded-xl border border-gray-700 bg-gray-900/60 text-base text-white placeholder:text-gray-600 focus:outline-none focus:border-green-600 transition-all font-mono" />
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="relative z-10 py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 hover:border-green-800 hover:shadow-lg hover:shadow-green-900/10 transition-all group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-950/40 border border-green-900/40 mb-4 group-hover:border-green-700 transition-colors">
                  <section.icon className="h-5 w-5 text-green-500" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-2">{section.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="flex items-center gap-2 text-sm text-green-500 hover:text-green-400 font-medium transition-colors font-mono">
                        <ChevronRight className="h-3.5 w-3.5" />{link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="relative z-10 py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">Popular guides</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Step-by-step walkthroughs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <Link key={guide.title} href={guide.href}
                className="group flex items-center justify-between rounded-2xl border border-gray-800 bg-gray-900/60 p-5 hover:-translate-y-0.5 hover:border-green-800 hover:shadow-md transition-all">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-green-500 font-mono">{guide.category}</span>
                  <h3 className="mt-1 text-base font-semibold text-white group-hover:text-green-400 transition-colors">{guide.title}</h3>
                  <p className="mt-1 text-xs text-gray-500 font-mono">{guide.time} read</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-gray-400 text-lg mb-8">Our team is available around the clock to help you get unstuck.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-500 text-white px-8 py-5 rounded-md text-base font-medium shadow-lg shadow-green-900/40" asChild>
              <Link href="/support">Contact support <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 px-8 py-5 rounded-md text-base font-medium bg-transparent" asChild>
              <Link href="/sign-up">Start for free</Link>
            </Button>
          </div>
        </div>
      </section>

      <SignupCTA />
    </div>
  );
}