import React from 'react';
import { IoMenu } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="bg-base-100 shadow-sm p-2 mb-20">
                <div className='flex justify-between w-[65%] mx-auto'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} className="btn btn-ghost lg:hidden">
                                <IoMenu className="h-5 w-5" />
                            </div>
                            <ul
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Products</a></li>
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Testimonials</a></li>
                                <li><a>FAQ</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl font-extrabold text-[#4F39F6]">DigiTools</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a className='text-sm'>Products</a></li>
                            <li><a className='text-sm'>Features</a></li>
                            <li><a className='text-sm'>Pricing</a></li>
                            <li><a className='text-sm'>Testimonials</a></li>
                            <li><a className='text-sm'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-3">
                        <CiShoppingCart className='text-lg' />
                        <a className='text-sm'>Login</a>
                        <a className="border py-2 px-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-sm">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;