"use client"
import { Button } from "@/components/ui/button"
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
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth"
import axios from "axios"
import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Spinner } from "./ui/spinner"
import { Shield, Lock, Eye, EyeOff } from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const [organizations, setOrganizations] = useState<[]>([])
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    const formdata = new FormData(e.currentTarget)
    if (String(formdata.get("email")).trim() && String(formdata.get("password")).trim()) {
      try {
        setLoading(true)
        const payload = {
          email: String(formdata.get("email")).trim(),
          password: String(formdata.get("password")),
        }
        const userCredential = await signInWithEmailAndPassword(auth, payload.email, payload.password)
        const token = await userCredential.user.getIdToken()
        const response = await axios.post("http://127.0.0.1:4000/api/auth/sync", payload, {
          headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
        })
        if (response.data.status === "success") {
          if (response.data.data.organizations.length > 0) {
            setOrganizations(response.data.data.organizations)
          } else {
            return window.location.href = "http://localhost:3004/onboarding"
          }
        } else {
          setError("Failed to register user")
        }
      } catch (error: any) {
        setError(error?.message || "An error occurred during login")
      } finally {
        setLoading(false)
      }
    } else {
      setError("Please fill in all fields")
      return
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      const user = userCredential.user
      const payload: Partial<unknown> = {
        firebaseId: user.uid, email: user.email,
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ").slice(1).join(" ") || "",
        role: "SUPER_ADMIN"
      }
      const token = await userCredential.user.getIdToken()
      const response = await axios.post("http://127.0.0.1:4000/api/auth/sync", payload, {
        headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
      })
      if (response.data.status === "success") {
        if (response.data.data.organizations.length > 0) {
          setOrganizations(response.data.data.organizations)
        } else {
          return window.location.href = "http://localhost:3004/onboarding"
        }
      } else {
        throw new Error("Failed to register user")
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleGitHubSignIn = async () => {
    setLoading(true)
    try {
      const provider = new GithubAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      const user = userCredential.user
      const payload: Partial<unknown> = {
        firebaseId: user.uid, email: user.email,
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ").slice(1).join(" ") || "",
        role: "SUPER_ADMIN"
      }
      const token = await userCredential.user.getIdToken()
      const response = await axios.post("http://127.0.0.1:4000/api/auth/sync", payload, {
        headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
      })
      if (response.data.status === "success") {
        if (response.data.data.organizations.length > 0) {
          setOrganizations(response.data.data.organizations)
        } else {
          return window.location.href = "http://localhost:3004/onboarding"
        }
      } else {
        throw new Error("Failed to register user")
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Dialog open={organizations.length > 0}>
        <DialogContent className="bg-gray-900 border border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Select Organization</DialogTitle>
            <DialogDescription className="text-gray-400">
              Choose the organization you want to access.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Card */}
      <div className="relative rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm shadow-2xl shadow-black/50 overflow-hidden">
        {/* Top green accent line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-green-500/40" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-green-500/40" />

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
              {/* OAuth buttons */}
              <Field className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleGitHubSignIn}
                  type="button"
                  className="flex items-center justify-center gap-2 h-11 rounded-lg border border-gray-700 bg-gray-800/60 text-gray-300 hover:border-gray-600 hover:bg-gray-800 hover:text-white transition-all text-sm font-medium"
                >
                  <svg viewBox="0 -0.5 25 25" className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08h-.066c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001.205.19.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005z"/>
                  </svg>
                  GitHub
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="flex items-center justify-center gap-2 h-11 rounded-lg border border-gray-700 bg-gray-800/60 text-gray-300 hover:border-gray-600 hover:bg-gray-800 hover:text-white transition-all text-sm font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4 fill-current">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                  Google
                </button>
              </Field>

              {/* Divider */}
              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-gray-800" />
                <span className="text-xs text-gray-600 font-mono">or continue with email</span>
                <div className="flex-1 h-px bg-gray-800" />
              </div>

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email" className="text-gray-300 text-sm font-medium">Email</FieldLabel>
                <Input
                  name="email" id="email" type="email"
                  placeholder="you@company.com" required
                  className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-600 focus:border-green-600 focus:ring-green-600/20 rounded-lg h-11"
                />
              </Field>

              {/* Password */}
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
                  className="w-full h-11 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium text-sm transition-all hover:scale-[1.01] shadow-lg shadow-green-900/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
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

      <p className="px-6 text-center text-xs text-gray-700 font-mono">
        By continuing, you agree to our{" "}
        <Link href="/terms-of-services" className="text-gray-500 hover:text-green-500 transition-colors underline underline-offset-4">Terms</Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className="text-gray-500 hover:text-green-500 transition-colors underline underline-offset-4">Privacy Policy</Link>.
      </p>
    </div>
  )
}