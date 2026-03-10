import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Core Domain Monitoring",
      "Essential Bot Detection",
      "Social Signal Basics",
      "Standard Alerts",
      "Basic support"
    ],
    buttonText: "Get started for free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    features: [
      "Advanced Domain Monitoring",
      "Enhanced Bot Intelligence",
      "Full Social Signal Suite",
      "Integrations",
      "Priority Support",
      "Centralized Dashboard",
      "API Access"
    ],
    buttonText: "Sign up now",
    popular: true,
  },
  {
    name: "Startup",
    price: "$99",
    features: [
      "Unlimited Monitoring",
      "Unlimited projects",
      "Custom Security Rules",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features"
    ],
    buttonText: "Sign up now",
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section className={cn("py-24 bg-white")}>
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className={cn("text-center mb-20")}>
          <div className={cn("inline-block px-4 py-1.5 mb-6 border border-slate-200 rounded-full bg-white shadow-sm")}>
            <span className={cn("text-[12px] font-medium text-slate-800")}>Boost your productivity</span>
          </div>
          <h2 className={cn("text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8")}>
            A more effective way to <br /> track threats
          </h2>
          <p className={cn("text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed")}>
            Simple, scalable protection for your brand—automated <br />
            intelligence for startups and SMBs.
          </p>
        </div>

        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 items-end")}>
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col border-slate-100 rounded-[2rem] shadow-sm transition-all p-4 min-h-150",
                plan.popular ? "bg-[#000000] text-white shadow-2xl" : "bg-white text-slate-900"
              )}
            >
              <CardHeader className={cn("pt-8 px-8")}>
                <div className={cn("flex justify-between items-start mb-4")}>
                  <span className={cn("text-sm font-semibold", plan.popular ? "text-slate-300" : "text-slate-500")}>
                    {plan.name}
                  </span>
                  {plan.popular && (
                    <span className={cn("bg-slate-800 text-[10px] text-emerald-400 font-bold px-3 py-1 rounded-full uppercase border border-slate-700")}>
                      Most Popular
                    </span>
                  )}
                </div>
                <div className={cn("flex items-baseline gap-1")}>
                  <CardTitle className={cn("text-5xl font-bold tracking-tighter")}>{plan.price}</CardTitle>
                  <span className={cn("text-sm", plan.popular ? "text-slate-400" : "text-slate-500")}>/monthly</span>
                </div>
              </CardHeader>

              <CardContent className={cn("px-8 grow")}>
                <Button
                  className={cn(
                    "w-full py-5 rounded-sm font-bold text-base mb-10 transition-colors",
                    plan.popular ? "bg-white text-black hover:bg-slate-100" : "bg-black text-white hover:bg-slate-800"
                  )}
                  asChild
                >
                  <Link href="/sign-up">{plan.buttonText}</Link>
                </Button>
                <ul className={cn("space-y-4")}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={cn("flex items-center gap-4 text-[14px] font-medium")}>
                      <Check className={cn("w-4 h-4 shrink-0", plan.popular ? "text-white" : "text-slate-900")} strokeWidth={3} />
                      <span className={cn(plan.popular ? "text-slate-200" : "text-slate-600")}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={cn("mt-16 text-center")}>
          <p className={cn("text-slate-400 text-sm font-medium")}>
            Contact sales for enterprise packages and solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;