import { MessageSquare, Mail, Clock, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const channels = [
  { icon: MessageSquare, title: "Live Chat", description: "Chat with our team in real-time during business hours.", action: "Start chat", href: "/contact", primary: true },
  { icon: Mail, title: "Email Support", description: "Send us a detailed message and hear back within 4 hours.", action: "Send email", href: "mailto:support@cynoguard.io", primary: false },
  { icon: Users, title: "Community Forum", description: "Ask questions and share solutions with other CynoGuard users.", action: "Visit forum", href: "/blog", primary: false },
]

const stats = [
  { icon: Clock, label: "Avg. response under 4h" },
  { icon: Shield, label: "24/7 enterprise support" },
  { icon: Users, label: "98% satisfaction score" },
]

export function SupportTicketCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#020812] border-t border-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(34,197,94,0.06),transparent)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// Contact</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white text-balance">Still need help?</h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">Choose the channel that works best for you. Our team is ready to assist.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {channels.map((channel) => (
            <div key={channel.title} className={`rounded-xl border p-7 flex flex-col items-center text-center transition-all hover:-translate-y-0.5 ${channel.primary ? "border-green-800 bg-green-950/20 hover:border-green-700" : "border-gray-800 bg-gray-900/60 hover:border-gray-700"}`}>
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${channel.primary ? "bg-green-600 text-white shadow-lg shadow-green-900/40" : "bg-gray-800 border border-gray-700 text-gray-400"}`}>
                <channel.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{channel.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{channel.description}</p>
              <Button className={`mt-6 rounded-md px-6 py-4 text-sm font-medium w-full ${channel.primary ? "bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/30" : "bg-transparent border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white"}`} asChild>
                <a href={channel.href}>{channel.action}</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5 text-sm text-gray-500 font-mono">
              <stat.icon className="h-4 w-4 text-green-500" />
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}