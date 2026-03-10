import React from 'react';
import { cn } from "@/lib/utils";

const Page = () => {
  return (
    <div className={cn("min-h-screen bg-[#020812]")}>
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className={cn("relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24")}>
        <div className={cn("mb-12 border-b border-gray-800 pb-8")}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// Legal</p>
          <h1 className={cn("text-4xl md:text-5xl font-bold text-white tracking-tight mb-4")}>Privacy Policy</h1>
          <p className={cn("text-gray-500 text-sm font-mono")}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-10">
          {[
            {
              title: "1. Introduction",
              content: null,
              paragraphs: [
                "CynoGuard Inc. (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our security intelligence platform and services.",
                "By using our services, you agree to the collection and use of information in accordance with this policy."
              ]
            },
            {
              title: "2. Information We Collect",
              subsections: [
                {
                  subtitle: "2.1 Information You Provide",
                  items: ["Account information (name, email address, company name)", "Payment and billing information", "Domain names and monitoring preferences", "Communication data when you contact our support team"]
                },
                {
                  subtitle: "2.2 Automatically Collected Information",
                  items: ["Usage data and analytics", "IP addresses and device information", "Cookies and similar tracking technologies", "Security and threat detection data"]
                }
              ]
            },
            {
              title: "3. How We Use Your Information",
              intro: "We use the collected information for various purposes:",
              items: ["To provide and maintain our security monitoring services", "To detect and prevent security threats and domain impersonation", "To process payments and manage your account", "To send you notifications and alerts about security events", "To improve our services and develop new features", "To comply with legal obligations"]
            },
            {
              title: "4. Data Sharing and Disclosure",
              intro: "We do not sell your personal information. We may share your information only in the following circumstances:",
              items: ["With service providers who assist in operating our platform", "When required by law or to protect our rights", "In connection with a business transfer or merger", "With your explicit consent"]
            },
            {
              title: "5. Data Security",
              paragraphs: ["We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."]
            },
            {
              title: "6. Your Rights",
              intro: "You have the right to:",
              items: ["Access and receive a copy of your personal data", "Rectify inaccurate or incomplete data", "Request deletion of your personal data", "Object to processing of your personal data", "Request restriction of processing", "Data portability"]
            },
            {
              title: "7. Cookies and Tracking Technologies",
              paragraphs: ["We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."]
            },
            {
              title: "8. Children's Privacy",
              paragraphs: ["Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children."]
            },
            {
              title: "9. Changes to This Privacy Policy",
              paragraphs: ["We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date."]
            },
            {
              title: "10. Contact Us",
              paragraphs: ["If you have any questions about this Privacy Policy, please contact us at privacy@cynoguard.com"]
            },
          ].map((section: any, i) => (
            <section key={i} className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 hover:border-gray-700 transition-colors">
              <h2 className="text-xl font-bold text-white mb-4 font-mono text-green-400">{section.title}</h2>
              {section.paragraphs?.map((p: string, j: number) => (
                <p key={j} className="text-gray-400 leading-relaxed mb-3">{p}</p>
              ))}
              {section.intro && <p className="text-gray-400 leading-relaxed mb-3">{section.intro}</p>}
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item: string, j: number) => (
                    <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-green-500 mt-1 shrink-0 font-mono">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.subsections?.map((sub: any, j: number) => (
                <div key={j} className="mb-4">
                  <h3 className="text-base font-semibold text-gray-300 mb-2 font-mono">{sub.subtitle}</h3>
                  <ul className="space-y-2">
                    {sub.items.map((item: string, k: number) => (
                      <li key={k} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-green-500 mt-1 shrink-0 font-mono">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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