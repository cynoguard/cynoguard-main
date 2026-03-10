"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Clock, ArrowRight, CheckCircle, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const contactInfo = [
  { icon: Mail, title: "Email us", detail: "support@cynoguard.io", href: "mailto:support@cynoguard.io", sub: "We reply within 4 hours" },
  { icon: Clock, title: "Business hours", detail: "Mon – Fri, 9am – 6pm UTC", href: null, sub: "Enterprise: 24/7 support" },
  { icon: MapPin, title: "Registered office", detail: "Colombo, Sri Lanka", href: null, sub: "Remote-first team globally" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  }

  return (
    <div className="bg-[#020812]">

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-36 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(34,197,94,0.07),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 border border-green-900/60 rounded-full bg-green-950/40 px-4 py-1.5 shadow-sm mb-8">
            <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Contact</span>
            <span className="text-sm text-green-300/70">We&apos;d love to hear from you</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">Get in touch</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Whether you have a sales question, need technical help, or just want to say hello — our team is here.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-gray-800 bg-gray-900/60 p-5 hover:border-green-800 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-950/40 border border-green-900/40 shrink-0">
                    <item.icon className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 font-mono">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 font-semibold text-white hover:text-green-400 transition-colors">{item.detail}</a>
                    ) : (
                      <p className="mt-1 font-semibold text-white">{item.detail}</p>
                    )}
                    <p className="mt-0.5 text-xs text-gray-500">{item.sub}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-green-500" />
                  <p className="text-sm font-semibold text-gray-200">Looking for enterprise pricing?</p>
                </div>
                <p className="text-sm text-gray-500 mb-4">Tell us about your use case and we&apos;ll put together a custom package.</p>
                <Link href="/pricing" className="inline-flex items-center gap-1 text-sm font-medium text-green-500 hover:text-green-400 transition-colors">
                  View pricing plans <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center rounded-2xl border border-green-900/40 bg-green-950/20">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-6" />
                  <h2 className="text-2xl font-bold text-white mb-3">Message sent!</h2>
                  <p className="text-gray-400 max-w-sm">Thank you for reaching out. Our team will get back to you within 4 hours.</p>
                </div>
              ) : (
                <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-8 relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-green-500/40" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-green-500/40" />

                  <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">First name</label>
                        <Input placeholder="John" required className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 rounded-lg h-11" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Last name</label>
                        <Input placeholder="Doe" required className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 rounded-lg h-11" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Work email</label>
                      <Input type="email" placeholder="john@company.com" required className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 rounded-lg h-11" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Company</label>
                      <Input placeholder="Acme Inc." className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 rounded-lg h-11" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Subject</label>
                      <Input placeholder="How can we help?" required className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 rounded-lg h-11" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
                      <textarea
                        placeholder="Tell us what you need..."
                        required rows={5}
                        className="w-full rounded-lg border border-gray-700 bg-gray-800/60 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-green-600 transition-all resize-none"
                      />
                    </div>
                    <Button type="submit" disabled={loading}
                      className="w-full bg-green-600 hover:bg-green-500 text-white py-5 rounded-md text-base font-medium shadow-lg shadow-green-900/40">
                      {loading ? "Sending..." : "Send message"}
                    </Button>
                    <p className="text-xs text-gray-600 text-center font-mono">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy-policy" className="underline hover:text-gray-400">Privacy Policy</Link>.
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