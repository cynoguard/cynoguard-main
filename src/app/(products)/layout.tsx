import type { ReactNode } from "react"
import Navbar from "@/components/shared/NavBar"
import Footer from "@/components/shared/Footer"

export default function ProductsLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
