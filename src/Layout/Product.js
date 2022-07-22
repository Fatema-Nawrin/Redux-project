import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/Action/action';

const Product = ({ product }) => {
    const { name, price, img, id } = product;
    const dispatch = useDispatch()
    return (
        <div className="card bg-base-100 shadow-xl p-3">
            <figure><img className='h-96 w-full rounded-xl' src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title text-blue-400">{name}</h2>
                <p className='pb-4'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn border-none bg-blue-400" onClick={() => dispatch(addProduct(product))}>Add to Bag <FontAwesomeIcon className='pl-2' icon={faShoppingBag}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Product;