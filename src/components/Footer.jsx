import React from 'react';
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (

        <footer className="bg-[#101727] text-white pt-12 pb-5">
            <div className="max-w-[90%] mx-auto">


                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 md:mb-10 px-4">
                    <div className="mb-4 col-span-2 lg:col-span-1">
                        <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
                        <p className="text-sm leading-relaxed opacity-80">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 col-span-2 lg:col-span-3">

                        <div>
                            <h3 className="text-white font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gray-200">Features</a></li>
                                <li><a href="#" className="hover:text-gray-200">Pricing</a></li>
                                <li><a href="#" className="hover:text-gray-200">Templates</a></li>
                                <li><a href="#" className="hover:text-gray-200">Integrations</a></li>
                            </ul>
                        </div>


                        <div className='md:pl-10 lg:pl-0'>
                            <h3 className="text-white font-semibold mb-4 ">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gray-200">About</a></li>
                                <li><a href="#" className="hover:text-gray-200">Blog</a></li>
                                <li><a href="#" className="hover:text-gray-200">Careers</a></li>
                                <li><a href="#" className="hover:text-gray-200">Press</a></li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-white font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm mb-6">
                                <li><a href="#" className="hover:text-gray-200">Documentation</a></li>
                                <li><a href="#" className="hover:text-gray-200">Help Center</a></li>
                                <li><a href="#" className="hover:text-gray-200">Community</a></li>
                                <li><a href="#" className="hover:text-gray-200">Contact</a></li>
                            </ul>
                        </div>

                        <div className='md:pl-10 lg:pl-0'>
                            <h3 className="text-white font-semibold mb-3">Social Links</h3>
                            <div className="flex gap-2">
                                <button className="btn btn-circle btn-sm md:btn-md bg-white text-black hover:bg-gray-200">
                                    <TbBrandInstagramFilled className='w-8 h-8' />
                                </button>
                                <button className="btn btn-circle btn-sm md:btn-md bg-white text-black hover:bg-gray-200">
                                    <FaFacebookSquare className='w-6 h-6' />
                                </button>
                                <button class="btn btn-circle btn-sm md:btn-md bg-white text-black hover:bg-gray-200">
                                    <FaXTwitter className='w-6 h-6' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="border-t border-gray-700 my-4"></div>

                <div className="flex flex-col sm:flex-row justify-between items-center text-sm opacity-70 gap-2 px-2 md:px-4">
                    <p>© 2026 Digitools. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>

    );
};

export default Footer;