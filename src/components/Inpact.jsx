import React from 'react'

const Inpact = () => {
  return (
    <section className='bg-[url(/inpactbg.png)] px-8 sm:px-10 md:px-14 lg:px-20 py-20 mx-auto bg-center bg-cover'>
        <div >
            <div className='w-4/5 space-y-3'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl max-w-lg'>Allocate effort where your reps make an inpact.</h2>
            <h3 className='text-xl sm:text-2xl md:text-3xl italic text-primary'>Let us handle the rest.</h3>
            <p className='max-w-[450px] text-gray-300 text-base'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>

                  <div className='flex flex-col md:flex-row gap-7 py-6 mt-8'>
                      <div className='space-y-2'>
                          <h2 className='text-primary font-bold text-3xl md:text-4xl'> 32%</h2>
                          <h3 className='max-w-[150px] text-gray-300'>Improvement in Open Rates</h3>
                      </div>
                      <div className='space-y-2'>
                          <h2 className='text-primary font-bold text-3xl md:text-4xl'> 75%</h2>
                          <h3  className='max-w-[150px] text-gray-300'>Improvement in Ramp Time</h3>
                      </div>
                      <div className='space-y-2'>
                          <h2 className='text-primary font-bold text-3xl md:text-4xl'> 35%</h2>
                          <h3 className='max-w-[150px] text-gray-300'>Improvement in Meetings Booked</h3>
                          
                      </div>

                  </div>

            </div>

            

        </div>

      
    </section>
  )
}

export default Inpact
