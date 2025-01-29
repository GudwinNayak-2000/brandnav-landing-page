import React from 'react'
import Tools from '../components/tools'
import Marquee from '../components/marquee'

const HeroPage = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4  items-center justify-center'>
      <h1 className='font-medium text-[3.5em] text-center w-full max-w-[10em] leading-[1.3em]'>Weapons to Grow Your 
       <span className='inline-block ml-4'>Business</span>
      </h1>
      <div className='flex flex-col'>
        <p className='text-center text-[1em] max-w-[28em] w-full mx-auto text-secondary-text-color'>Turbocharge your business growth.</p>
        <p className='text-center text-[1em] max-w-[28em] w-full mx-auto text-secondary-text-color'>Our products help ignite sales and entrepreneurship.</p>
      </div>
      <Tools />
      <Marquee/>
    </div>
  )
}

export default HeroPage