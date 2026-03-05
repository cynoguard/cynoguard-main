import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CynoGuard – Security Intelligence for SMBs & Startups",
  description:
    "Protect your business brand with AI variant domain monitoring, real-time bot verification, and Reddit/X phishing alerts.",

  keywords: [
    "typo squat detection",
    "scam domain alerts",
    "bot detection javascript snippet",
    "openai domain generator",
    "smb phishing monitoring",
  ],

//   openGraph: {
//     title: "CynoGuard – Stop Domain Impersonation & Bots",
//     description:
//       "Early warning platform built on Next.js and Fastify with PostgreSQL for serious SMB protection.",
//     url: "https://cynoguard.com",
//     siteName: "CynoGuard Landing",
//     type: "website",
//     images: [
//       {
//         url: "/og-landing.png",  //have to change
//         width: 1200,
//         height: 630,
//         alt: "CynoGuard Landing Preview",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "CynoGuard Security",
//     description: "Security infrastructure made simple.",
//     images: ["/og-landing.png"],
//   },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <div>
          <Navbar/>
        {children}
          <Footer/>
     </div>

  );
}
