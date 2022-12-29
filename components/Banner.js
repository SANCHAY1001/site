
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React from 'react'
import Image from 'next/image'
import Img from '../public/images/pepper.png'

function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bottom-0 z-20' />
        {/* bg-gradient-to-t from-gray-100 to-transparent */}
        <Carousel  autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
            <div>
                <Image loading='lazy' src={Img} className="h-[400px]   shadow-md shadow-gray-400" />
            </div>
            <div>
                <Image loading='lazy'  src={Img} className="h-[400px] shadow-md shadow-gray-400" />
            </div>
            <div>
                <Image loading='lazy'  src={Img} className="h-[400px] shadow-md shadow-gray-400"  />
            </div>
        </Carousel>
    </div>
  )
}

export default Banner