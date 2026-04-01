import React from 'react';
import { FaRegCircleDot } from "react-icons/fa6";
import BannerImage from "../../assets/banner.png";
import Play from "../../assets/play.png";


const Banner = () => {

    return (
        <div className='mb-20 w-[65%] mx-auto'>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-between items-center gap-5">
                <div className=' space-y-5'>
                    <div className='bg-[#e1e7ff] flex justify-center items-center w-[45%] py-1 rounded-full text-[#4f39f6] font-semibold'>
                        <FaRegCircleDot className='mr-2 text-sm' />
                        <p className='text-sm'>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className='text-6xl font-extrabold leading-20'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='text-md leading-7'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products</p>
                    <div className='space-x-3 flex'>
                        <button className='border py-3 px-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-sm'>Explore Products</button>
                        <button className='border py-2 px-3 rounded-full text-[#4f39f6] font-bold text-sm flex justify-center items-center'><img src={Play} alt="" className='w-5 h-5 mr-2' /> Watch Demo</button>
                    </div>
                </div>
                <div className='lg:flex justify-end'>
                    <img src={BannerImage} alt="banner" className='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;