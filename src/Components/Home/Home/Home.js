import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Services/Service/Service';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Banner from '../Banner/Banner';

const Home = () => {

    document.title = "HomeChef - Home"

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

            <Banner></Banner>
            <div className='mt-10'>
                <div className="service-title text-center">
                    <h1 className='font-bold text-orange-600 tracking-widest'>WHAT I SERVE</h1>
                    <p className='text-5xl font-extrabold dark:text-white mt-4'>Explore Your Favorite <br /> Food</p>
                </div>
                <PhotoProvider speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                        {
                            services.map((service, index) => <Service key={service.index} service={service}></Service>)
                        }
                    </div>
                </PhotoProvider>

                <div className='text-center'>
                    <Link to="/services" className="text-black bg-yellow-400 hover:bg-yellow-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See All</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;