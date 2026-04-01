import React from 'react';

const Workflow = () => {
    return (
        <div className='py-12 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
            <div className='w-[90%] mx-auto text-center'>
                <h1 className='text-[40px] font-extrabold capitalize'>Ready to transform your workflow?</h1>
                <p className='text-[16px] font-normal'>Join thousands of professionals who are already using DigiTools to work smarter. <br />Start your free trial today.</p>

                <div className='flex flex-col sm:flex-row justify-center gap-3 mt-6 mb-2'>
                    <button className='btn bg-white rounded-full text-[#9514FA] hover:bg-zinc-200'>Explore Products</button>

                    <button className='btn bg-transparent rounded-full text-white border border-white hover:bg-white hover:text-[#9514FA] '>View Pricing</button>
                </div>

                <p className='text-[16px] font-normal'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;