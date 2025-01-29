import Image from 'next/image'
import React from 'react'
import Logo1 from '../assets/logo 1.svg'
import Logo2 from '../assets/logo 2.svg'
import Logo3 from '../assets/logo 3.svg'
import Logo4 from '../assets/logo 4.svg'
import Logo5 from '../assets/logo 5.svg'
const Marquee = () => {
    const logos:string[] = [
        Logo1,Logo2,Logo3,Logo4,Logo5
      ];
  return (
    <div className='text-center px-[1.25em] py-[1.8em] w-max gap-2 flex flex-col'>
        <h2 className='text-lg text-secondary-text-color'>Modern companies are using <span className='font-medium'>BrandNav</span></h2>
        <div className='flex items-center gap-12 justify-center w-full flex-wrap'>
           {logos.map((logo,index) => (
            <Image key={index} src={logo} alt="alt" />
           ))}
        </div>
    </div>
  )
}

export default Marquee