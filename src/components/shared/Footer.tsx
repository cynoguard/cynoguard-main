import Link from "next/link";
import { Twitter, Instagram, Linkedin, Youtube, Pentagon } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Updates", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Pricing", href: "/pricing" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Resources: [
    { name: "Docs", href: "#" },
    { name: "Community", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Support", href: "/support" }, // ✅ support portal
  ],
  Legal: [
    { name: "Privacy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms-of-services" },
  ],
};

const socialIcons = [
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Pentagon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left */}
          <div className="lg:col-span-4">
            <p className="text-slate-400 text-lg mb-8 max-w-xs leading-relaxed">
              Effortlessly protect your entire online business workflow
            </p>

            <div className="mb-10 w-16 h-16 text-[#bef227]">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
              </svg>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-6 text-slate-400">
              {socialIcons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link key={i} href={item.href} className="hover:text-white transition-colors">
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-bold mb-6">{title}</h3>
                <ul className="space-y-3 text-sm text-slate-500">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-white transition-colors">
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
        <div className="mt-16 pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2026 CynoGuard Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            System status
            <span className="w-2 h-2 bg-green-400 rounded-full" />
          </p>
        </div>
      </div>
    </footer>
  );
}


