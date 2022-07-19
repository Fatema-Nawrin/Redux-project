import { AnimatePresence } from 'framer-motion';
import React from 'react';
import AllProducts from './AllProducts';

const Home = () => {
    return (
        <AnimatePresence>
            <div className='bg-blue-50'>
                <AllProducts></AllProducts>
            </div>
        </AnimatePresence>
    );
};

export default Home;