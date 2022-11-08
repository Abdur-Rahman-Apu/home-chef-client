import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='mx-8'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;