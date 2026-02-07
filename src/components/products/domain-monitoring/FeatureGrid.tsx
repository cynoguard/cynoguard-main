import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  AlertTriangle,
  Fingerprint,
  Globe,
  Mail,
  Network,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Typosquatting & lookalikes",
    description: "Detect newly registered domains that mimic your brand name and assets.",
    header: (
      <div className="flex flex-1 w-full h-full rounded-xl bg-slate-50 border border-slate-100 overflow-hidden p-5">
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>New registrations</span>
            <span className="text-blue-600 font-medium">Last 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-900">cyn0guard.com</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
              suspicious
            </span>
          </div>
          <div className="h-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-900">cynoguard-secure.com</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600 border border-red-200">
              high risk
            </span>
          </div>
        </div>
      </div>
    ),
    icon: <Shield className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "DNS + SSL change tracking",
    description: "Monitor name server changes, MX updates, and suspicious certificates.",
    header: (
      <div className="flex flex-1 w-full h-full rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono">
        <div className="space-y-2 text-[11px]">
          <div className="text-emerald-400">ns1.domainhost.net -&gt; ns1.fastedge.net</div>
          <div className="text-emerald-400">MX record added: mx.phishersuite.io</div>
          <div className="text-amber-300">SSL issuer mismatch detected</div>
          <div className="text-slate-400">zone update in progress...</div>
        </div>
      </div>
    ),
    icon: <Network className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Phishing kit fingerprints",
    description: "Identify reused kits and infrastructure across campaigns in seconds.",
    header: (
      <div className="flex flex-1 w-full h-full rounded-xl bg-slate-50 border border-slate-100 p-5">
        <div className="flex items-center justify-between mb-4 text-[11px] text-slate-500">
          <span>Fingerprint score</span>
          <span className="text-emerald-600 font-medium">92% match</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["HTML", "JS", "CSS", "Favicon", "Paths", "Form"].map((label) => (
            <div
              key={label}
              className="text-[10px] px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-center"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    icon: <Fingerprint className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Alert routing & playbooks",
    description: "Send alerts to Slack, SIEMs, or ticketing tools with clear instructions.",
    header: (
      <div className="flex flex-1 w-full h-full rounded-xl bg-slate-50 border border-slate-100 p-5">
        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3">
          <span>Routing rules</span>
          <span className="text-blue-600 font-medium">3 active</span>
        </div>
        <div className="space-y-2">
          {["Slack #security-alerts", "SIEM: Splunk", "Ticket: Jira SOC"].map((item) => (
            <div key={item} className="text-xs text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2">
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    icon: <AlertTriangle className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Global coverage",
    description: "Track gTLD, ccTLD, and IDN registrations across global registries.",
    header: (
      <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br from-blue-50/50 to-slate-50 border border-slate-100 p-5 items-center justify-center">
        <div className="flex items-center gap-3 text-xs text-slate-600">
          <Globe className="h-4 w-4 text-blue-600" />
          Coverage: 1,200+ registries
        </div>
      </div>
    ),
    icon: <Globe className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Executive-ready reports",
    description: "Weekly summaries with risk scoring, actions taken, and remediation status.",
    header: (
      <div className="flex flex-1 w-full h-full rounded-xl bg-slate-50 border border-slate-100 p-5">
        <div className="flex items-center justify-between mb-3 text-[11px] text-slate-500">
          <span>Weekly risk brief</span>
          <span className="text-emerald-600 font-medium">Delivered</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-700">
          <Mail className="h-4 w-4 text-blue-600" />
          14 domains actioned - 2 takedowns
        </div>
      </div>
    ),
    icon: <Mail className="h-4 w-4 text-blue-600" />,
  },
];

const FeatureGrid = () => {
  return (
    <section className={cn("py-24 bg-slate-50/70 border-y border-slate-100")}>
      <div className={cn("max-w-6xl mx-auto px-4")}>
      <div className={cn("text-center mb-16")}>
        <h2 className={cn("text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight")}>
          Everything your brand needs to stay ahead
        </h2>
        <p className={cn("mt-4 text-lg text-slate-500")}>
          Domain monitoring built for security teams that need speed, clarity, and proof of action.
        </p>
      </div>

      <BentoGrid className={cn("mx-auto")}>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={cn(i === 0 || i === 3 ? "md:col-span-2" : "")}
          />
        ))}
      </BentoGrid>
      </div>
    </section>
  );
};

export default FeatureGrid;
