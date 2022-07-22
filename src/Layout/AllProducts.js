import React from 'react';
import { useState } from 'react';
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

    const [filterdProducts, setFilteredProducts] = useState([])
    const handleFilter = category => {
        const filterdProducts = products.filter(product => product.category === category)
        setFilteredProducts(filterdProducts)
    }

    return (
        <div className='py-4 w-11/12 mx-auto'>
            <h2 className='text-center text-lg md:text-xl pb-8'>Choose your signature scent from <span className='font-semibold'> Aromallure</span></h2>
            <div className='text-center p-8'>
                <button onClick={() => handleFilter('women')} className='btn bg-blue-400 border-none border-1'>
                    Women's
                </button>
                <button onClick={() => handleFilter('men')} className='btn bg-blue-400 border-none border-1 mx-4'>
                    Men's
                </button>
                <button onClick={() => handleFilter('')} className='btn bg-blue-400 border-none border-1'>
                    Reset
                </button>
            </div>
            {loading && <Loading></Loading>}
            {!loading && error && <div className='flex h-96 justify-center items-center text-lg text-red-900 font-bold'>Sorry, {error}! </div>}
            <div className='pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-6 lg:mx-0 lg:gap-6'>
                {filterdProducts.length === 0
                    ?
                    products.map(product => <Product
                        key={product.id}
                        product={product}></Product>)
                    :
                    filterdProducts.map(product => <Product
                        key={product.id}
                        product={product}></Product>)
                }
            </div>


        </div >
    );
};

export default AllProducts; 