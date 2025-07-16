import React, { useState } from 'react'
import { FcPrevious } from "react-icons/fc";
import { MdNavigateNext } from "react-icons/md";
import images from '../assets/quota.png'

const testmonialList = [
    {
        img:images,
        des:"Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        name:"John Doe",
        company:"Chief Strategy Officer @ Company",
    },
      {
        img:images,
        des:"r adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        name:"John Doe",
        company:"Chief Strategy Officer @ Company",
    },
      {
        img:images,
        des:" adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet od",
        name:"John",
        company:"Chief Strategy Officer @ Company",
    }

];
const Testmonial = () => {
    const [position,setposition] = useState(0);
    const prevBtn=()=>{
        setposition((prev)=>prev===0?testmonialList.length-1:prev-1);

    }
     const nextBtn=()=>{
        setposition((prev)=>prev===testmonialList.length-1?0:prev+1);

    }
const {img,des,name,company} = testmonialList[position]
  
const handle=()=>{
    setposition((prev)=>prev===testmonialList.length-1?0:prev+1);
    
}

  return (
    <section className='py-16 px-8 sm:px-10 md:px-14 lg:px-20 max-w-[1440px] mx-auto'>
        <div className='flex justify-around items-center'>
            <FcPrevious onClick={prevBtn} className='cursor-pointer text-3xl rounded-full text-primary' />

            <div className='flex flex-col items-center justify-center'>
                <img src={img} alt="" />
                <div className='text-center '>
                <p className='max-w-[600px] leading-7 py-5 font-montserrat tracking-widest'>{des}</p>
                <h2 className='text-center text-primary'>{name}</h2>
                <h3 className='text-gray-400'>{company}</h3>
                </div>
                
                <div className='flex gap-1 mt-7'>
                    {testmonialList.map((items,index)=>(
                        <div key={index} onClick={handle}  className={`w-5 h-5 rounded-full ${position===index? 'bg-primary' : 'bg-red-400'}`} >

                        </div>
                    ))}
                </div>

            </div>

            <MdNavigateNext onClick={nextBtn} className='cursor-pointer text-[45px] rounded-full text-primary' />

        </div>
      
    </section>
  )
}

export default Testmonial
