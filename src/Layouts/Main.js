import React from 'react';
import Home from '../Components/Home/Home/Home';
import Footer from '../Components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;