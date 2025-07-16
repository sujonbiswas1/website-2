import React from 'react'
import control from '../assets/control.png'
import scalable from '../assets/scalable.png'
import flexiable from '../assets/flexiable.png'
const cardLIst = [
    {
        image:control,
        title: "You’re in Control",
        des:"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."

    },
    {
        image:scalable,
        title: "Infinitely Scalable",
        des:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."

    },
    {
        image:flexiable,
        title: "Incredibly Flexible",
        des:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."

    },
]
const Card = () => {
  return (
    <section className='px-8 sm:px-10 md:px-14 lg:px-20 max-w-[1440px] mx-auto bg-black py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {cardLIst.map((item,i)=>(
                <div key={i} className='px-5 space-y-5 bg-[#15151b] py-2 hover:bg-[#272733] hover:p-4 transition-all duration-300 rounded hover:cursor-pointer'>
                    <img src={item.image} alt="" />
                    <div className='space-y-4'>
                        <h2>{item.title}</h2>
                        <p className='text-gray-400 max-w-[260px]'>{item.des}</p>
                    </div>

                </div>
            ))}

        </div>

      
    </section>
  )
}

export default Card
