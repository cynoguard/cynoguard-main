import Image from 'next/image'
import dashBoardImage from '../../../public/images/test-product-dashboard-image.png'
import { cn } from "@/lib/utils";

const HeroImage = () => {
  return (
    <div className={cn(
      "animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both",
      "max-w-6xl mx-auto px-4 sm:px-6 py-8 bg-[#020812]"
    )}>
      {/* Outer glow container */}
      <div className="relative rounded-2xl p-px bg-gradient-to-b from-green-900/60 via-gray-800/30 to-transparent glow-green">
        {/* Corner tech accents */}
        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-green-500/60 rounded-tl-2xl z-10" />
        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-green-500/60 rounded-tr-2xl z-10" />
        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-green-500/30 rounded-bl-2xl z-10" />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-green-500/30 rounded-br-2xl z-10" />

        {/* Inner border */}
        <div className="rounded-2xl overflow-hidden bg-[#060d14] border border-gray-800 shadow-2xl">

          {/* Fake browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0a1120] border-b border-gray-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 max-w-xs mx-auto">
              <div className="bg-gray-900 rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-700 text-center font-mono">
                app.cynoguard.io/dashboard
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-green-500 font-medium font-mono">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              LIVE
            </div>
          </div>

          <Image
            src={dashBoardImage}
            alt="CynoGuard dashboard"
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default HeroImage