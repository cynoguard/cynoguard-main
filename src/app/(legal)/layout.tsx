import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/NavBar";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
