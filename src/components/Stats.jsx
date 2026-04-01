import React from 'react';

const Stats = () => {
    return (
        <div className='py-12 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='w-[90%] mx-auto block md:flex justify-evenly items-center gap-8 text-center space-y-8 md:space-y-0'>
                <div>
                    <h2 className='text-[60px] font-extrabold text-white'>50K+</h2>
                    <p className='text-[24px] font-medium text-white'>Active Users</p>
                </div>
                
                <div className='md:border-x border-white px-26'>
                    <h2 className='text-[60px] font-extrabold text-white'>200+</h2>
                    <p className='text-[24px] font-medium text-white'>Premium Tools</p>
                </div>
                
                <div>
                    <h2 className='text-[60px] font-extrabold text-white'>4.9</h2>
                    <p className='text-[24px] font-medium text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;