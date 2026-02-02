import React from 'react';
import { cn } from "@/lib/utils";

const Page = () => {
  return (
    <div className={cn("min-h-screen bg-white")}>
      <div className={cn("max-w-4xl mx-auto px-4 sm:px-6 py-24")}>
        {/* Header */}
        <div className={cn("mb-12")}>
          <h1 className={cn("text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4")}>
            Terms of Service
          </h1>
          <p className={cn("text-slate-500 text-lg")}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className={cn("prose prose-slate max-w-none")}>
          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              1. Acceptance of Terms
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              By accessing and using CynoGuard's security intelligence platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className={cn("text-slate-600 leading-relaxed")}>
              These Terms of Service ("Terms") govern your access to and use of our website, services, and applications provided by CynoGuard Inc. ("we," "our," or "us").
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              2. Description of Service
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              CynoGuard provides a security intelligence platform that offers:
            </p>
            <ul className={cn("list-disc list-inside text-slate-600 space-y-2")}>
              <li>Domain monitoring and typo-squatting detection</li>
              <li>AI-powered bot detection and prevention</li>
              <li>Social media monitoring for phishing discussions</li>
              <li>Real-time security alerts and threat intelligence</li>
              <li>API access for integration with your systems</li>
            </ul>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              3. User Accounts
            </h2>
            <h3 className={cn("text-xl font-semibold text-slate-900 mb-3")}>
              3.1 Account Creation
            </h3>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              To use our Service, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3 className={cn("text-xl font-semibold text-slate-900 mb-3")}>
              3.2 Account Security
            </h3>
            <p className={cn("text-slate-600 leading-relaxed")}>
              You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your account information.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              4. Acceptable Use
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              You agree not to use the Service:
            </p>
            <ul className={cn("list-disc list-inside text-slate-600 space-y-2")}>
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
              <li>To interfere with or circumvent the security features of the Service</li>
            </ul>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              5. Subscription and Payment
            </h2>
            <h3 className={cn("text-xl font-semibold text-slate-900 mb-3")}>
              5.1 Subscription Plans
            </h3>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              We offer various subscription plans with different features and pricing. Your subscription will automatically renew unless you cancel before the renewal date.
            </p>

            <h3 className={cn("text-xl font-semibold text-slate-900 mb-3")}>
              5.2 Payment Terms
            </h3>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              Payment is due in advance for each billing period. All fees are non-refundable except as required by law or as explicitly stated in our refund policy.
            </p>

            <h3 className={cn("text-xl font-semibold text-slate-900 mb-3")}>
              5.3 Price Changes
            </h3>
            <p className={cn("text-slate-600 leading-relaxed")}>
              We reserve the right to modify our pricing at any time. We will provide notice of any price changes at least 30 days in advance.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              6. Intellectual Property
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              The Service and its original content, features, and functionality are owned by CynoGuard Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className={cn("text-slate-600 leading-relaxed")}>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service without our prior written consent.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              7. Service Availability
            </h2>
            <p className={cn("text-slate-600 leading-relaxed")}>
              We strive to maintain high availability of our Service, but we do not guarantee uninterrupted, secure, or error-free operation. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              8. Limitation of Liability
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              To the maximum extent permitted by law, CynoGuard Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
            <p className={cn("text-slate-600 leading-relaxed")}>
              Our total liability for any claims arising from or related to the Service shall not exceed the amount you paid to us in the twelve months preceding the claim.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              9. Indemnification
            </h2>
            <p className={cn("text-slate-600 leading-relaxed")}>
              You agree to defend, indemnify, and hold harmless CynoGuard Inc. and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              10. Termination
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className={cn("text-slate-600 leading-relaxed")}>
              Upon termination, your right to use the Service will cease immediately. All provisions of these Terms that by their nature should survive termination shall survive termination.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              11. Governing Law
            </h2>
            <p className={cn("text-slate-600 leading-relaxed")}>
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              12. Changes to Terms
            </h2>
            <p className={cn("text-slate-600 leading-relaxed")}>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              13. Contact Information
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-2")}>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p className={cn("text-slate-600 leading-relaxed")}>
              <strong>Email:</strong> legal@cynoguard.com<br />
              <strong>Address:</strong> CynoGuard Inc., [Your Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
