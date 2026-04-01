import React, { use } from 'react';
import Product from '../Product/Product';

const Products = ({ productPromise, carts, setCarts}) => {
    const products = use(productPromise)


    return (
        <div className='mb-20'>
            <div className='w-[65%] mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-11'>
                    {
                        products.map(product => <Product key={product.id} product={product} carts={carts} setCarts={setCarts}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;