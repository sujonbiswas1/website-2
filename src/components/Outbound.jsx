import { Button } from '@heroui/react'
import React from 'react'

const Outbound = () => {
  return (
    <section className='px-8 sm:px-10 md:px-14 lg:px-20 py-20'>

        <div className='flex flex-col justify-center items-center'>
              <div className='text-center space-y-6'>
                  <h2 className='font-montserrat tracking-widest text-primary'>GET STARTED</h2>
                  <h3 className='text-3xl md:text-4xl'> <span className='italic'>Embrace </span> the new era of  <span className='italic'> outbound.</span></h3>
                  <p className='text-gray-400 text-lg font-montserrat tracking-wider max-w-[530px]'>Wizia lets you train, activate, and optimize aiDRs.
                      Take your outbound to new levels of performance and efficiency.</p>
                  
                  <Button className='bg-primary rounded-2xl'>Sign Up for the Beta ⭧</Button>


              </div>
        </div>
      
    </section>
  )
}

export default Outbound
