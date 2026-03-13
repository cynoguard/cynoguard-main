import { ArrowRight, BookOpen, Code, CreditCard, FileText, LifeBuoy, Zap } from "lucide-react"
import Link from "next/link"

const categories = [
  { icon: BookOpen, title: "Getting Started", description: "Set up your account, deploy your first rule, and go live in under 5 minutes.", href: "/docs", articles: 12 },
  { icon: Code, title: "API Documentation", description: "REST endpoints, webhooks, and official SDKs for Node.js, Python, Go, and Ruby.", href: "/docs", articles: 34 },
  { icon: CreditCard, title: "Billing & Plans", description: "Manage subscriptions, download invoices, and compare pricing tiers.", href: "/pricing", articles: 8 },
  { icon: Zap, title: "Bot Detection", description: "Configure rules, review analytics, and fine-tune threat thresholds.", href: "/bot-detection", articles: 21 },
  { icon: FileText, title: "Guides & Tutorials", description: "Step-by-step walkthroughs for integrations, migrations, and best practices.", href: "/docs", articles: 16 },
  { icon: LifeBuoy, title: "Account & Security", description: "Team management, API keys, 2FA setup, SSO configuration, and audit logs.", href: "/contact", articles: 10 },
]

export function SupportCategories() {
  return (
    <section className="py-20 md:py-28 bg-[#020812] border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">Categories</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white text-balance">Browse by category</h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">Jump straight to the topic you need help with.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link key={category.title} href={category.href}
              className="group relative flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-900/60 p-6 hover:border-green-800 hover:shadow-lg hover:shadow-green-900/10 transition-all duration-200">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-950/40 border border-green-900/40 group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-200">
                  <category.icon className="h-5 w-5 text-green-400 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-green-400 transition-colors">{category.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{category.description}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-800 flex items-center justify-between">
                <span className="text-xs text-gray-600 font-mono">{category.articles} articles</span>
                <div className="flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-green-400 transition-colors font-mono">
                  Browse<ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}