import React from 'react';
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = ({cartCount}) => {

    const [open, setOpen] = useState(false);
    return (
        <nav className='border-b border-zinc-200'>
            <div className="navbar w-[90%] mx-auto">
                <div className="navbar-start">
                    <div className="flex items-center justify-center gap-1 font-bold text-xl">
                        
                        <GiHamburgerMenu
                        onClick={() => setOpen(!open)}
                        className="mb-2 cursor-pointer lg:hidden"
                        />

                        <img className="w-[70%]" src="/nav-logo.png" />
                    </div>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5 px-1 text-[16px] font-semibold text-[#101727]">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                    </div>

                    {open && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden z-50">
                        <ul className="menu flex flex-col items-center justify-center text-center gap-4 py-5 text-[16px] font-semibold text-[#101727] w-full">
                        <li className='w-full'><a className='w-full block text-center'>Products</a></li>
                        <li className='w-full'><a className='w-full block text-center'>Features</a></li>
                        <li className='w-full'><a className='w-full block text-center'>Pricing</a></li>
                        <li className='w-full'><a className='w-full block text-center'>Testimonials</a></li>
                        <li className='w-full'><a className='w-full block text-center'>FAQ</a></li>
                        </ul>
                    </div>
                    )}
                <div className="navbar-end gap-5">
                    
                    <div>
                        <CiShoppingCart className='w-10 font-semibold text-[16px] cursor-pointer hover:text-[#9514FA] relative' />
                        
                        {cartCount > 0 && (
                            <span className="absolute w-4 h-4 bg-red-500 text-white rounded-full top-4 right-51 text-[12px] flex justify-center items-center">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    
                    <a className='font-semibold cursor-pointer text-[#101727] hover:text-[#9514FA]'>Login</a>

                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
                </div>
            </div>
        </nav>
  );
};

export default NavBar;