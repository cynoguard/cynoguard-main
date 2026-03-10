import { AlertTriangle, Fingerprint, Globe, Mail, Network, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { title: "Registry & zone visibility", description: "Watch gTLD, ccTLD, and IDN registrations with realtime zone-file diffs.", icon: <Globe className="h-5 w-5 text-green-500" /> },
  { title: "Typosquats & lookalikes", description: "Detect homoglyphs, edit-distance variants, and brand spoof domains early.", icon: <Shield className="h-5 w-5 text-green-500" /> },
  { title: "DNS + SSL change tracking", description: "Flag name server swaps, MX changes, and suspicious certificate issues.", icon: <Network className="h-5 w-5 text-green-500" /> },
  { title: "Hosting & IP clustering", description: "Group related infrastructure to identify shared hosts and attacker kits.", icon: <AlertTriangle className="h-5 w-5 text-green-500" /> },
  { title: "Takedown workflows", description: "Generate evidence packs, WHOIS history, and registrar actions in minutes.", icon: <Mail className="h-5 w-5 text-green-500" /> },
  { title: "Risk scoring & reporting", description: "Prioritize critical domains with severity scoring and weekly summaries.", icon: <Fingerprint className="h-5 w-5 text-green-500" /> },
];

const FeatureGrid = () => {
  return (
    <section className={cn("py-24 bg-[#020812] border-t border-gray-900")}>
      <div className={cn("max-w-6xl mx-auto px-4")}>
        <div className={cn("text-center max-w-3xl mx-auto mb-14")}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// Capabilities</p>
          <h2 className={cn("mt-2 text-3xl md:text-4xl font-semibold text-white tracking-tight")}>
            A deep dive into domain monitoring, built for security teams
          </h2>
          <p className={cn("mt-4 text-lg text-gray-400")}>
            Replace manual searches with a dedicated intelligence layer. Automations surface the highest-risk signals so your analysts can focus on response.
          </p>
        </div>
        <div className={cn("grid gap-5 md:grid-cols-2 lg:grid-cols-3")}>
          {items.map((item) => (
            <div key={item.title} className={cn("rounded-2xl border border-gray-800 bg-gray-900/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-green-800 hover:shadow-lg hover:shadow-green-900/10 group")}>
              <div className={cn("mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-950/40 border border-green-900/40 group-hover:border-green-700 transition-colors")}>
                {item.icon}
              </div>
              <h3 className={cn("text-base font-semibold text-white group-hover:text-green-400 transition-colors")}>{item.title}</h3>
              <p className={cn("mt-2 text-sm leading-relaxed text-gray-500")}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;