import React from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button"; 
import Image from 'next/image';
import cynoguardlogo from "../../../public/images/cynogaurd-logo.png"
const Navbar = () => {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          
          {/* Left Side: Logo and Main Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              {/* CynoGuard Logo Placeholder */}
              <div className="w-6 h-6 bg-lime-400 rounded-sm flex items-center justify-center">
               <Image src={cynoguardlogo} alt="cynoguard logo"/>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                CynoGuard
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link href="/products" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                Products <ChevronDown size={16} />
              </Link>
              <Link href="/docs" className="hover:text-slate-900 transition-colors">
                Docs
              </Link>
              <Link href="/integrations" className="hover:text-slate-900 transition-colors">
                Integrations
              </Link>
              <Link href="/blog" className="hover:text-slate-900 transition-colors">
                Blog
              </Link>
              <Link href="/risk-score" className="hover:text-slate-900 transition-colors">
                Risk Score
              </Link>
              <Link href="/pricing" className="hover:text-slate-900 transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          {/* Right Side: Auth Actions */}
          <div className="flex items-center gap-6">
            <Link 
              href="/signin" 
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
