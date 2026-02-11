import { MessageSquare, Mail, Clock, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const channels = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our team in real-time during business hours.",
    action: "Start chat",
    href: "#",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message and hear back within 4 hours.",
    action: "Send email",
    href: "mailto:support@cynoguard.com",
    primary: false,
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Ask questions and share solutions with other CynoGuard users.",
    action: "Visit forum",
    href: "#",
    primary: false,
  },
]

const stats = [
  { icon: Clock, label: "Avg. response under 4h" },
  { icon: Shield, label: "24/7 enterprise support" },
  { icon: Users, label: "98% satisfaction score" },
]

export function SupportTicketCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
            Still need help?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-400 leading-relaxed">
            Choose the channel that works best for you. Our team is ready to assist.
          </p>
        </div>

        {/* Contact Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="rounded-xl border border-slate-200 bg-white p-7 flex flex-col items-center text-center"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  channel.primary
                    ? "bg-[#0a1120] text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                <channel.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {channel.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {channel.description}
              </p>
              <Button
                className={`mt-6 rounded-md px-6 py-4 text-sm font-medium w-full ${
                  channel.primary
                    ? "bg-[#0a1120] hover:bg-[#1a253a] text-white"
                    : "bg-transparent border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
                asChild
              >
                <a href={channel.href}>{channel.action}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2.5 text-sm text-slate-400"
            >
              <stat.icon className="h-4 w-4 text-slate-300" />
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
