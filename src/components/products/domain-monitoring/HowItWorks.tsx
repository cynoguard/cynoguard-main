import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, FileSearch, Radar } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Connect your brand portfolio",
    description:
      "Add domains, trademarks, and brand keywords to define your risk perimeter.",
    icon: <Radar className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "We monitor registrations and changes",
    description:
      "Cynoguard watches global registries, DNS, SSL, and hosting indicators 24/7.",
    icon: <FileSearch className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "Get alerts with playbooks",
    description:
      "Receive prioritized alerts and step-by-step guidance for takedown and mitigation.",
    icon: <Bell className="h-5 w-5 text-blue-600" />,
  },
];

const HowItWorks = () => {
  return (
    <section className={cn("py-20 bg-white")}>
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6")}>
        <div className={cn("text-center mb-14")}>
          <h2 className={cn("text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight")}>
            How domain monitoring works
          </h2>
          <p className={cn("mt-4 text-lg text-slate-500")}>
            A streamlined workflow that keeps your team ahead of brand abuse.
          </p>
        </div>

        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6")}>
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className={cn("border-slate-200 bg-white shadow-sm rounded-xl")}
            >
              <CardHeader className={cn("pb-2")}>
                <div className={cn("flex items-center gap-3 text-slate-600")}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-900">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step.icon}
                </div>
                <CardTitle className={cn("text-xl text-slate-900")}>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className={cn("text-sm text-slate-600 leading-relaxed")}>
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
