import { BookOpen, Code, CreditCard, LifeBuoy, FileText, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Set up your account, deploy your first rule, and go live in under 5 minutes.",
    href: "/docs",
    articles: 12,
  },
  {
    icon: Code,
    title: "API Documentation",
    description: "REST endpoints, webhooks, and official SDKs for Node.js, Python, Go, and Ruby.",
    href: "/docs",
    articles: 34,
  },
  {
    icon: CreditCard,
    title: "Billing & Plans",
    description: "Manage subscriptions, download invoices, and compare pricing tiers.",
    href: "/pricing",
    articles: 8,
  },
  {
    icon: Zap,
    title: "Bot Detection",
    description: "Configure rules, review analytics, and fine-tune threat thresholds.",
    href: "/bot-detection",
    articles: 21,
  },
  {
    icon: FileText,
    title: "Guides & Tutorials",
    description: "Step-by-step walkthroughs for integrations, migrations, and best practices.",
    href: "/docs",
    articles: 16,
  },
  {
    icon: LifeBuoy,
    title: "Account & Security",
    description: "Team management, API keys, 2FA setup, SSO configuration, and audit logs.",
    href: "/contact",
    articles: 10,
  },
]

export function SupportCategories() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
            Browse by category
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-400 leading-relaxed">
            Jump straight to the topic you need help with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-200"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-[#0a1120] transition-colors duration-200">
                  <category.icon className="h-5 w-5 text-slate-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-[#0a1120]">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {category.description}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{category.articles} articles</span>
                <div className="flex items-center gap-1 text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
                  Browse
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}