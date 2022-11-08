import React, { useEffect, useState } from 'react';
import Service from '../../Services/Service/Service';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {


    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services?show=3')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])
    return (
        <div className='mx-8'>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='mt-10'>
                <div className="service-title text-center">
                    <h1 className='font-bold text-orange-600 tracking-widest'>WHAT I SERVE</h1>
                    <p className='text-5xl font-extrabold dark:text-white mt-4'>Explore Your Favorite <br /> Food</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;