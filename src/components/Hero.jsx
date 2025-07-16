import { Button } from '@heroui/react'
import React from 'react'

const Hero = () => {
  return (
    <section className='bg-[url(../assets/Herobg.png)] w-full bg-center bg-cover bg-no-repeat  py-10'>
   <div className='py-16 px-8 sm:px-10 md:px-14 lg:px-20'>
     <div className='w-full md:w-1/2 space-y-5'>
        <h2 className='text-primary text-2xl'>AI SDRs (aiDRs)</h2>
        <h1 className='text-white max-w-sm text-2xl sm:text-3xl md:text-5xl lg:text-6xl'><span className='font-bold'> More </span>  <span className='font-mono'> <i> leads, </i> </span> <span className='font-bold'> less </span> <span className='font-mono'> people.</span> </h1>
        <p className='text-gray-300 max-w-sm '>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
        <Button className='bg-primary'>Sign Up for the Beta ⭧</Button>
        </div>
    </div>
       
      
      
    </section>
  )
}

export default Hero
