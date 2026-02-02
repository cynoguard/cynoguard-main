"use client"

import { LoginForm } from "@/components/login-form"
import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link"

const Page = () => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden p-6 md:p-10">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/3 blur-3xl opacity-30" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 flex w-full max-w-sm flex-col gap-8">
        {/* Enhanced Logo/Branding */}
        <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-700">
          <Link 
            href="/" 
            className="group flex items-center gap-3 self-center transition-transform hover:scale-105"
          >
            <div className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-xl shadow-lg shadow-primary/20 transition-all group-hover:shadow-xl group-hover:shadow-primary/30">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Cynoguard Inc.</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center max-w-xs">
            Secure your business with enterprise-grade protection
          </p>
        </div>

        {/* Login Form */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Page