import React from 'react'

import Marquee from "react-fast-marquee";
const Partners = () => {
  return (
    <section className='py-6 px-8 sm:px-10 md:px-14 lg:px-20 max-w-[1440px] mx-auto'>
        <div className='text-center text-primary'>
            <h3 className='font-montserrat tracking-widest'>our trusted partners</h3>

            <div className='py-12 flex justify-center'>
                <Marquee>
                      <img src="/logos.png" alt="logos" />
                </Marquee>
              

            </div>
        </div>
      
    </section>
  )
}

export default Partners
