import { SignupForm } from "@/components/signup-form"
import { Shield } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden p-6 md:p-10 bg-[#020812]">
      <div className="absolute inset-0 bg-grid-dark opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(34,197,94,0.07),transparent)] pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-green-900/10 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-900/10 blur-3xl animate-pulse-slow delay-1000" />
      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-green-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-green-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex w-full max-w-sm flex-col gap-8">
        <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-700">
          <Link href="/" className="group flex items-center gap-3 self-center transition-transform hover:scale-105">
            <div className="bg-green-600/20 border border-green-700/50 flex size-10 items-center justify-center rounded-xl shadow-lg shadow-green-900/20 transition-all group-hover:bg-green-600/30">
              <Shield className="size-5 text-green-500" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">CynoGuard</span>
          </Link>
          <p className="text-sm text-gray-500 text-center max-w-xs font-mono">
            Secure your business with enterprise-grade protection
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}