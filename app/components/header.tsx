"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState,useEffect } from 'react'
import logo from '@/app/assets/logo.svg'
import { ChevronDown } from 'lucide-react'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  
  return (
    <header className={`flex w-full max-w-[1200px] justify-between items-center h-16 px-4 text-primary-text-color fixed top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white bg-opacity-90 border border-gray-300 top-2 shadow-sm rounded-lg' : 'bg-transparent'
    }`}>
       <div className='flex items-center gap-8 h-full'>
       <div className='flex items-center gap-2'>
        <Image src={logo} alt='logo' width={120} height={120} />
       </div>
        <ul className='flex items-center h-full gap-4'>
          <li className='flex h-full items-center gap-2'>
            <Link href='/' className='flex items-center gap-2'>Products
            <ChevronDown className='w-4 h-4'/>
            </Link>
          </li>
          <li className='flex h-full items-center gap-2'>
            <Link href='/'>Pricing</Link>
          </li>
          <li className='flex items-center h-full gap-2'>
            <Link href='/'>Blogs</Link>
          </li>
          <li className='flex items-center h-full gap-2'>
            <Link href='/' className='flex items-center gap-2'>Resources
            <ChevronDown className='w-4 h-4'/>
            </Link>
          </li>
        </ul>
       </div>
       <div className='flex items-center gap-2'>
        <button className='bg-bg-primary border-2 border-border-primary px-6 py-[6px] rounded-md'>Log in</button>
        <button className='bg-bg-secondary text-tertiary-text-color px-4 py-[6px] rounded-md'>Start for free</button>
       </div>
    </header>
  )
}

export default Header