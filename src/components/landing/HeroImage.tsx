import Image from 'next/image'
import dashBoardImage from '../../../public/images/test-product-dashboard-image.png'
import { cn } from "@/lib/utils";

const HeroImage = () => {
  return (
    <div className={cn(
      "animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both",
      "max-w-6xl mx-auto px-4 sm:px-6 py-8"
    )}>
      {/* Outer glow container */}
      <div className="relative rounded-2xl p-px bg-gradient-to-b from-slate-200 via-slate-100 to-transparent glow-blue">
        {/* Inner border */}
        <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl">

          {/* Fake browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 max-w-xs mx-auto">
              <div className="bg-white rounded-md px-3 py-1 text-xs text-slate-400 border border-slate-200 text-center">
                app.cynoguard.io/dashboard
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
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