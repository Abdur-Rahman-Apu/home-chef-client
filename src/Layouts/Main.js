import React from 'react';
import Footer from '../Components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;