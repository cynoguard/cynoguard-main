import Image from 'next/image'
import dashBoardImage from '../../../public/images/test-product-dashboard-image.png'
import { cn } from "@/lib/utils";

const HeroImage = () => {
  return (
    <div className={cn("max-w-7xl mx-auto flex flex-row items-center justify-center")}>
      {/* we have to change this image with our actual product console image */}
      <Image
        className={cn("p-10 bg-gray-100")}
        src={dashBoardImage}
        alt='Cynoguard dashboard image'
        width={1100}
        height={600}
      />
    </div>
  )
}

export default HeroImage
