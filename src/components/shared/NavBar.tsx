"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Globe, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import cynoguardlogo from "../../../public/images/cynogaurd-logo.png";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      name: "Bot Detection",
      href: "/bot-detection",
      icon: <Zap className="w-4 h-4" />,
      description: "Advanced AI-powered bot detection"
    },
    {
      name: "Domain Monitoring",
      href: "/domain-monitoring",
      icon: <Shield className="w-4 h-4" />,
      description: "Real-time domain threat monitoring"
    },
    {
      name: "Social Media Monitoring",
      href: "/social-media-monitoring",
      icon: <Globe className="w-4 h-4" />,
      description: "Track phishing discussions across platforms"
    },
  ];

  const handleMouseEnter = () => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow cursor movement
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 150);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 z-50")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          
          {/* Left Side: Logo and Main Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              {/* CynoGuard Logo Placeholder */}
              <div className="w-6 h-6 bg-lime-400 rounded-sm flex items-center justify-center">
               <Image src={cynoguardlogo} alt="cynoguard logo" width={24} height={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                CynoGuard
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              {/* Products Dropdown */}
              <div 
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                  Products <ChevronDown size={16} className={cn("transition-transform duration-200", isProductsOpen && "rotate-180")} />
                </button>
                
                {/* Dropdown Menu */}
                {isProductsOpen && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-64 z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-lg border border-slate-200 shadow-lg py-2">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-slate-100 transition-colors group"
                        >
                          <div className="mt-0.5 text-slate-600 group-hover:text-slate-900 transition-colors">
                            {product.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-slate-900 group-hover:text-slate-950 transition-colors">
                              {product.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5">
                              {product.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/docs" className="hover:text-slate-900 transition-colors">
                Docs
              </Link>
              <Link href="/integrations" className="hover:text-slate-900 transition-colors">
                Integrations
              </Link>
              <Link href="/blog" className="hover:text-slate-900 transition-colors">
                Blog
              </Link>
              <Link href="/pricing" className="hover:text-slate-900 transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          {/* Right Side: Auth Actions */}
          <div className="flex items-center gap-6">
            <Link 
              href="/sign-up" 
              className="text-sm font-medium text-slate-700 hover:text-slate-900 flex items-center gap-1"
            >
              Sign in <ChevronRight size={16} />
            </Link>
            
            <Button className="bg-[#0a1120] hover:bg-[#1a253a] text-white rounded-md px-4 py-2 h-auto font-medium">
              Contact Sales
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;