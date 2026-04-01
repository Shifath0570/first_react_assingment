import React from 'react';

const Rating = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-15 mb-20'>
                <div className='w-[65%] mx-auto flex justify-evenly items-center'>
                    <div className='text-center space-y-3'>
                        <h1 className='text-6xl text-white font-bold'>50K+</h1>
                        <p className='text-xl text-white font-semibold'>Active Users</p>
                    </div>
                    <div className='text-center space-y-3 border-l-2 border-r-2 px-30 border-white'>
                        <h1 className='text-6xl text-white font-bold'>200+</h1>
                        <p className='text-xl text-white font-semibold'>Premium Tools</p>
                    </div>
                    <div className='text-center space-y-3'>
                        <h1 className='text-6xl text-white font-bold'>4.9</h1>
                        <p className='text-xl text-white font-semibold'>Rating</p>
                    </div>
                </div>
            </div>
            <div className='title text-center space-y-3 mb-10'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p className='text-sm leading-5'>Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.</p>
            </div>
        </div>
    );
};

export default Rating;