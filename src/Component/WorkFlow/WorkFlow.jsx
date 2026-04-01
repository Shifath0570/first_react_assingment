import React from 'react';

const WorkFlow = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-15 text-white'>
                <div className='w-[65%] mx-auto'>
                    <div className='title text-center space-y-5 mb-10'>
                        <h2 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h2>
                        <p className='text-sm leading-5'>Join thousands of professionals who are already using Digitools to work smarter. <br />
                            Start your free trial today.</p>
                        <div className='space-x-3'>
                            <button className='border py-3 px-3 rounded-full bg-white text-[#4f39f6] font-bold text-sm'>Explore Products</button>
                            <button className='border py-2 px-4 rounded-full text-white font-bold text-sm'>View Pricing</button>
                        </div>
                        <p className='text-sm'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkFlow;