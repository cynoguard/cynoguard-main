import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignupCTA } from "@/components/landing/SignupCTA";

const categories = ["All", "Alerting", "Cloud", "DevOps", "SIEM", "Communication"];

const integrations = [
  {
    name: "Slack",
    category: "Communication",
    description: "Send real-time threat alerts and incident notifications directly to your Slack channels.",
    badge: "Popular",
    color: "bg-purple-500",
    letter: "S",
    available: true,
  },
  {
    name: "PagerDuty",
    category: "Alerting",
    description: "Route high-severity CynoGuard alerts into PagerDuty for on-call escalation workflows.",
    badge: null,
    color: "bg-green-500",
    letter: "P",
    available: true,
  },
  {
    name: "AWS",
    category: "Cloud",
    description: "Deploy CynoGuard alongside your AWS infrastructure with native CloudWatch and Lambda hooks.",
    badge: null,
    color: "bg-orange-500",
    letter: "A",
    available: true,
  },
  {
    name: "GitHub",
    category: "DevOps",
    description: "Trigger security scans on pull requests and receive threat reports directly in your GitHub workflow.",
    badge: null,
    color: "bg-slate-900",
    letter: "G",
    available: true,
  },
  {
    name: "Splunk",
    category: "SIEM",
    description: "Stream CynoGuard threat events into Splunk for correlation, retention, and compliance reporting.",
    badge: null,
    color: "bg-red-500",
    letter: "S",
    available: true,
  },
  {
    name: "Datadog",
    category: "Cloud",
    description: "Forward bot detection and domain alert metrics to your Datadog dashboards alongside infrastructure data.",
    badge: "Popular",
    color: "bg-violet-600",
    letter: "D",
    available: true,
  },
  {
    name: "Microsoft Teams",
    category: "Communication",
    description: "Post critical brand threat alerts to Teams channels and notify the right people instantly.",
    badge: null,
    color: "bg-blue-600",
    letter: "T",
    available: true,
  },
  {
    name: "Zapier",
    category: "DevOps",
    description: "Build no-code automation workflows that trigger on any CynoGuard event type.",
    badge: null,
    color: "bg-orange-400",
    letter: "Z",
    available: true,
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    description: "Deploy alongside GCP infrastructure with Pub/Sub event forwarding and Cloud Functions triggers.",
    badge: "Coming soon",
    color: "bg-blue-400",
    letter: "G",
    available: false,
  },
  {
    name: "Elastic SIEM",
    category: "SIEM",
    description: "Index all CynoGuard events into Elasticsearch for long-term retention and advanced threat hunting.",
    badge: "Coming soon",
    color: "bg-yellow-400",
    letter: "E",
    available: false,
  },
  {
    name: "Discord",
    category: "Communication",
    description: "Pipe alert notifications into Discord servers for community-facing security operations.",
    badge: "Coming soon",
    color: "bg-indigo-500",
    letter: "D",
    available: false,
  },
  {
    name: "Jira",
    category: "DevOps",
    description: "Auto-create Jira tickets for every high-severity CynoGuard incident that needs investigation.",
    badge: "Coming soon",
    color: "bg-blue-700",
    letter: "J",
    available: false,
  },
];

const benefits = [
  "One-click connect with OAuth or API keys",
  "Bi-directional event sync where supported",
  "Granular permission scopes per integration",
  "Detailed audit logs for every connected app",
];

export default function IntegrationsPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full bg-white px-4 py-1.5 shadow-sm">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                New
              </span>
              <span className="text-sm text-slate-600">
                Zapier and PagerDuty integrations now available
              </span>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
              Connect the tools <br /> you already use
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              CynoGuard fits into your existing workflow. Push threat alerts to Slack, sync incidents to PagerDuty, stream data to your SIEM — all in a few clicks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button
              className="bg-[#0a1120] hover:bg-[#1a253a] text-white px-8 py-5 rounded-md text-base font-medium"
              asChild
            >
              <Link href="/sign-up">
                Start for free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-slate-200 text-slate-600 hover:bg-slate-50 px-8 py-5 rounded-md text-base font-medium bg-transparent"
              asChild
            >
              <Link href="/docs">View API docs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Category filter — visual only */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium cursor-pointer transition-colors",
                  cat === "All"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                )}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className={cn(
                  "relative rounded-2xl border bg-white p-6 transition-all",
                  integration.available
                    ? "border-slate-200 hover:border-blue-200 hover:shadow-md"
                    : "border-slate-100 opacity-60"
                )}
              >
                {/* Badge */}
                {integration.badge && (
                  <span
                    className={cn(
                      "absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                      integration.badge === "Popular"
                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                        : "bg-slate-100 text-slate-500 border border-slate-200"
                    )}
                  >
                    {integration.badge}
                  </span>
                )}

                {/* Logo */}
                <div className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg text-white text-sm font-bold mb-4",
                  integration.color
                )}>
                  {integration.letter}
                </div>

                <h3 className="text-base font-semibold text-slate-900 mb-1">{integration.name}</h3>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">{integration.category}</span>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{integration.description}</p>

                {integration.available && (
                  <Link
                    href="/docs"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View docs <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
                Why integrations matter
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Security that lives where your team works
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                The best security tooling is the kind your team actually uses. CynoGuard integrations push the right signal to the right person at the right time — without forcing anyone to switch tabs.
              </p>
            </div>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-base text-slate-700 font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Request an integration */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Don&apos;t see your tool?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            We&apos;re adding new integrations every month. Let us know what you need and we&apos;ll prioritise it.
          </p>
          <Button
            className="bg-[#0a1120] hover:bg-[#1a253a] text-white px-8 py-5 rounded-md text-base font-medium"
            asChild
          >
            <Link href="/support">Request an integration <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <SignupCTA />
    </div>
  );
}