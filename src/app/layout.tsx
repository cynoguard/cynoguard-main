import type { Metadata } from "next";
import "./globals.css";
import { fontGeist, fontSans } from "../../public/fonts";


export const metadata: Metadata = {
  title:"CynoGuard - Security Agent of Startups",
  description: "Secure systems from ground",
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
          {children}
        </main>
      </body>
    </html>
  );
}
