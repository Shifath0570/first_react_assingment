import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Product = ({ product, carts, setCarts}) => {
    
    const [isBuying, setIsBuying] = useState(false)
    
        const handleBuy =() =>{
            setIsBuying(true)
    
            const isFind = carts.find(item => item.id === product.id)
    
            if(isFind){
                
                toast.error("Item Already In Cart");
                return
            }
    
            setCarts([...carts, product])
            toast.success("Item Added A Cart")
        } 

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="space-y-3">
                        <div className=''>
                            <img src={product.image} alt="" className='w-6 h-6'/>
                        </div>
                        <h2 className="text-2xl font-bold">{product.title}</h2>
                        <p className='text-sm'>{product.description}</p>
                        <p><span className="text-xl font-bold">${product.price}</span>/mo</p>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.Checklist[0]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.Checklist[1]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.Checklist[2]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.Checklist[3]}</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button onClick={handleBuy} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full text-white">{isBuying ? "Buy Success" : "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;