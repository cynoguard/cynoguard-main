import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const faqItems = [
  { question: "What sources can CynoGuard monitor?", answer: "We cover major social networks, forums, review sites, and pastebin-style sources. You can also add custom keyword lists and watchlists." },
  { question: "How quickly will we see alerts?", answer: "Signals are processed in near real time, and alerts can be routed to email, Slack, or your SIEM based on severity." },
  { question: "Can we tune detections to our brand?", answer: "Yes. You can set brand keywords, executive names, product aliases, and geo filters to reduce noise and improve precision." },
  { question: "How do takedowns and response workflows work?", answer: "CynoGuard creates an evidence package, assigns owners, and tracks response steps so legal, trust, and security teams can collaborate." },
  { question: "What does onboarding look like?", answer: "Most teams are live within 48 hours. We configure sources, run a baseline sweep, and deliver your first response playbooks." },
]

const SocialMonitoringFAQ = () => {
  return (
    <section className={cn("py-20 bg-[#020812] border-t border-gray-900")}>
      <div className={cn("max-w-5xl mx-auto px-4 sm:px-6")}>
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Answers to the questions we hear most</h2>
          <p className="mt-4 text-base text-gray-400">Everything you need to know about social media monitoring, alerts, and response workflows.</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`} className="rounded-xl border border-gray-800 bg-gray-900/60 px-6 hover:border-gray-700 transition-colors">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-200 hover:no-underline hover:text-green-400 py-5 transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-500 leading-relaxed pb-5">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default SocialMonitoringFAQ