import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from 'lucide-react';
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
    <section className={cn("py-24 bg-[#020812]")}>
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className={cn("text-center mb-20")}>
          <div className={cn("inline-block px-4 py-1.5 mb-6 border border-green-900/60 rounded-full bg-green-950/40 shadow-sm")}>
            <span className={cn("text-[12px] font-medium text-green-300/80 font-mono")}>Boost your productivity</span>
          </div>
          <h2 className={cn("text-5xl md:text-6xl font-bold text-white tracking-tight mb-8")}>
            A more effective way to <br /> track threats
          </h2>
          <p className={cn("text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed")}>
            Simple, scalable protection for your brand—automated <br />
            intelligence for startups and SMBs.
          </p>
        </div>

        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 items-end")}>
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col rounded-[2rem] shadow-sm transition-all p-4 min-h-[600px] border",
                plan.popular
                  ? "bg-[#050f08] border-green-700/50 shadow-2xl shadow-green-900/20 glow-green"
                  : "bg-gray-900/80 border-gray-800 text-white"
              )}
            >
              <CardHeader className={cn("pt-8 px-8")}>
                <div className={cn("flex justify-between items-start mb-4")}>
                  <span className={cn("text-sm font-semibold font-mono", plan.popular ? "text-green-400" : "text-gray-500")}>
                    {plan.name}
                  </span>
                  {plan.popular && (
                    <span className={cn("bg-green-950 text-[10px] text-green-400 font-bold px-3 py-1 rounded-full uppercase border border-green-800 font-mono")}>
                      Most Popular
                    </span>
                  )}
                </div>
                <div className={cn("flex items-baseline gap-1")}>
                  <CardTitle className={cn("text-5xl font-bold tracking-tighter text-white")}>{plan.price}</CardTitle>
                  <span className={cn("text-sm", plan.popular ? "text-green-400/60" : "text-gray-500")}>/monthly</span>
                </div>
              </CardHeader>

              <CardContent className={cn("px-8 grow")}>
                <Button
                  className={cn(
                    "w-full py-5 rounded-sm font-bold text-base mb-10 transition-all",
                    plan.popular
                      ? "bg-green-600 text-white hover:bg-green-500 shadow-lg shadow-green-900/40"
                      : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
                  )}
                  asChild
                >
                  <Link href="/sign-up">{plan.buttonText}</Link>
                </Button>
                <ul className={cn("space-y-4")}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={cn("flex items-center gap-4 text-[14px] font-medium")}>
                      <Check className={cn("w-4 h-4 shrink-0", plan.popular ? "text-green-500" : "text-gray-500")} strokeWidth={3} />
                      <span className={cn(plan.popular ? "text-gray-200" : "text-gray-400")}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={cn("mt-16 text-center")}>
          <p className={cn("text-gray-500 text-sm font-medium")}>
            Contact sales for enterprise packages and solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;