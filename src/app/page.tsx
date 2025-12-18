import React from "react"

const Page = () => {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center bg-black overflow-hidden">
      {/* subtle navy blur glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-slate-900/40 blur-3xl" />
      </div>

      {/* content */}
      <p className="relative text-white/90 font-bold tracking-wide text-xl md:text-3xl lg:text-4xl">
        Coming Soon
      </p>
    </div>
  )
}

export default Page
