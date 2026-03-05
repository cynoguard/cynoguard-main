import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/NavBar"
import { SupportCategories } from "@/components/support/SupportCategories"
import { SupportFAQ } from "@/components/support/SupportFAQ"
import { SupportHero } from "@/components/support/SupportHero"
import { SupportTicketCTA } from "@/components/support/SupportTicketCTA"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Help Center & Support",
  description:
    "Find answers, explore guides, and get in touch with the CynoGuard support team. Browse FAQs, API docs, billing help, and more.",
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SupportHero />
      <SupportCategories />
      <SupportFAQ />
      <SupportTicketCTA />
      <Footer />
    </main>
  )
}
