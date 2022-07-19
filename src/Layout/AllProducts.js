import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import Loading from './Loading';
import Product from './Product';

const AllProducts = () => {
    const { loading, products, error } = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className='py-4 w-11/12 mx-auto'>
            <h2 className='text-center text-lg md:text-xl pb-8'>Choose your signature scent from <span className='font-semibold'> Aromallure</span></h2>
            <div className='text-center py-8'>
                <button className='btn btn-blue-100 btn-outline border-1'>
                    Men's
                </button>
            </div>
            {loading && <Loading></Loading>}
            {!loading && error && <div className='flex h-96 justify-center items-center text-lg text-red-900 font-bold'>Sorry, {error}! </div>}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-6 lg:mx-0 lg:gap-6'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}></Product>)
                }
            </div>


        </div >
    );
};

export default AllProducts;