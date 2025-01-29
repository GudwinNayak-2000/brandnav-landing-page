import React from 'react'
import VerifierCardImage from '../assets/verifier card.svg'
import ScreenerCardImage from '../assets/screener card.svg'
import BlackListShieldImage from '../assets/blacklist shield card.svg'
import EnricherImage from '../assets/enricher card.svg'
import RatingImage from '../assets/rating-star.svg'
import CreditCardSvg from '../assets/newcc.svg'
import Image from 'next/image'
const Tools = () => {
    return (
        <div className='flex items-center py-6'>
            <div>
                <Image src={VerifierCardImage} alt="" className='' />
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <div className='flex flex-col items-center justify-center w-full gap-2'>
                    <button className='w-full max-w-[15em] text-center text-tertiary-text-color bg-custom-gradient px-[0.5em] py-[0.6em] rounded-[8px]'>Start for free</button>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center'>
                            <p className='flex items-center gap-2'>
                                <Image src={CreditCardSvg} className='' alt='' />
                                No credit card required</p>
                        </div>
                        <div className='w-[2px] h-[12px] rounded-sm bg-gray-500'></div>
                        <div className='flex items-center gap-2'>
                            <Image src={RatingImage} alt='' className='' />
                            <p className='rating-label'>
                                4.8/5 G2 Rating
                            </p>
                        </div>
                    </div>
                </div>
                 <div className='flex items-center'>
                 <Image src={ScreenerCardImage} alt="alt" className='' />
                 <Image src={BlackListShieldImage} alt="alt" className='' />
                 </div>
            </div>
            <div>
                <Image src={EnricherImage} alt='' className='' />
            </div>
        </div>
    )
}

export default Tools