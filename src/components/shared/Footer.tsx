import Link from "next/link";
import { Twitter, Instagram, Linkedin, Youtube, Terminal } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "/#features" },
    { name: "Integrations", href: "/integrations" },
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs" },
    { name: "Blog", href: "/blog" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Docs", href: "/docs" },
    { name: "Integrations", href: "/integrations" },
    { name: "Support", href: "/support" },
    { name: "Blog", href: "/blog" },
  ],
  Legal: [
    { name: "Privacy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms-of-services" },
  ],
};

const socialIcons = [
  { icon: Twitter, href: "https://twitter.com/cynoguard", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/cynoguard", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/cynoguard", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@cynoguard", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#020812] text-white py-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-green-500" />
              <span className="font-bold text-lg text-white">CynoGuard</span>
            </div>
            <p className="text-gray-500 text-sm mb-8 max-w-xs leading-relaxed">
              Effortlessly protect your entire online business workflow with AI-powered security intelligence.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 text-gray-600">
              {socialIcons.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-green-950/30 border border-transparent hover:border-green-900/40"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-bold mb-6 text-gray-300 text-sm uppercase tracking-wider font-mono text-[11px]">{title}</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-green-400 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-700 font-mono">
          <p>© 2026 CynoGuard Inc. All rights reserved.</p>
          <p className="flex items-center gap-2">
            System status
            <span className="flex items-center gap-1 text-green-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Operational
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}