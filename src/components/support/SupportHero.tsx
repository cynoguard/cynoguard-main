"use client"
import { Search, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const quickLinks = [
  { label: "Getting started guide", href: "/docs" },
  { label: "API reference", href: "/docs" },
  { label: "Bot detection setup", href: "/bot-detection" },
  { label: "Billing FAQ", href: "/pricing" },
]

export function SupportHero() {
  const [query, setQuery] = useState("")
  return (
    <section className="relative pt-24 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-[#020812]">
      <div className="absolute inset-0 bg-grid-dark opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(34,197,94,0.07),transparent)] pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-green-900/10 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-gray-900/30 blur-3xl pointer-events-none animate-pulse-slow delay-500" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-top-4 duration-700 fill-mode-both">
          <div className="inline-flex items-center gap-2 border border-green-900/60 rounded-full bg-green-950/40 px-4 py-1.5 shadow-sm">
            <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">24/7</span>
            <span className="text-sm text-green-300/70">Priority support now available</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white text-balance animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
            How can we{" "}<span className="text-gradient-blue">help?</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto animate-in fade-in duration-700 delay-300 fill-mode-both">
            Search our knowledge base, explore guides, or get in touch with our team. We&apos;re here to help.
          </p>
        </div>

        <div className="mt-10 max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 fill-mode-both">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-600 group-focus-within:text-green-400 transition-colors" />
            </div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documentation, guides, and FAQs..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-700 bg-gray-900/60 text-base text-white placeholder:text-gray-600 focus:outline-none focus:border-green-600 transition-all shadow-sm hover:border-gray-600 font-mono"
              aria-label="Search help center" />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-in fade-in duration-1000 delay-600 fill-mode-both">
          <span className="text-sm text-gray-600 font-mono">Popular:</span>
          {quickLinks.map((link) => (
            <Link key={link.label} href={link.href}
              className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-green-400 bg-gray-900/60 border border-gray-800 rounded-full px-3.5 py-1.5 hover:border-green-800 transition-all font-mono">
              {link.label}<ArrowRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}