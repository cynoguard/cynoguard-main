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
import { cn } from "@/lib/utils"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Spinner } from "./ui/spinner"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setFieldErrors({})

    const formData = new FormData(e.currentTarget)

    if (!validateForm(formData)) {
      return
    }

    setLoading(true)

    try {
      const payload = {
        email: String(formData.get("email")),
        password: String(formData.get("password")),
        firstName: formData.get("firstName")
          ? String(formData.get("firstName"))
          : undefined,
        lastName: formData.get("lastName")
          ? String(formData.get("lastName"))
          : undefined,
      }

      const res = await axios.post(
        "http://127.0.0.1:4000/api/auth/register",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      // Redirect to login page on success
      router.push("/login")
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            err.response?.data?.error ||
            "An error occurred during signup. Please try again."
        )
      } else {
        setError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-0 shadow-xl shadow-black/5 dark:shadow-black/20 backdrop-blur-sm bg-card/80">
        <CardHeader className="text-center space-y-2 pb-6">
          <CardTitle className="text-2xl font-bold tracking-tight">Create your account</CardTitle>
          <CardDescription className="text-base">
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field className="grid md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    required
                    aria-invalid={!!fieldErrors.firstName}
                  />
                  {fieldErrors.firstName && (
                    <FieldError>{fieldErrors.firstName}</FieldError>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="lastName">Last Name (optional)</FieldLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                  />
                </Field>
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  aria-invalid={!!fieldErrors.email}
                />
                {fieldErrors.email && (
                  <FieldError>{fieldErrors.email}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  aria-invalid={!!fieldErrors.password}
                />
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
                {fieldErrors.password && (
                  <FieldError>{fieldErrors.password}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                  aria-invalid={!!fieldErrors.confirmPassword}
                />
                {fieldErrors.confirmPassword && (
                  <FieldError>{fieldErrors.confirmPassword}</FieldError>
                )}
              </Field>

              {error && (
                <Field>
                  <FieldError>{error}</FieldError>
                </Field>
              )}

              <Field>
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full h-11 text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <Spinner />
                      Creating account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </Field>

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card/80">
                Or continue with
              </FieldSeparator>

              <Field className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-11 transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="hidden sm:inline">Apple</span>
                </Button>
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-11 transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="hidden sm:inline">Google</span>
                </Button>
              </Field>

              <FieldDescription className="text-center pt-2">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary underline-offset-4 hover:underline transition-colors"
                >
                  Sign in
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center text-xs text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link href="/terms-of-services" className="underline-offset-4 hover:underline transition-colors">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className="underline-offset-4 hover:underline transition-colors">
          Privacy Policy
        </Link>
        .
      </FieldDescription>
    </div>
  )
}
