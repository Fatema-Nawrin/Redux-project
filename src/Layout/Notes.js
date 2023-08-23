import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import Product from './Product';

const Notes = () => {
    const [top, setTop] = useState("");
    const [heart, setHeart] = useState("");
    const [base, setBase] = useState("")
    const notes = {
        top, heart, base
    }
    const { loading, products } = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const [selectedProducts, setSelectedProducts] = useState([])

    const handleSelect = (top, heart, base) => {
        console.log(top, heart, base)
        const newProducts = products.filter(product => product.top === top && product.heart === heart && product.base === base)
        setSelectedProducts(newProducts)
    }

    return (
        <div className='py-5 text-center bg-blue-50 min-h-screen'>

            <div className='w-11/12  mx-auto'>
                <h2 className='text-lg font-semibold py-4'>Fragrance Notes</h2>
                <h4>The composition of the different notes of a perfume and their interaction with your skin are what make a perfume unique.If you are confused about what to choose for your signature perfume. Select the base, heart and top notes. We will tell you which one is for you.</h4>
            </div>

            <div className='py-6'>
                <select value={base} onChange={e => setBase(e.target.value)} className="select select-bordered border-sky-800 w-28 md:w-36 m-2">
                    <option value="" disabled>Base Note</option>
                    <option value="Musk">Musk</option>
                    <option value="Vanilla">Vanilla</option>
                </select>

                <select value={heart} onChange={e => setHeart(e.target.value)} className="select select-bordered border-sky-800 w-28 md:w-36">
                    <option value="" disabled>Heart Note</option>
                    <option value="Rose">Rose</option>
                    <option value="Lavender">Lavender</option>
                </select>

                <select value={top} onChange={e => setTop(e.target.value)} className="select select-bordered border-sky-800 w-28 md:w-36 m-2">
                    <option value="" disabled>Top Note</option>
                    <option value="Lemon">Lemon</option>
                    <option value="Berries">Berries</option>
                </select>
            </div>
            <button className='btn bg-sky-800  mb-6' onClick={() => handleSelect(notes.top, notes.heart, notes.base)}>Choose</button>

            <div className='w-11/12 bg-blue-50 sm:w-8/12 md:w-5/12 lg:w-3/12 mx-auto mb-6'>
                {selectedProducts.map(product => <Product key={product.id}
                    product={product}></Product>)}
            </div>

        </div>
    );
};

export default Notes;