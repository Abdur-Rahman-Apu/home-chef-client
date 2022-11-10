import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Services/Service/Service';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Banner from '../Banner/Banner';
import Packaging from '../../../Assets/Serve/packaging.jpg'
import Packed from '../../../Assets/Serve/packed.jpg'
import Serve from '../../../Assets/Serve/Hot-food-008.webp'

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


            {/* Food serve section  */}
            <div className='my-24'>
                <h3 className=' my-10 text-center text-3xl font-bold tracking-widest'>How Your Food Will Serve</h3>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="card w-96 bg-base-100 shadow-lg">
                        <figure className="px-10 pt-10  rounded-full">
                            <img src={Packaging} alt="Packaging" className="rounded" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold text-orange-400">Healthy packaging</h2>
                            <p>100% environment friendly packaging</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-lg">
                        <figure className="px-10 pt-10 ">
                            <img src={Packed} alt="Packaging" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-orange-400 font-bold">Packed With Love</h2>
                            <p>Your food will be delivered with love</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-lg">
                        <figure className="px-10 pt-10  rounded-full">
                            <img src={Packaging} alt="Packaging" className="rounded" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-orange-400 font-bold">Serve Hot Appetite</h2>
                            <p>Promise to deliver very fast</p>

                        </div>
                    </div>
                </div>
            </div>


            {/* stat  */}

            <div className='w-full my-10'>

                <h2 className='text-center uppercase font-bold text-3xl my-10'>See Our Service Stats</h2>
                <div className="stats shadow w-full py-5">

                    <div className="stat place-items-center">
                        <div className="stat-title">Order Completed</div>
                        <div className="stat-value">520</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Pending Orders</div>
                        <div className="stat-value text-yellow-400">5</div>

                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Client Satisfied</div>
                        <div className="stat-value ">90%</div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;