"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    title: "Email us",
    detail: "support@cynoguard.io",
    href: "mailto:support@cynoguard.io",
    sub: "We reply within 4 hours",
  },
  {
    icon: Clock,
    title: "Business hours",
    detail: "Mon – Fri, 9am – 6pm UTC",
    href: null,
    sub: "Enterprise: 24/7 support",
  },
  {
    icon: MapPin,
    title: "Registered office",
    detail: "Colombo, Sri Lanka",
    href: null,
    sub: "Remote-first team globally",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — replace with real API call if needed
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full bg-white px-4 py-1.5 shadow-sm mb-8">
            <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Contact</span>
            <span className="text-sm text-slate-600">We&apos;d love to hear from you</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
            Get in touch
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Whether you have a sales question, need technical help, or just want to say hello — our team is here.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — contact info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 shrink-0">
                    <item.icon className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                        {item.detail}
                      </a>
                    ) : (
                      <p className="mt-1 font-semibold text-slate-900">{item.detail}</p>
                    )}
                    <p className="mt-0.5 text-xs text-slate-400">{item.sub}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-700 mb-2">Looking for enterprise pricing?</p>
                <p className="text-sm text-slate-500 mb-4">Tell us about your use case and we&apos;ll put together a custom package.</p>
                <Link href="/pricing" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800">
                  View pricing plans <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center rounded-2xl border border-slate-200 bg-slate-50">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-6" />
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Message sent!</h2>
                  <p className="text-slate-500 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 4 hours.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-white p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">First name</label>
                        <Input placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Last name</label>
                        <Input placeholder="Doe" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Work email</label>
                      <Input type="email" placeholder="john@company.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                      <Input placeholder="Acme Inc." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                      <Input placeholder="How can we help?" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                      <textarea
                        placeholder="Tell us what you need..."
                        required
                        rows={5}
                        className={cn(
                          "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400",
                          "focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                        )}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#0a1120] hover:bg-[#1a253a] text-white py-5 rounded-md text-base font-medium"
                    >
                      {loading ? "Sending..." : "Send message"}
                    </Button>
                    <p className="text-xs text-slate-400 text-center">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy-policy" className="underline hover:text-slate-600">Privacy Policy</Link>.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}