import type { Metadata } from "next";
import "./globals.css";
import { fontGeist, fontSans } from "../../public/fonts";
import Navbar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: {
    default: "CynoGuard – Business Security Console",
    template: "%s | CynoGuard",
  },

  description:
    "AI-powered security console protecting SMB and startup domains from impersonation, bots, and social phishing signals.",

  keywords: [
    "smb cybersecurity console",
    "startup domain protection",
    "brand security platform",
    "fastify postgres security",
    "bot signal verification",
  ],

  // openGraph: {
  //   title: "CynoGuard – Business Security Console",
  //   description:
  //     "Unified command center to detect scam domains, automation abuse, and public phishing discussions.",
  //   siteName: "CynoGuard",
  //   type: "website",
  //   locale: "en_US",
  //   images: ["/og-root.png"], // have to change
  // },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "CynoGuard Console",
  //   description: "Security intelligence for busy SMB teams.",
  //   images: ["/og-root.png"], // have to change
  // },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://cynoguard.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         <main className={`${fontSans.className} ${fontGeist.className} w-full`}>
          <Navbar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
