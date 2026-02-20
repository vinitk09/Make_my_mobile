'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const text = "Search for Products, Brands and Models..."

    const [displayText, setDisplayText] = useState("");

    const [index,setIndex] = useState(0);

    useEffect(()=>{
           if(index < text.length){

             const timeout = setTimeout(()=>{
                    setDisplayText((prev) => prev + text.charAt(index))
                    setIndex((prev) => prev + 1)
       
              },100)
              return () => clearTimeout(timeout);
            }

              else{
              const resetTimeout = setTimeout(() => {
        setDisplayText("")
        setIndex(0)
      }, 2000) 
      return () => clearTimeout(resetTimeout)
       
        }
      


    },[index])
  return (
    <div className='max-w-7xl mx-auto py-2'>
     <nav className='flex justify-evenly items-center gap-8 '>
       <div>
         <Image src="/logo.png" alt='logo' width={100} height={100} className='text-2xl font-bold'/>
       </div>

       {/* Search Bar */}
       <div className='flex grow  border border-gray-300 rounded-lg px-2 py-2 bg-white hover:border-indigo-400 transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100'>
            <input type="text" placeholder={displayText} className='px-2 py-1 w-full border-none outline-none focus:ring-0 bg-transparent text-gray-700'/>
              <div className='flex items-center cursor-pointer hover:opacity-75 transition'>
                    <Image src='/Search2.webp' alt='search' width={20} height={20}/>
                </div>
       </div>

       {/* Location */}
       <div>
        <h2 className='text-lg font-semibold'>Jamshedpur</h2>
       </div>

       {/* Login Button */}
       <div>
        <button className='bg-[#1D61E7] text-white px-4 py-2 rounded-md'>Login</button>
       </div>
     </nav>
    </div>
  )
}

export default Navbar
