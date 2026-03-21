/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { auth } from "@/lib/firebase"
import { cn } from "@/lib/utils"
import axios from "axios"
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth"
import { ShieldCheck } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Spinner } from "./ui/spinner"

interface AuthPayload {
  firebaseId: string
  email: string | null
  firstName: string
  lastName: string
  role: string
}

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const [organizations, setOrganizations] = useState<any[]>([])
  const [fieldErrors, setFieldErrors] = useState<{
    firstName?: string
    email?: string
    password?: string
    confirmPassword?: string
  }>({})

  const validateForm = (formData: FormData): boolean => {
    const errors: typeof fieldErrors = {}
    const firstName = formData.get("firstName")?.toString().trim()
    const email = formData.get("email")?.toString().trim()
    const password = formData.get("password")?.toString()
    const confirmPassword = formData.get("confirmPassword")?.toString()

    if (!firstName || firstName.length < 2) {
      errors.firstName = "First name must be at least 2 characters"
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address"
    }
    if (!password || password.length < 8) {
      errors.password = "Password must be at least 8 characters long"
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match"
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const syncWithBackend = async (user: User, customPayload?: Partial<AuthPayload>) => {
    const token = await user.getIdToken()

    const payload: AuthPayload = {
      firebaseId: user.uid,
      email: user.email,
      firstName: customPayload?.firstName || user.displayName?.split(" ")[0] || "",
      lastName: customPayload?.lastName || user.displayName?.split(" ").slice(1).join(" ") || "",
      role: "SUPER_ADMIN",
      ...customPayload,
    }

    const response = await axios.post(
      "https://api.cynoguard.com/api/auth/sync",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )

    if (response.data.status === "success") {
      const orgs = response.data.data?.organizations || []
      if (orgs.length > 0) {
        setOrganizations(orgs)
      } else {
        const safeToken = response.data.data.token
        window.location.href = `https://console.cynoguard.com/onboarding/${safeToken}/setup-organization`
      }
    } else {
      throw new Error("Failed to register user")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setFieldErrors({})
    const formData = new FormData(e.currentTarget)
    if (!validateForm(formData)) return

    setLoading(true)
    try {
      const email = String(formData.get("email"))
      const password = String(formData.get("password"))
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await syncWithBackend(userCredential.user, {
        firstName: String(formData.get("firstName")),
        lastName: String(formData.get("lastName") || ""),
      })
    } catch (err: any) {
      console.error(err)
      setError(err.response?.data?.message || err.message || "An error occurred during signup.")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(async (userCredential) => {
        await syncWithBackend(userCredential.user)
      })
      .catch((err) => {
        console.error(err)
        setError("Google sign-in failed. Please try again.")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleGitHubSignIn = async () => {
    setLoading(true)
    try {
      const provider = new GithubAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      await syncWithBackend(userCredential.user)
    } catch (err) {
      console.error(err)
      setError("GitHub sign-in failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>

      {/* Organisation selection modal — dark themed */}
      <Dialog open={organizations.length > 0} onOpenChange={() => setOrganizations([])}>
        <DialogContent className="bg-gray-900 border border-gray-800 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">Select Organization</DialogTitle>
            <DialogDescription className="text-gray-400">
              Choose the organization you want to work with right now.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-3 max-h-[400px] overflow-y-auto">
            {organizations.map((org: any) => (
              <div
                key={org.id}
                onClick={() => {
                  if (org.is_onboarded) {
                    window.location.href = `https://console.cynoguard.com/auth-bridge?token=${org.auth.custom_token}&org=${org.name.trim().toLowerCase()}`
                  } else {
                    window.location.href = `http://console.cynoguard.com/onboarding/${org.session_token}/setup-organization`
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
                <p className="text-xs text-gray-500 mt-1">
                  {org.is_onboarded ? "Open workspace" : "Continue onboarding"}
                </p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Card — dark themed to match the page and login form */}
      <div className="relative rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm shadow-2xl shadow-black/50 overflow-hidden">

        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />

        {/* Header */}
        <div className="p-6 text-center border-b border-gray-800">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-green-600/20 border border-green-700/50 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-green-500" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">Create your account</h2>
          <p className="text-sm text-gray-500 mt-1">Enter your information below to get started</p>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <FieldGroup>

              {/* Social sign-in buttons */}
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

              {/* Name fields */}
              <Field className="grid md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="firstName" className="text-gray-300 text-sm font-medium">
                    First Name
                  </FieldLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                    aria-invalid={!!fieldErrors.firstName}
                    className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 focus:ring-green-600/20 rounded-lg h-11"
                  />
                  {fieldErrors.firstName && (
                    <FieldError className="text-red-400 text-xs">{fieldErrors.firstName}</FieldError>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="lastName" className="text-gray-300 text-sm font-medium">
                    Last Name <span className="text-gray-600">(optional)</span>
                  </FieldLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 focus:ring-green-600/20 rounded-lg h-11"
                  />
                </Field>
              </Field>

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email" className="text-gray-300 text-sm font-medium">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  aria-invalid={!!fieldErrors.email}
                  className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 focus:ring-green-600/20 rounded-lg h-11"
                />
                {fieldErrors.email && (
                  <FieldError className="text-red-400 text-xs">{fieldErrors.email}</FieldError>
                )}
              </Field>

              {/* Password */}
              <Field>
                <FieldLabel htmlFor="password" className="text-gray-300 text-sm font-medium">
                  Password
                </FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Min. 8 characters"
                  required
                  aria-invalid={!!fieldErrors.password}
                  className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 focus:ring-green-600/20 rounded-lg h-11"
                />
                <FieldDescription className="text-gray-600 text-xs">
                  Must be at least 8 characters long.
                </FieldDescription>
                {fieldErrors.password && (
                  <FieldError className="text-red-400 text-xs">{fieldErrors.password}</FieldError>
                )}
              </Field>

              {/* Confirm password */}
              <Field>
                <FieldLabel htmlFor="confirmPassword" className="text-gray-300 text-sm font-medium">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Repeat your password"
                  required
                  aria-invalid={!!fieldErrors.confirmPassword}
                  className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 focus:ring-green-600/20 rounded-lg h-11"
                />
                {fieldErrors.confirmPassword && (
                  <FieldError className="text-red-400 text-xs">{fieldErrors.confirmPassword}</FieldError>
                )}
              </Field>

              {/* Global error */}
              {error && (
                <div className="rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400 font-mono">
                  {error}
                </div>
              )}

              {/* Submit */}
              <Field>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium text-sm transition-all hover:scale-[1.01] shadow-lg shadow-green-900/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? <><Spinner /> Creating account...</> : "Create Account"}
                </button>
                <FieldDescription className="text-center pt-2 text-gray-600 text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-green-500 hover:text-green-400 transition-colors font-medium"
                  >
                    Sign in
                  </Link>
                </FieldDescription>
              </Field>

            </FieldGroup>
          </form>
        </div>
      </div>

      {/* Policy links */}
      <p className="text-center text-xs text-gray-600 font-mono">
        By signing up, you agree to our{" "}
        <Link href="/terms-of-services" className="text-gray-500 hover:text-green-500 underline transition-colors">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className="text-gray-500 hover:text-green-500 underline transition-colors">
          Privacy Policy
        </Link>
      </p>
    </div>
  )
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" />
  </svg>
)