"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Globe, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import cynoguardlogo from "../../../public/images/cynogaurd-logo.png";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const products = [
    {
      name: "Bot Detection",
      href: "/bot-detection",
      icon: <Zap className="w-4 h-4" />,
      description: "Advanced AI-powered bot detection",
    },
    {
      name: "Domain Monitoring",
      href: "/domain-monitoring",
      icon: <Shield className="w-4 h-4" />,
      description: "Real-time domain threat monitoring",
    },
    {
      name: "Social Media Monitoring",
      href: "/social-media-monitoring",
      icon: <Globe className="w-4 h-4" />,
      description: "Track phishing discussions across platforms",
    },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsProductsOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image src={cynoguardlogo} alt="CynoGuard logo" width={24} height={24} />
              <span className="font-bold text-xl tracking-tight text-slate-900">
                CynoGuard
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 hover:text-slate-900">
                  Products
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform",
                      isProductsOpen && "rotate-180"
                    )}
                  />
                </button>

                {isProductsOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-white rounded-lg border border-slate-200 shadow-lg py-2">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-slate-100"
                        >
                          {product.icon}
                          <div>
                            <div className="font-medium text-slate-900">
                              {product.name}
                            </div>
                            <div className="text-xs text-slate-500">
                              {product.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/docs">Docs</Link>
              <Link href="/integrations">Integrations</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/support">Support</Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <Link
              href="/sign-up"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 flex items-center gap-1"
            >
              Sign in <ChevronRight size={16} />
            </Link>

            <Button className="bg-[#0a1120] hover:bg-[#1a253a] text-white rounded-md px-4 py-2 h-auto">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
