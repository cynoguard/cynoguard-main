import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqItems = [
  { question: "What does CynoGuard monitor for domain threats?", answer: "We watch new registrations, DNS and SSL changes, and hosting indicators across global registries to surface suspicious domain activity." },
  { question: "How are lookalike or typo-squatted domains detected?", answer: "Detection uses edit-distance variants, homoglyphs, and brand keyword patterns to catch spoof domains early." },
  { question: "What happens after a risky domain is found?", answer: "Alerts are prioritized by risk and paired with response guidance, evidence packs, and takedown workflows." },
  { question: "Can I monitor multiple brands or portfolios?", answer: "Yes. Add domains, trademarks, and keywords to define multiple brand perimeters in a single workspace." },
  { question: "How is risk scoring determined?", answer: "Scores combine similarity to your brand, infrastructure overlap, and change velocity to highlight the most urgent cases." },
  { question: "Do you provide reporting for leadership?", answer: "Weekly summaries and exportable reports make it easy to brief stakeholders on incidents and outcomes." },
];

const FAQ = () => {
  return (
    <section className={cn("py-20 bg-[#020812] border-t border-gray-900")}>
      <div className={cn("max-w-4xl mx-auto px-4 sm:px-6")}>
        <div className={cn("text-center mb-12")}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">FAQ</p>
          <h2 className={cn("text-3xl md:text-4xl font-semibold text-white tracking-tight")}>Domain monitoring questions, answered</h2>
          <p className={cn("mt-3 text-base text-gray-400")}>Everything you need to understand how monitoring works and how teams respond.</p>
        </div>
        <Accordion type="single" collapsible className={cn("w-full space-y-3")}>
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="border border-gray-800 bg-gray-900/60 rounded-xl px-6 hover:border-gray-700 transition-colors">
              <AccordionTrigger className={cn("text-left text-base font-semibold text-gray-200 hover:no-underline hover:text-green-400 py-5 transition-colors")}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className={cn("text-gray-500 leading-relaxed pb-5")}>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;