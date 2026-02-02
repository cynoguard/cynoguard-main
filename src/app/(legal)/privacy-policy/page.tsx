import React from 'react';
import { cn } from "@/lib/utils";

const Page = () => {
  return (
    <div className={cn("min-h-screen bg-white")}>
      <div className={cn("max-w-4xl mx-auto px-4 sm:px-6 py-24")}>
        {/* Header */}
        <div className={cn("mb-12")}>
          <h1 className={cn("text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4")}>
            Privacy Policy
          </h1>
          <p className={cn("text-slate-500 text-lg")}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className={cn("prose prose-slate max-w-none")}>
          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              1. Introduction
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              CynoGuard Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our security intelligence platform and services.
            </p>
            <p className={cn("text-slate-600 leading-relaxed")}>
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              2. Information We Collect
            </h2>
            <h3 className={cn("text-xl font-semibold text-slate-900 mb-3")}>
              2.1 Information You Provide
            </h3>
            <ul className={cn("list-disc list-inside text-slate-600 space-y-2 mb-4")}>
              <li>Account information (name, email address, company name)</li>
              <li>Payment and billing information</li>
              <li>Domain names and monitoring preferences</li>
              <li>Communication data when you contact our support team</li>
            </ul>

            <h3 className={cn("text-xl font-semibold text-slate-900 mb-3")}>
              2.2 Automatically Collected Information
            </h3>
            <ul className={cn("list-disc list-inside text-slate-600 space-y-2 mb-4")}>
              <li>Usage data and analytics</li>
              <li>IP addresses and device information</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Security and threat detection data</li>
            </ul>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              3. How We Use Your Information
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              We use the collected information for various purposes:
            </p>
            <ul className={cn("list-disc list-inside text-slate-600 space-y-2")}>
              <li>To provide and maintain our security monitoring services</li>
              <li>To detect and prevent security threats and domain impersonation</li>
              <li>To process payments and manage your account</li>
              <li>To send you notifications and alerts about security events</li>
              <li>To improve our services and develop new features</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              4. Data Sharing and Disclosure
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className={cn("list-disc list-inside text-slate-600 space-y-2")}>
              <li>With service providers who assist in operating our platform</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              5. Data Security
            </h2>
            <p className={cn("text-slate-600 leading-relaxed")}>
              We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              6. Your Rights
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-4")}>
              You have the right to:
            </p>
            <ul className={cn("list-disc list-inside text-slate-600 space-y-2")}>
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              7. Cookies and Tracking Technologies
            </h2>
            <p className={cn("text-slate-600 leading-relaxed")}>
              We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              8. Children's Privacy
            </h2>
            <p className={cn("text-slate-600 leading-relaxed")}>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              9. Changes to This Privacy Policy
            </h2>
            <p className={cn("text-slate-600 leading-relaxed")}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className={cn("mb-8")}>
            <h2 className={cn("text-2xl font-bold text-slate-900 mb-4")}>
              10. Contact Us
            </h2>
            <p className={cn("text-slate-600 leading-relaxed mb-2")}>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className={cn("text-slate-600 leading-relaxed")}>
              <strong>Email:</strong> privacy@cynoguard.com<br />
              <strong>Address:</strong> CynoGuard Inc., [Your Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
