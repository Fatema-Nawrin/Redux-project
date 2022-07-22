import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../Redux/Action/action';
import { Link } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartReducer);
    const addToCart = product => {
        dispatch(addProduct(product))
    }
    const removeFromCart = product => {
        dispatch(removeProduct(product))
    }
    let total = 0;
    state.forEach(item => { total = total + item.price * item.qty })

    return (
        <div className='w-11/12 lg:w-9/12 mx-auto h-screen'>
            <h2 className='text-center text-2xl py-6 font-medium'>Cart</h2>
            {
                state.length !== 0
                    ?
                    <div> {
                        state.map(item => (
                            <div key={item.id} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                <div className='flex'>
                                    <img src={item.img} className="h-20 w-20 m-4" alt="" />
                                    <h3 className='lg:text-lg mt-10'>{item.name}</h3>
                                </div>
                                <div className='flex justify-center items-center mb-4 md:mb-0'>
                                    <table className="table border-black border-2 table-compact">
                                        <tbody>
                                            <tr>
                                                <td><button onClick={() => removeFromCart(item)}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button></td>
                                                <td className="border-2 border-black lg:text-lg">{item.qty}</td>
                                                <td> <button onClick={() => addToCart(item)}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <h3 className='text-lg font-medium'>${item.price * item.qty}</h3>
                                </div>
                            </div>

                        ))
                    }
                        <div className='py-4 text-lg flex justify-center'>
                            <h3 className='font-semibold'>Total: ${total}</h3>
                        </div>
                    </div>
                    :
                    <div className='flex justify-center items-center py-7'>
                        <h2>Your shopping bag is empty. Check our products <Link to="/home" className='font-bold'>here.</Link></h2>
                    </div>
            }


        </div >

    );
};

export default Cart;