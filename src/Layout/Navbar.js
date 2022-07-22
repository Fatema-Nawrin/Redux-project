import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><Link to='/home'>Home </Link> </li>
                        <li><Link to='/notes'>Fragrance-Notes</Link> </li>
                        <li><Link to='/cart'>Bag <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link> </li>

                    </ul>
                </div>
                <h2 className="font-medium px-2 text-3xl lg:text-4xl lg:pl-8">Aromallure</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal m-4 p-0">
                    <li><Link to='/home'>Home </Link> </li>
                    <li><Link to='/notes'>Fragrance-Notes</Link> </li>
                    <li><Link to='/cart'>Bag <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon> </Link> </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;