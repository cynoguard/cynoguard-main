import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Is Cynoguard easy to use ?",
    answer: "Yes, Cynoguard is designed with a focus on simplicity. Our intuitive dashboard allows you to manage your security protocols with zero learning curve.",
  },
  {
    question: "Is Cynoguard optimized for bot detection ?",
    answer: "Absolutely. We use advanced AI-driven patterns to identify and mitigate bot threats in real-time without affecting your legitimate user traffic.",
  },
  {
    question: "How does Cynoguard compare to others ?",
    answer: "Cynoguard offers a unique blend of decentralized security and high-performance monitoring that is specifically tailored for the needs of modern startups and SMBs.",
  },
  {
    question: "Why not just a VPN ?",
    answer: "While a VPN secures your connection, Cynoguard protects your entire business infrastructure, provides threat intelligence, and automates security responses that a VPN cannot.",
  },
  {
    question: "Can I get a refund if I don't like it?",
    answer: "We offer a 30-day money-back guarantee on all our paid plans. If you're not satisfied, we'll refund your purchase, no questions asked.",
  },
  {
    question: "What features will be added in the future?",
    answer: "Our roadmap includes deeper AI automation, more native integrations with popular cloud providers, and enhanced quantum-resistant encryption protocols.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Questions and Answers
          </h2>
        </div>

        {/* Accordion Logic */}
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 py-2">
              <AccordionTrigger className="text-lg font-medium text-slate-900 hover:no-underline hover:text-slate-600 transition-colors text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;