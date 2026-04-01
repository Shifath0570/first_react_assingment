import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
        <div>
            <div className='bg-[#101727] pt-30 text-white'>
                <div className='w-[65%] mx-auto'>
                    <div className='flex justify-between'>
                        <div className='space-y-3'>
                            <h2 className='text-3xl font-bold'>DigiTools</h2>
                            <p className='text-sm leading-5'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <h3 className='text-lg font-semibold'>Product</h3>
                            <a href="" className='text-sm'>Features</a>
                            <a href="" className='text-sm'>Pricing</a>
                            <a href="" className='text-sm'>Templates</a>
                            <a href="" className='text-sm'>Integrations</a>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <h3 className='text-lg font-semibold'>Company</h3>
                            <a href="" className='text-sm'>About</a>
                            <a href="" className='text-sm'>Blog</a>
                            <a href="" className='text-sm'>Careers</a>
                            <a href="" className='text-sm'>Press</a>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <h3 className='text-lg font-semibold'>Resources</h3>
                            <a href="" className='text-sm'>Documentation</a>
                            <a href="" className='text-sm'>Help Center</a>
                            <a href="" className='text-sm'>Community</a>
                            <a href="" className='text-sm'>Contact</a>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-lg font-semibold'>Social Links</h3>
                            <div className='flex gap-3'>
                                <a href="" className='p-2 rounded-full bg-black'><FaSquareInstagram /></a>
                                <a href="" className='p-2 rounded-full bg-black'><FaFacebookSquare /></a>
                                <a href="" className='p-2 rounded-full bg-black'><FaXTwitter /></a>
                            </div>
                        </div>
                    </div>
                    <hr className='mb-10 mt-30 text-gray-700'/>
                    <div className='pb-5 flex justify-between'>
                        <p className='text-sm'>© 2026 Digitools. All rights reserved.</p>
                        <div className='space-x-8'>
                            <a href="" className='text-sm'>Privacy Policy</a>
                            <a href="" className='text-sm'>Terms of Service</a>
                            <a href="" className='text-sm'>Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;