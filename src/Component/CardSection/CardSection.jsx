import React from 'react';
import User from "../../assets/user.png";
import Rocket from "../../assets/rocket.png";
import Package from "../../assets/package.png";

const CardSection = () => {
    return (
        <div className='mb-20'>
            <div className='w-[65%] mx-auto'>
                <div className='title text-center space-y-3 mb-10'>
                    <h2 className='text-4xl font-bold'>Get Started in 3 Steps</h2>
                    <p className='text-sm'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-11'>
                    <div className="card w-96 bg-base-100 card-xl shadow-sm p-5">
                        <div className='flex justify-end items-center'>
                            <a href="" className='p-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-xs text-white rounded-full'>01</a>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center space-y-4">
                            <span className='p-3 bg-[#E6E6FA] rounded-full'><img src={User} alt="" /></span>
                            <h4 className="text-xl font-semibold">Create Account</h4>
                            <p className='text-sm'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 card-xl shadow-sm p-5">
                        <div className='flex justify-end items-center'>
                            <a href="" className='p-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-xs text-white rounded-full'>02</a>
                        </div>
                        <div className="p-5 flex flex-col justify-center items-center text-center space-y-4">
                            <span className='p-3 bg-[#E6E6FA] rounded-full'><img src={Package} alt="" /></span>
                            <h4 className="text-xl font-semibold">Choose Products</h4>
                            <p className='text-sm'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 card-xl shadow-sm p-5">
                        <div className='flex justify-end items-center'>
                            <a href="" className='p-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-xs text-white rounded-full'>03</a>
                        </div>
                        <div className="p-5 flex flex-col justify-center items-center text-center space-y-4">
                            <span className='p-3 bg-[#E6E6FA] rounded-full'><img src={Rocket} alt="" /></span>
                            <h4 className="text-xl font-semibold">Start Creating</h4>
                            <p className='text-sm'>Download and start using your premium <br /> tools immediately.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardSection;