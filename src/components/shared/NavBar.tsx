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
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const products = [
    {
      name: "Bot Detection",
      href: "/bot-detection",
      icon: <Zap className="w-4 h-4 text-green-500" />,
      description: "Advanced AI-powered bot detection",
    },
    {
      name: "Domain Monitoring",
      href: "/domain-monitoring",
      icon: <Shield className="w-4 h-4 text-green-500" />,
      description: "Real-time domain threat monitoring",
    },
    {
      name: "Social Media Monitoring",
      href: "/social-media-monitoring",
      icon: <Globe className="w-4 h-4 text-green-500" />,
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#020812]/95 backdrop-blur-md border-b border-green-900/30 shadow-lg shadow-black/50"
          : "bg-[#020812]/80 backdrop-blur-sm border-b border-gray-900"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">

            {/* Logo */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 group">
                <Image src={cynoguardlogo} alt="CynoGuard logo" width={24} height={24} />
                <span className="font-bold text-xl tracking-tight text-white group-hover:text-green-400 transition-colors">
                  CynoGuard
                </span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
                {/* Products dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 hover:text-white transition-colors">
                    Products
                    <ChevronDown
                      size={16}
                      className={cn("transition-transform", isProductsOpen && "rotate-180")}
                    />
                  </button>

                  {isProductsOpen && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-[#0a1120] rounded-lg border border-gray-800 shadow-xl shadow-black/50 py-2">
                        {products.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-gray-800/60 transition-colors group"
                          >
                            {product.icon}
                            <div>
                              <div className="font-medium text-white text-sm group-hover:text-green-400 transition-colors">{product.name}</div>
                              <div className="text-xs text-gray-500">{product.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side — desktop */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/sign-up"
                className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                Sign in <ChevronRight size={16} />
              </Link>
              <Button className="bg-green-600 hover:bg-green-500 text-white rounded-md px-4 py-2 h-auto shadow-lg shadow-green-900/30 transition-all hover:shadow-green-800/40">
                Contact Sales
              </Button>
            </div>

            {/* Hamburger — mobile */}
            <button
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
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
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />

          <div className="absolute top-0 left-0 right-0 bg-[#0a1120] border-b border-gray-800 shadow-xl pt-20 pb-8 px-6">
            <div className="flex flex-col gap-1">

              <button
                className="flex items-center justify-between py-3 text-base font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileProductsOpen((prev) => !prev)}
              >
                Products
                <ChevronDown
                  size={18}
                  className={cn("transition-transform text-gray-500", isMobileProductsOpen && "rotate-180")}
                />
              </button>

              {isMobileProductsOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center gap-2 py-2.5 text-sm text-gray-400 hover:text-green-400 transition-colors"
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
                  className="py-3 text-base font-medium text-gray-400 hover:text-white border-t border-gray-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-6 flex flex-col gap-3 border-t border-gray-800 mt-2">
                <Button
                  className="w-full bg-green-600 hover:bg-green-500 text-white rounded-md py-5 text-base font-medium shadow-lg shadow-green-900/30"
                  asChild
                >
                  <Link href="/sign-up" onClick={() => setIsMobileOpen(false)}>
                    Get started free
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 rounded-md py-5 text-base font-medium bg-transparent hover:bg-gray-800"
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