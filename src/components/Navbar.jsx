import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { div } from 'framer-motion/client';
import { IoMdClose } from "react-icons/io";
const Header = () => {
    const [navhummenu, setnavhummenu] = useState(false)
    const togglemenu = () => {
        setnavhummenu(!navhummenu)
    }
    return (
        <Navbar className='bg-black border-b max-w-[1440px] mx-auto px-8 sm:px-10 border-[#124141]' maxWidth='2xl'>
            <NavbarBrand>
                <img src={logo} className='z-40' alt="" />
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
                <NavbarItem >
                    <Button as={Link} size='sm' className='bg-primary md:flex hidden'>  Book a Demo</Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} size="sm" color='solid' className="text-white md:flex hidden" variant='bordered'>Contact Us</Button>
                </NavbarItem>
                <NavbarItem>
                    <Link className='top-5 right-5 text-2xl fixed sm:hidden z-50 flex' onClick={togglemenu}>
                        {
                            navhummenu ? <IoMdClose /> : <GiHamburgerMenu />
                        }
                    </Link>

                </NavbarItem>
            </NavbarContent>

            <div className=''>
                {navhummenu && (
                    <div className='flex sm:hidden flex-col text-center justify-center items-center left-0 top-8 absolute px-30  drop-shadow-2xl bg-black/65 h-[100vh] rounded-4xl z-10'>
                        <div className='flex flex-col space-y-8 '>
                            <Link onClick={togglemenu} className='cursor-pointer'>About Us</Link>
                            <Link onClick={togglemenu} className='cursor-pointer'>Pricing</Link>
                            <Link onClick={togglemenu} className='cursor-pointer'> Customers</Link>
                            <Link onClick={togglemenu} className='cursor-pointer'> Solutions</Link>

                            <div className='py-2 space-y-2'>
                                <Button onClick={togglemenu} as={Link} size='sm' className='bg-primary flex md:hidden'>  Book a Demo</Button>
                                <Button onClick={togglemenu} as={Link} size="sm" color='solid' className="text-white flex md:hidden" variant='bordered'>Contact Us</Button>
                            </div>
                        </div>
                    </div>


                )

                }
            </div>


        </Navbar>
    )
}

export default Header
