import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div className='py-12'>
            <div className='max-w-[90%] mx-auto'>
                <h2 className='text-[48px] font-extrabold text-[#101727] text-center'>Simple, Transparent Pricing</h2>
                <p className='text-[16px] font-normal text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className='grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mt-8'>
                    <div className='card px-4 py-12 bg-zinc-50 border border-zinc-200 space-y-5 '>
                        <div>
                            <h3 className='text-2xl font-bold'>Starter</h3>
                            <p className='text-[16px] font-normal text-[#627382]'>Perfect for getting started</p>
                        </div>

                        <h4 className='text-[16px] font-medium text-[#627382]'><span className='text-2xl font-bold text-[#101727]'>$0</span>/Month</h4>

                        <ul className='w-75 text-[16px] text-[#627382] space-y-2'>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-green-600'/>
                                Access to 10 free tools
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-green-600'/>
                                Basic templates
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-green-600'/>
                                Community support
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-green-600'/>
                                1 project per month
                            </li>
                            
                        </ul>

                        <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-[16px] text-white'>Get Started Free</button>
                    </div>

                    <div className='card p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white space-y-5 '>
                        <div className='relative'>
                            <div className='badge badge-soft badge-warning rounded-full absolute bottom-15 left-35 md:left-30 border border-yellow-600 '>Most Popular</div>
                            <h3 className='text-2xl font-bold'>Pro</h3>
                            <p className='text-[16px] font-normal'>Best for professionals</p>
                        </div>

                        <h4 className='text-[16px] font-medium'><span className='text-2xl font-bold'>$29</span>/Month</h4>

                        <ul className='w-75 text-[16px] space-y-2'>
                            <li className='flex items-center gap-2'>
                                <FaCheck />
                                Access to all premium tools
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck />
                                Unlimited templates
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck />
                                Priority support
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck />
                                Unlimited projects
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck />
                                Cloud sync
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck />
                                Advanced analytics
                            </li>
                        </ul>

                        <button className='btn rounded-full'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-[16px]'>Start Pro Trial</span></button>
                    </div>

                    <div className='card p-4 bg-zinc-50 border border-zinc-200 space-y-5 '>
                        <div>
                            <h3 className='text-2xl font-bold'>Enterprise</h3>
                            <p className='text-[16px] font-normal text-[#627382]'>For teams and business</p>
                        </div>

                        <h4 className='text-[16px] font-medium text-[#627382]'><span className='text-2xl font-bold text-[#101727]'>$99</span>/Month</h4>

                        <ul className='w-75 text-[16px] text-[#627382] space-y-2'>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-green-600'/>
                                Everything in Pro
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-green-600'/>
                                Team Collaboration
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-green-600'/>
                                Custom integrations
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-green-600'/>
                                Dedicated support
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-green-600'/>
                                SLA guarantee
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-green-600'/>
                                Custom branding
                            </li>
                            
                        </ul>

                        <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-[16px] text-white'>Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;