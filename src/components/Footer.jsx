import React from 'react'
import logo from '../assets/Logo.png'
const Footer = () => {
  return (
    <footer className='px-8 sm:px-10 md:px-14 lg:px-20 py-8 max-w-[1440px] mx-auto bg-[#07292F]'>
        <div className='flex flex-col md:flex-row justify-between'>
            <div>
                <img src={logo} alt="" />
            </div>
            <p className='text-gray-400'>Copyright © 2023 Wizia. All rights reserved.</p>
        </div>
      
    </footer>
  )
}

export default Footer
