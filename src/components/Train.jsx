import React from 'react'
import airdbg from '../assets/airdbg.png'
import { CiCircleCheck } from 'react-icons/ci'

const Train = () => {

var prefred = [
       {
        heading1:"Train your aiDR on your...",
        email:"prefered email st|",
        des:"You’re in control. Train your aiDR on elements of your Marketing strategy.",
        
    }
]
console.log()
  return (
    <section className='md:py-16 mx-auto max-w-[1440px] bg-[#252222] px-10 '>
        <div className='flex'>
            <div className='md:bg-[url(./assets/bg.png)] bg-none w-full h-auto py-16 bg-center bg-cover bg-no-repeat '>
            <div className='flex flex-col  md:justify-center md:items-center'>
               <div className='bg-[#1a1616] md:px-20 px-8 py-16 md:ml-32 space-y-2.5 rounded-2xl'>
                 <h2 className='py-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>{Object.values(prefred.map((prev)=>prev.heading1))}</h2>
                <h3 className='text-primary font-montserrat italic text-2xl md:text-3xl '> {Object.values(prefred.map((prev)=>prev.email))} </h3>
                <p className='max-w-xs text-base text-gray-300'>{Object.values(prefred.map((prev)=>prev.des))}</p>

                <div className='mt-4 grid grid-cols-1 md:grid-cols-2 space-y-2'>
                    <div className='flex text-primary items-center gap-2 '>  
                     <CiCircleCheck />
                     <p>Quick to ramp</p>    
                     </div>
                    <div className='flex text-primary items-center gap-2 '>  
                     <CiCircleCheck />
                     <p>Easy to optimize</p>    
                     </div>
                    <div className='flex text-primary items-center gap-2 '>  
                     <CiCircleCheck />
                     <p>Quick to scale up</p>    
                     </div>
                    <div className='flex text-primary items-center gap-2 '>  
                     <CiCircleCheck />
                     <p>Works with all your existing tools</p>    
                     </div>
                </div>
               </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Train
