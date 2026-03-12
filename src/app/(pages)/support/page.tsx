import { SupportCategories } from "@/components/support/SupportCategories";
import { SupportFAQ } from "@/components/support/SupportFAQ";
import { SupportHero } from "@/components/support/SupportHero";
import { SupportTicketCTA } from "@/components/support/SupportTicketCTA";
import { SignupCTA } from "@/components/landing/SignupCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center & Support | CynoGuard",
  description:
    "Find answers, explore guides, and get in touch with the CynoGuard support team.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#020812]">
      <SupportHero />
      <SupportCategories />
      <SupportFAQ />
      <SupportTicketCTA />
      <SignupCTA />
    </main>
  );
}