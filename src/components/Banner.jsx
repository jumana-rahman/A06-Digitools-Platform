import React from 'react';
import BannerIcon from '../assets/circle-icon.png'
import BannerImage from '../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <div className='w-[90%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-12 '>
            <div className='max-w-160 space-y-3'>
                <h5 className="p-4 max-w-78 rounded-full bg-[#E1E7FF]">
                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-[16px] font-medium flex items-center justify-center gap-1'>
                        <img src={BannerIcon} alt="" />
                        New: AI-Powered Tools Available
                    </span>
                </h5>

                <h1 className='text-[72px]/[84px] font-extrabold text-[#101727]'>Supercharge Your Digital Workflow</h1>

                <p className='text-[18px] font-normal text-[#627382]'>Access premium AI tools, design assets, templates and productivity <br /> software-all in one place. Start creating faster today. <br /> Explore products</p>

                <div className='flex gap-3 mt-5'>
                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white transition-transform duration-300 hover:shadow-xl'>Explore Products</button>

                    <button className='btn rounded-full border border-[#9514FA]'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent flex items-center gap-1'><CiPlay1 className='text-[#9514FA]'/>Watch Demo</span></button>
                </div>
            </div>

            <div>
                <img src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;