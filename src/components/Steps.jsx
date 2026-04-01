import React from 'react';
import Package from '../assets/package.png'
import User from '../assets/user.png'
import Rocket from '../assets/rocket.png'

const Steps = () => {
    return (
        <div className='py-12 bg-[#F1F1F1]'>
            <div className='max-w-[90%] mx-auto'>
                <h2 className='text-[48px] font-extrabold text-[#101727] text-center'>Get Started In 3 Steps</h2>
                <p className='text-[16px] font-normal text-[#627382] text-center'>Start using premium digital tools in minutes, not hours.</p>

                <div className='grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 items-center justify-center gap-8 pt-8 text-center'>
                    <div className='card py-8 px-4 bg-white rounded-2xl space-y-4 border border-zinc-200'>
                        <div className='flex justify-between'>
                            <div></div>
                            <div className='w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center'>
                                <h5 className=' text-white '>01</h5>
                            </div>
                        </div>
                        
                        <div className='w-23 h-23 rounded-full bg-[rgba(150,20,250,0.2)] flex justify-center items-center mx-auto'>
                            <img src={User} alt="user" />
                        </div>

                        <h3 className='text-[24px] font-bold text-[#101727]'>Create Account</h3>

                        <p className='text-[16px]/[28px] font-normal text-[#627382] max-w-80.5 mx-auto'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    <div className='card py-8 px-4 bg-white rounded-2xl space-y-4 border border-zinc-200'>
                        <div className='flex justify-between'>
                            <div></div>
                            <div className='w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center'>
                                <h5 className=' text-white '>02</h5>
                            </div>
                        </div>
                        
                        <div className='w-23 h-23 rounded-full bg-[rgba(150,20,250,0.2)] flex justify-center items-center mx-auto'>
                            <img src={Package} alt="package" />
                        </div>

                        <h3 className='text-[24px] font-bold text-[#101727]'>Choose Products</h3>

                        <p className='text-[16px]/[28px] font-normal text-[#627382] max-w-80.5 mx-auto'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    <div className='card py-8 px-4 bg-white rounded-2xl space-y-4 border border-zinc-200'>
                        <div className='flex justify-between'>
                            <div></div>
                            <div className='w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center'>
                                <h5 className=' text-white '>03</h5>
                            </div>
                        </div>
                        
                        <div className='w-23 h-23 rounded-full bg-[rgba(150,20,250,0.2)] flex justify-center items-center mx-auto'>
                            <img src={Rocket} alt="rocket" />
                        </div>

                        <h3 className='text-[24px] font-bold text-[#101727]'>Start Creating</h3>

                        <p className='text-[16px]/[28px] font-normal text-[#627382] max-w-80.5 mx-auto'>Download amd start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;