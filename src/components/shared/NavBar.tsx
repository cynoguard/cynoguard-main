"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Globe, Menu, Shield, X, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import cynoguardlogo from "../../../public/images/cynogaurd-logo.png";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
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

  const navLinks = [
    { label: "Docs", href: "/docs" },
    { label: "Integrations", href: "/integrations" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "Support", href: "/support" },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsProductsOpen(false), 150);
  };

  // Close mobile menu on route change / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
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
                {/* Products dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 hover:text-slate-900">
                    Products
                    <ChevronDown
                      size={16}
                      className={cn("transition-transform", isProductsOpen && "rotate-180")}
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
                              <div className="font-medium text-slate-900">{product.name}</div>
                              <div className="text-xs text-slate-500">{product.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side — desktop */}
            <div className="hidden md:flex items-center gap-6">
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

            {/* Hamburger — mobile */}
            <button
              className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-0 left-0 right-0 bg-white border-b border-slate-200 shadow-xl pt-20 pb-8 px-6">
            <div className="flex flex-col gap-1">

              {/* Products accordion */}
              <button
                className="flex items-center justify-between py-3 text-base font-medium text-slate-700 hover:text-slate-900"
                onClick={() => setIsMobileProductsOpen((prev) => !prev)}
              >
                Products
                <ChevronDown
                  size={18}
                  className={cn("transition-transform text-slate-400", isMobileProductsOpen && "rotate-180")}
                />
              </button>

              {isMobileProductsOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center gap-2 py-2.5 text-sm text-slate-600 hover:text-slate-900"
                    >
                      {product.icon}
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="py-3 text-base font-medium text-slate-700 hover:text-slate-900 border-t border-slate-100"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-6 flex flex-col gap-3 border-t border-slate-100 mt-2">
                <Button
                  className="w-full bg-[#0a1120] hover:bg-[#1a253a] text-white rounded-md py-5 text-base font-medium"
                  asChild
                >
                  <Link href="/sign-up" onClick={() => setIsMobileOpen(false)}>
                    Get started free
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-slate-200 text-slate-700 rounded-md py-5 text-base font-medium bg-transparent"
                  asChild
                >
                  <Link href="/sign-up" onClick={() => setIsMobileOpen(false)}>
                    Sign in
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;