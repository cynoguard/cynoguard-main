import { AlertTriangle, Fingerprint, Globe, Mail, Network, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Registry & zone visibility",
    description:
      "Watch gTLD, ccTLD, and IDN registrations with realtime zone-file diffs.",
    icon: <Globe className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "Typosquats & lookalikes",
    description:
      "Detect homoglyphs, edit-distance variants, and brand spoof domains early.",
    icon: <Shield className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "DNS + SSL change tracking",
    description:
      "Flag name server swaps, MX changes, and suspicious certificate issues.",
    icon: <Network className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "Hosting & IP clustering",
    description:
      "Group related infrastructure to identify shared hosts and attacker kits.",
    icon: <AlertTriangle className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "Takedown workflows",
    description:
      "Generate evidence packs, WHOIS history, and registrar actions in minutes.",
    icon: <Mail className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "Risk scoring & reporting",
    description:
      "Prioritize critical domains with severity scoring and weekly summaries.",
    icon: <Fingerprint className="h-5 w-5 text-blue-600" />,
  },
];

const FeatureGrid = () => {
  return (
    <section className={cn("py-24 bg-white border-y border-slate-100")}>
      <div className={cn("max-w-6xl mx-auto px-4")}>
        <div className={cn("text-center max-w-3xl mx-auto mb-14")}>
          <span className={cn("text-xs tracking-[0.2em] text-slate-400 font-semibold")}>
            CAPABILITIES
          </span>
          <h2
            className={cn(
              "mt-4 text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight"
            )}
          >
            A Stripe-style deep dive into domain monitoring, built for security teams
          </h2>
          <p className={cn("mt-4 text-lg text-slate-500")}>
            Replace manual searches with a dedicated intelligence layer. Automations surface the
            highest-risk signals so your analysts can focus on response.
          </p>
        </div>

        <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3")}>
          {items.map((item) => (
            <div
              key={item.title}
              className={cn(
                "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
                "transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              )}
            >
              <div className={cn("mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50")}>
                {item.icon}
              </div>
              <h3 className={cn("text-base font-semibold text-slate-900")}>{item.title}</h3>
              <p className={cn("mt-2 text-sm leading-relaxed text-slate-600")}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
