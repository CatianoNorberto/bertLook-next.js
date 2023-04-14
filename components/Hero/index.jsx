import React from 'react'
import Image from 'next/image'
import BannerWoman from '../../public/assets/womanimg.jpg'

const Hero = () => {
  return (
    <div className='h-[500px] w-full flex justify-center mt-16 mb-[20rem]'>
      <div className='relative h-[500px] w-10/12 mx-auto'>
        <Image className='h-[500px] object-cover rounded-xl' src={BannerWoman}/>
        <div className='absolute top-[10rem] left-[2.5rem] flex flex-col items-center gap-4'>
          <span className='text-white text-4xl'>Get Some nice <span className='text-orange-500'>sunglasses</span></span>
          <span className='text-[#efefefe8] text-3xl'>At a distance of a click</span>
          <button className='mt-6 bg-orange-500 py-2 px-4 text-[#efefef] text-[18px] rounded-xl
          transition-all hover:bg-orange-600'>See now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero