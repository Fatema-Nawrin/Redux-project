import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = ({ product }) => {
    const { name, price, img } = product
    return (
        <div class="card bg-base-100 shadow-xl p-3">
            <figure><img className='h-96 w-full rounded-xl' src={img} alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title text-blue-900">{name}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <p className='pb-4'>Price: ${price}</p>
                <div class="card-actions justify-end">
                    <button class="btn bg-blue-900">Add to Cart <FontAwesomeIcon className='pl-2' icon={faCartShopping}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Product;