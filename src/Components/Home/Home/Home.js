import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Services/Service/Service';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Banner from '../Banner/Banner';
import Packaging from '../../../Assets/Serve/packaging.jpg'
import Packed from '../../../Assets/Serve/packed.jpg'
import Serve from '../../../Assets/Serve/Hot-food-008.webp'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Home = () => {

    document.title = "HomeChef - Home"

    const [services, setServices] = useState([])

    const { loading } = useContext(AuthContext)

    useEffect(() => {
        fetch('https://homechef.vercel.app/services?show=3')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])

    if (loading) {
        return <div role="status">
            <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    }
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