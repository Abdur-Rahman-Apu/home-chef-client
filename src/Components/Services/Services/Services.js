import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])

    return (
        <div className='mx-4'>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;