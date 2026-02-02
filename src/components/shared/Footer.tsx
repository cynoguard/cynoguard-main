import React from 'react';
import Link from 'next/link';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Pentagon
} from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Updates', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Pricing', href: '/pricing' }
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Manifesto', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Contact', href: '#' }
  ],
  Resources: [
    { name: 'Examples', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'Docs', href: '#' }
  ],
  Legal: [
    { name: 'Privacy', href: '/privacy-policy' },
    { name: 'Terms', href: '/terms-of-services' },
    { name: 'Security', href: '#' }
  ],
};

const socialIcons = [
  { icon: <Twitter size={20} />, href: '#' },
  { icon: <Instagram size={20} />, href: '#' },
  { icon: <Pentagon size={20} />, href: '#' }, // Using Pentagon as a Pinterest stand-in
  { icon: <Linkedin size={20} />, href: '#' },
  { icon: <span className="font-bold text-lg">TikTok</span>, href: '#' },
  { icon: <Youtube size={20} />, href: '#' },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-30">
          
          {/* Logo and Tagline Section */}
          <div className="lg:col-span-4">
            <p className="text-slate-400 text-lg mb-8 max-w-xs leading-relaxed">
              Effortlessly protect your entire online business workflow
            </p>
            
            {/* Lime Green Logo Placeholder */}
            {/* Mates please replace thiw with our actual logo */}
            <div className="mb-10">
              <div className="w-16 h-16 text-[#bef227]">
                <svg viewBox="0 0 100 100" fill="currentColor">
                   <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                </svg>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 text-slate-400">
              {socialIcons.map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href} 
                  className="hover:text-white transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-bold text-white mb-6">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-slate-500 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar (Optional addition for copyright) */}
        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
          <p>© 2026 CynoGuard Inc. All rights reserved.</p>
          <p className='flex justify-center items-center gap-1'>System status<div className='h-2 w-2 rounded-full bg-green-400'></div></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;