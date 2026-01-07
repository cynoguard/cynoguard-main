import Image from 'next/image'
import dashBoardImage from '../../../public/images/test-product-dashboard-image.png'
const HeroImage = () => {
  return (
    
    <div className='max-w-7xl mx-auto flex flex-row items-center justify-center'>
    {/* we have to change this image with our actual product console image */}
      <Image
      className='p-10 bg-gray-100'
      src={dashBoardImage}
      alt='Cynoguard dashboard image'
      width={1100}
      height={600}
      />
    </div>
  )
}

export default HeroImage
