"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { auth } from "@/lib/firebase"
import { cn } from "@/lib/utils"
import axios from "axios"
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, User } from "firebase/auth"
import { Eye, EyeOff, Lock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Spinner } from "./ui/spinner"

// Define common payload interface
interface AuthPayload {
  firebaseId: string;
  email: string | null;
  firstName: string;
  lastName: string;
  role: string;
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const [organizations, setOrganizations] = useState<any[]>([])
  const [showPassword, setShowPassword] = useState(false)

  // --- UNIFIED BACKEND SYNC LOGIC ---
  const syncWithBackend = async (user: User, customPayload?: Partial<AuthPayload>) => {
    const token = await user.getIdToken();
    
    const payload: AuthPayload = {
      firebaseId: user.uid,
      email: user.email,
      firstName: customPayload?.firstName || user.displayName?.split(" ")[0] || "",
      lastName: customPayload?.lastName || user.displayName?.split(" ").slice(1).join(" ") || "",
      role: "SUPER_ADMIN",
      ...customPayload
    };

    const response = await axios.post(
      "http://127.0.0.1:4000/api/auth/sync",
      payload,
      {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.status === "success") {
      const orgs = response.data.data?.organizations || [];
      if (orgs.length > 0) {
        setOrganizations(orgs);
      } else {
        const safeToken = response.data.data.token;
        // Consistent with signup redirect
        window.location.href = `http://localhost:3000/onboarding/${safeToken}/setup-organization`;
      }
    } else {
      throw new Error("Authentication sync failed");
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    const formData = new FormData(e.currentTarget)
    const email = String(formData.get("email")).trim()
    const password = String(formData.get("password"))

    if (email && password) {
      setLoading(true)
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        await syncWithBackend(userCredential.user);
      } catch (err: any) {
        console.error(err);
        setError(err?.message || "Invalid credentials or server error.")
      } finally {
        setLoading(false)
      }
    } else {
      setError("Please fill in all fields")
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError("")
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      await syncWithBackend(userCredential.user)
    } catch (err: any) {
      console.error(err);
      setError("Google sign-in failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleGitHubSignIn = async () => {
    setLoading(true)
    setError("")
    try {
      const provider = new GithubAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      await syncWithBackend(userCredential.user)
    } catch (err: any) {
      console.error(err);
      setError("GitHub sign-in failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Organization Selection Modal */}
      <Dialog open={organizations.length > 0} onOpenChange={() => setOrganizations([])}>
        <DialogContent className="bg-gray-900 border border-gray-800 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">Select Organization</DialogTitle>
            <DialogDescription className="text-gray-400">
              Choose the organization you want to access.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-3 max-h-[400px] overflow-y-auto">
            {organizations.map((org: any) => (
              <div
                key={org.id}
                onClick={() => {
                  if (org.is_onboarded) {
                    window.location.href = `http://localhost:3000/auth-bridge?token=${org.auth.custom_token}&org=${org.name.trim().toLowerCase()}`
                  } else {
                    window.location.href = `http://localhost:3000/onboarding/${org.session_token}/setup-organization`
                  }
                }}
                className="group p-4 border border-gray-700 rounded-xl cursor-pointer transition-all hover:bg-gray-800 hover:border-green-500"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">{org.name}</h3>
                  {!org.is_onboarded && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                      Setup required
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <div className="relative rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm shadow-2xl shadow-black/50 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />
        
        <div className="p-6 text-center border-b border-gray-800">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-green-600/20 border border-green-700/50 flex items-center justify-center">
              <Lock className="w-4 h-4 text-green-500" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">Welcome back</h2>
          <p className="text-sm text-gray-500 mt-1">Sign in to your CynoGuard account</p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleGitHubSignIn}
                  type="button"
                  className="flex items-center justify-center gap-2 h-11 rounded-lg border border-gray-700 bg-gray-800/60 text-gray-300 hover:border-gray-600 hover:bg-gray-800 hover:text-white transition-all text-sm font-medium"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="flex items-center justify-center gap-2 h-11 rounded-lg border border-gray-700 bg-gray-800/60 text-gray-300 hover:border-gray-600 hover:bg-gray-800 hover:text-white transition-all text-sm font-medium"
                >
                  <GoogleIcon className="size-4" />
                  Google
                </button>
              </Field>

              <FieldSeparator className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">
                or continue with email
              </FieldSeparator>

              <Field>
                <FieldLabel htmlFor="email" className="text-gray-300 text-sm font-medium">Email</FieldLabel>
                <Input
                  name="email" id="email" type="email"
                  placeholder="you@company.com" required
                  className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 focus:ring-green-600/20 rounded-lg h-11"
                />
              </Field>

              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password" className="text-gray-300 text-sm font-medium">Password</FieldLabel>
                  <a href="#" className="text-xs text-green-500 hover:text-green-400 transition-colors">Forgot password?</a>
                </div>
                <div className="relative">
                  <Input
                    name="password" id="password"
                    type={showPassword ? "text" : "password"} required
                    className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 focus:ring-green-600/20 rounded-lg h-11 pr-10"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </Field>

              {error && (
                <div className="rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400 font-mono">
                  {error}
                </div>
              )}

              <Field>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium text-sm transition-all hover:scale-[1.01] shadow-lg shadow-green-900/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? <Spinner /> : "Sign in"}
                </button>
                <FieldDescription className="text-center pt-2 text-gray-600 text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/sign-up" className="text-green-500 hover:text-green-400 transition-colors font-medium">
                    Sign up free
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
      
      {/* Footer Policy Links */}
    </div>
  )
}

// Re-using the same SVG components for consistency
const GithubIcon = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"/></svg>
);