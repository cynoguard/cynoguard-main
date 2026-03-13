/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Spinner } from "./ui/spinner"

// Define a common payload type for clarity
interface AuthPayload {
  firebaseId: string;
  email: string | null;
  firstName: string;
  lastName: string;
  role: string;
}

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const [organizations, setOrganizations] = useState<any[]>([]);
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

  // --- REFACTORED: SYNC WITH BACKEND HELPER ---
  const syncWithBackend = async (user: User, customPayload?: Partial<AuthPayload>) => {
    const token = await user.getIdToken();
    
    // Construct default payload from Firebase user if not fully provided
    const payload: AuthPayload = {
      firebaseId: user.uid,
      email: user.email,
      firstName: customPayload?.firstName || user.displayName?.split(" ")[0] || "",
      lastName: customPayload?.lastName || user.displayName?.split(" ").slice(1).join(" ") || "",
      role: "SUPER_ADMIN",
      ...customPayload
    };

    const response = await axios.post(
      "https://api.cynoguard.com/api/auth/sync",
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
        // Using your preferred onboarding path from the Google logic
        window.location.href = `http://localhost:3000/onboarding/${safeToken}/setup-organization`;
      }
    } else {
      throw new Error("Failed to register user");
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setFieldErrors({})

    const formData = new FormData(e.currentTarget)
    if (!validateForm(formData)) return;

    setLoading(true)
    try {
      const email = String(formData.get("email"));
      const password = String(formData.get("password"));
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      await syncWithBackend(userCredential.user, {
        firstName: String(formData.get("firstName")),
        lastName: String(formData.get("lastName") || ""),
      });

    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || err.message || "An error occurred during signup.");
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      await syncWithBackend(userCredential.user);
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const handleGitHubSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GithubAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      await syncWithBackend(userCredential.user);
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Dialog open={organizations.length > 0} onOpenChange={() => setOrganizations([])}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Select organization</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Choose the organization you want to work with right now.
            </p>
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
                className="group p-4 border rounded-xl cursor-pointer transition-all hover:bg-muted hover:border-primary hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-base">{org.name}</h3>
                  {!org.is_onboarded && (
                    <span className="text-xs px-2 py-1 rounded-md bg-yellow-100 text-yellow-700">Setup required</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {org.is_onboarded ? "Open workspace" : "Continue onboarding"}
                </p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Card className="border-0 shadow-xl shadow-black/5 dark:shadow-black/20 backdrop-blur-sm bg-card/80">
        <CardHeader className="text-center space-y-1 pb-6">
          <CardTitle className="text-2xl font-bold tracking-tight">Create your account</CardTitle>
          <CardDescription className="text-sm">Enter your information below to create your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field className="grid md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                  <Input id="firstName" name="firstName" placeholder="John" required aria-invalid={!!fieldErrors.firstName} />
                  {fieldErrors.firstName && <FieldError>{fieldErrors.firstName}</FieldError>}
                </Field>
                <Field>
                  <FieldLabel htmlFor="lastName">Last Name (optional)</FieldLabel>
                  <Input id="lastName" name="lastName" placeholder="Doe" />
                </Field>
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" name="email" type="email" placeholder="m@example.com" required aria-invalid={!!fieldErrors.email} />
                {fieldErrors.email && <FieldError>{fieldErrors.email}</FieldError>}
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" name="password" type="password" placeholder="Enter your password" required aria-invalid={!!fieldErrors.password} />
                <FieldDescription>Must be at least 8 characters long.</FieldDescription>
                {fieldErrors.password && <FieldError>{fieldErrors.password}</FieldError>}
              </Field>

              <Field>
                <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" required aria-invalid={!!fieldErrors.confirmPassword} />
                {fieldErrors.confirmPassword && <FieldError>{fieldErrors.confirmPassword}</FieldError>}
              </Field>

              {error && (
                <Field>
                  <FieldError>{error}</FieldError>
                </Field>
              )}

              <Field>
                <Button type="submit" disabled={loading} className="w-full text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
                  {loading ? <><Spinner /> Creating account...</> : "Create Account"}
                </Button>
              </Field>

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card/80">Or continue with</FieldSeparator>

              <Field className="grid grid-cols-2 gap-3">
                <Button onClick={handleGitHubSignIn} variant="outline" type="button" className="h-11 transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]">
                  <GithubIcon className="size-5 mr-2" />
                  <span className="hidden sm:inline">GitHub</span>
                </Button>
                <Button onClick={handleGoogleSignIn} variant="outline" type="button" className="h-11 transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]">
                  <GoogleIcon className="size-5 mr-2" />
                  <span className="hidden sm:inline">Google</span>
                </Button>
              </Field>

              <FieldDescription className="text-center pt-2">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-primary underline-offset-4 hover:underline transition-colors">Sign in</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      {/* Footer Links (Terms/Privacy) */}
    </div>
  )
}

// Minimal Icons for clarity
const GithubIcon = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"/></svg>
);