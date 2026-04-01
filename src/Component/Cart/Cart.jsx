import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, card) => sum + card.price, 0)

    function handleCheckout() {
        setCarts([])
        toast.success("Checkout Successfull!");
    }

    function handleRemove(card) {
        console.log(card)
        const filterCarts = carts.filter(item => item.id !== card.id)
        setCarts(filterCarts)
        toast.success("Item Deleted");
    }

    return (
        <div className='my-15'>
            {
                carts.length == 0 ? <div className='card shadow-sm w-[65%] mx-auto p-5 h-56 space-y-5'>
                    <h2 className='text-2xl font-bold'>Your Cart</h2>
                    
                </div> : <div className='card shadow-sm w-[65%] mx-auto p-5 space-y-5'>
                    <h2 className='text-2xl font-bold'>Your Cart</h2>
                    <div className='space-y-5'>
                        {
                            carts.map(card => <div key={card.id} className='flex justify-between items-center bg-[#E6E6FA] p-3 rounded-xl'>
                                <div className='flex items-center space-x-5'>
                                    <img src={card.image} alt="" className='w-10 h-10' />
                                    <div>
                                        <h2 className='text-lg font-bold'>{card.title}</h2>
                                        <p className='text-sm'>${card.price}</p>
                                    </div>
                                </div>
                                <button onClick={()=>handleRemove(card)} className='text-sm font-bold text-red-500'>Remove</button>
                            </div>)
                        }
                    </div>
                    <div className='flex justify-between items-center p-3'>
                        <h2 className='text-lg'>Total :</h2>
                        <p className='text-xl font-bold'>${totalPrice}</p>
                    </div>
                    <button onClick={handleCheckout} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full text-white" py-3>Proceed to Checkout</button>
                </div>
            }

        </div>
    );
};

export default Cart;