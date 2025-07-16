import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import React from 'react'
import logo from '../assets/Logo.png'



const Header = () => {
  return (
    <Navbar className='bg-black border-b border-[#124141]' maxWidth='2xl'>
        <NavbarBrand>
            <img src={logo} alt="" />
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-6' justify='center'>
            <NavbarItem>
                <Link className='text-white cursor-pointer text-lg'>About Us</Link>
            </NavbarItem>
            <NavbarItem>
                <Link className='text-white cursor-pointer text-lg'>Pricing</Link>
            </NavbarItem>
            <NavbarItem>
                <Link className='text-white cursor-pointer text-lg'>Customers</Link>
            </NavbarItem>
            <NavbarItem>
                <Link className='text-white cursor-pointer text-lg'>Solutions</Link>
            </NavbarItem>

        </NavbarContent>
        <NavbarContent justify='end'>
            <NavbarItem>
                <Button as={Link} className='bg-primary'>  Book a Demo</Button>
            </NavbarItem>
            <NavbarItem>
                <Button as={Link}  color='solid' className="text-white" variant='bordered'>Contact Us</Button>
            </NavbarItem>
        </NavbarContent>
        
      
    </Navbar>
  )
}

export default Header
