/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";

const sections = [
  { title: "1. Acceptance of Terms", paragraphs: ["By accessing and using CynoGuard's security intelligence platform (\"Service\"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.", "These Terms of Service govern your access to and use of our website, services, and applications provided by CynoGuard Inc."] },
  { title: "2. Description of Service", intro: "CynoGuard provides a security intelligence platform that offers:", items: ["Domain monitoring and typo-squatting detection", "AI-powered bot detection and prevention", "Social media monitoring for phishing discussions", "Real-time security alerts and threat intelligence", "API access for integration with your systems"] },
  { title: "3. User Accounts", subsections: [{ subtitle: "3.1 Account Creation", text: "To use our Service, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account." }, { subtitle: "3.2 Account Security", text: "You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your account information." }] },
  { title: "4. Acceptable Use", intro: "You agree not to use the Service:", items: ["For any unlawful purpose or to solicit others to perform unlawful acts", "To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances", "To infringe upon or violate intellectual property rights", "To harass, abuse, insult, harm, defame, slander, disparage, or discriminate", "To submit false or misleading information", "To upload or transmit viruses or any other type of malicious code", "To interfere with or circumvent the security features of the Service"] },
  { title: "5. Subscription and Payment", subsections: [{ subtitle: "5.1 Subscription Plans", text: "We offer various subscription plans with different features and pricing. Your subscription will automatically renew unless you cancel before the renewal date." }, { subtitle: "5.2 Payment Terms", text: "Payment is due in advance for each billing period. All fees are non-refundable except as required by law or as explicitly stated in our refund policy." }, { subtitle: "5.3 Price Changes", text: "We reserve the right to modify our pricing at any time. We will provide notice of any price changes at least 30 days in advance." }] },
  { title: "6. Intellectual Property", paragraphs: ["The Service and its original content, features, and functionality are owned by CynoGuard Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.", "You may not reproduce, distribute, modify, create derivative works of, publicly display, or transmit any of the material on our Service without our prior written consent."] },
  { title: "7. Service Availability", paragraphs: ["We strive to maintain high availability of our Service, but we do not guarantee uninterrupted, secure, or error-free operation. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control."] },
  { title: "8. Limitation of Liability", paragraphs: ["To the maximum extent permitted by law, CynoGuard Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.", "Our total liability for any claims arising from or related to the Service shall not exceed the amount you paid to us in the twelve months preceding the claim."] },
  { title: "9. Indemnification", paragraphs: ["You agree to defend, indemnify, and hold harmless CynoGuard Inc. and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of the Service or your violation of these Terms."] },
  { title: "10. Termination", paragraphs: ["We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.", "Upon termination, your right to use the Service will cease immediately."] },
  { title: "11. Governing Law", paragraphs: ["These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the relevant courts."] },
  { title: "12. Changes to Terms", paragraphs: ["We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. Your continued use of the Service after any changes constitutes acceptance of the new Terms."] },
  { title: "13. Contact Information", paragraphs: ["If you have any questions about these Terms of Service, please contact us at legal@cynoguard.com"] },
];

const Page = () => {
  return (
    <div className={cn("min-h-screen bg-[#020812]")}>
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className={cn("relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24")}>
        <div className={cn("mb-12 border-b border-gray-800 pb-8")}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">Legal</p>
          <h1 className={cn("text-4xl md:text-5xl font-bold text-white tracking-tight mb-4")}>Terms of Service</h1>
          <p className={cn("text-gray-500 text-sm font-mono")}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section: any, i) => (
            <section key={i} className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 hover:border-gray-700 transition-colors">
              <h2 className="text-lg font-bold text-green-400 mb-4 font-mono">{section.title}</h2>
              {section.paragraphs?.map((p: string, j: number) => (
                <p key={j} className="text-gray-400 leading-relaxed mb-3 text-sm">{p}</p>
              ))}
              {section.intro && <p className="text-gray-400 leading-relaxed mb-3 text-sm">{section.intro}</p>}
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item: string, j: number) => (
                    <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-green-500 mt-0.5 shrink-0 font-mono">›</span>{item}
                    </li>
                  ))}
                </ul>
              )}
              {section.subsections?.map((sub: any, j: number) => (
                <div key={j} className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-300 mb-2 font-mono">{sub.subtitle}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{sub.text}</p>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

