"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

const tabs = ["All", "Getting Started", "Product", "Billing", "Support"] as const
type TabKey = (typeof tabs)[number]

const faqs: { question: string; answer: string; category: TabKey }[] = [
  { question: "How do I get started with CynoGuard?", answer: "Sign up for a free account, add your domain in the dashboard, and deploy our lightweight script tag or SDK. Detection starts within minutes with zero configuration required.", category: "Getting Started" },
  { question: "Do I need to install anything on my server?", answer: "No server-side installation is needed for basic detection. Simply add a one-line script tag to your frontend. For advanced features like server-side rule evaluation, use our lightweight SDK available for Node.js, Python, Go, and Ruby.", category: "Getting Started" },
  { question: "What types of bots does CynoGuard detect?", answer: "CynoGuard identifies credential-stuffing bots, web scrapers, spam bots, automated account creators, DDoS botnets, and sophisticated headless browser bots. Our ML models are trained on billions of requests to distinguish over 200 bot signatures.", category: "Product" },
  { question: "Will bot detection slow down my website?", answer: "No. CynoGuard runs at the edge with sub-millisecond latency. Detection happens asynchronously so your page load times remain unaffected for legitimate users.", category: "Product" },
  { question: "Can I customize the detection rules?", answer: "Absolutely. The Rules Engine lets you define custom thresholds for rate limiting, geo-blocking, device fingerprinting, and behavioral patterns. You can also allowlist known partners and internal services.", category: "Product" },
  { question: "What happens when a bot is detected?", answer: "You can configure actions per rule: block the request, serve a CAPTCHA challenge, rate-limit, or log silently for analysis. All events appear in your real-time analytics dashboard.", category: "Product" },
  { question: "How does billing work?", answer: "We offer a generous free tier for up to 100K requests per month. Paid plans are based on total analyzed requests and start at $49/month. Enterprise plans include custom SLAs, dedicated support, and volume discounts.", category: "Billing" },
  { question: "Can I change my plan at any time?", answer: "Yes. Upgrades take effect immediately and are pro-rated. Downgrades apply at the start of the next billing cycle. You can manage your plan from the Billing section of your dashboard at any time.", category: "Billing" },
  { question: "How do I contact support?", answer: "Free-tier users can reach us via the community forum. Paid plans include email support with a 24-hour SLA. Enterprise customers get a dedicated Slack channel and a named account manager.", category: "Support" },
  { question: "What is the average response time?", answer: "Our average first response time is under 4 hours for paid plans and under 24 hours for free-tier community support. Enterprise customers receive responses within 1 hour during business hours.", category: "Support" },
]

export function SupportFAQ() {
  const [activeTab, setActiveTab] = useState<TabKey>("All")
  const filtered = activeTab === "All" ? faqs : faqs.filter((f) => f.category === activeTab)

  return (
    <section className="py-20 md:py-28 bg-[#020812] border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white text-balance">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">Quick answers to the most common questions about CynoGuard.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button key={tab} type="button" onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium font-mono transition-colors ${
                activeTab === tab ? "bg-green-600 text-white border border-green-600" : "bg-gray-900/60 border border-gray-800 text-gray-400 hover:border-green-800 hover:text-green-400"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {filtered.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}
                className="border border-gray-800 bg-gray-900/60 rounded-xl px-6 hover:border-gray-700 transition-colors">
                <AccordionTrigger className="text-left text-base font-medium text-gray-200 hover:no-underline hover:text-green-400 py-5 transition-colors">
                  <div className="flex flex-col items-start gap-1 pr-4">
                    <span>{faq.question}</span>
                    {activeTab === "All" && <span className="text-[11px] font-normal text-green-500/60 font-mono">{faq.category}</span>}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-500 leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {filtered.length === 0 && <p className="text-center text-gray-600 py-12 font-mono">No questions found for this category.</p>}
        </div>
      </div>
    </section>
  )
}