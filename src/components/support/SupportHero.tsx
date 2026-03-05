"use client"

import { Search, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const quickLinks = [
  { label: "Getting started guide", href: "#" },
  { label: "API reference", href: "#" },
  { label: "Bot detection setup", href: "/bot-detection" },
  { label: "Billing FAQ", href: "#" },
]

export function SupportHero() {
  const [query, setQuery] = useState("")

  return (
    <section className="pt-24 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full bg-white px-4 py-1.5 shadow-sm">
            <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              New
            </span>
            <span className="text-sm text-slate-600">
              24/7 priority support now available
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 text-balance">
            How can we help?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto text-pretty">
            Search our knowledge base, explore guides, or get in touch
            with our team. We are here to help.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-10 max-w-xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documentation, guides, and FAQs..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all shadow-sm hover:shadow-md focus:shadow-md"
              aria-label="Search help center"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-slate-400">Popular:</span>
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 hover:border-slate-300 transition-colors"
            >
              {link.label}
              <ArrowRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
