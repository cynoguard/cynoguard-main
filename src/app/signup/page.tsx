import { redirect } from "next/navigation";

// This old route redirects to the proper auth signup page
export default function SignupRedirect() {
  redirect("/sign-up");
}