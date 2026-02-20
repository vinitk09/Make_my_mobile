'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Hero = () => {
  // 1. Array of images for the carousel
  const images = [
    "/hero-back.jpg"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // 2. Setup the automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Changes every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className='font-josefin relative w-full mx-auto flex flex-col py-16 gap-10 bg-gray-200 rounded-lg h-[80vh] overflow-hidden'>
      
      {/* 3. Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Background ${index}`}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 4. Content (Higher Z-Index to stay on top) */}
      <div className='relative z-10 w-1/2 flex flex-col items-center justify-center mx-auto gap-4 text-white'>
        <h1 className='text-5xl font-bold text-center flex flex-col leading-tight'>
          Your One Stop Solution for all your Mobile Repairs 
          <span className='text-indigo-400'> Make My Mobile</span>
        </h1>
        <p className='text-center text-lg'>
          Our Service makes the mobile work perfectly again with expert technicians and high-quality parts.
        </p>
      </div>

      <div className='relative z-10 flex items-center justify-center mx-auto'>
        <button className='bg-[#1D61E7] text-white px-8 py-3 rounded-2xl mr-4 text-2xl hover:scale-105 transition'>Repair</button>
        <button className='bg-[#1D61E7] text-white px-8 py-3 rounded-2xl mr-4 text-2xl hover:scale-105 transition'>Buy</button>
        <button className='bg-[#1D61E7] text-white px-8 py-3 rounded-2xl mr-4 text-2xl hover:scale-105 transition'>Sell</button>
      </div>
    </div>
  )
}

export default Hero