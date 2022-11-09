import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Shared/Navbar/Navbar';

const ServiceDetails = () => {
    const data = useLoaderData()
    const { available, deliveryCharge, description, price, serviceId, title, _id, image, rating } = data;

    const { ingredients, procedure, shortDescription } = description;

    const steps = procedure.split(',')
    console.log(steps);
    console.log(data);
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <h1 className='text-4xl text-center mt-4 font-extrabold dark:text-white'>Product Details</h1>
            </div>

            {/* image  */}
            <div className='mt-10 flex justify-center'>
                <img src={image} className="w-1/3 rounded" alt="img" />
            </div>

            {/* title  */}
            <div className='mx-10'>
                <div>

                    <h3 className='text-4xl mt-4 font-extrabold dark:text-white'>{title}</h3>
                    <p className='font-bold'>
                        <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-400 mt-4 " />
                        {rating}
                    </p>

                    <div className='flex justify-between mt-5 w-full'>
                        <div>
                            <p className='text-base font-bold'>Size</p>
                            <p className='font-bold text-xl text-green-400'>1 Plate</p>
                        </div>
                        <div>
                            <p className='text-base font-bold'>Time</p>
                            <p className='font-bold text-xl text-green-400'>30 Mins</p>
                        </div>
                        <div>
                            <p className='text-base font-bold'>Price</p>
                            <p className='font-bold text-xl text-green-400'>${price}</p>
                        </div>
                    </div>
                </div>


                {/* description  */}
                <div className='mt-10'>
                    <p className='text-3xl font-bold mb-5'>Description</p>
                    <p className='mb-3 text-justify font-sans text-gray-800 dark:text-gray-400'>{shortDescription}</p>
                </div>

                {/* ingredients  */}
                <div className='mt-10'>
                    <p className='text-3xl font-bold mb-5'>Ingredients</p>

                    <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
                        {
                            ingredients.map(item => <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 mr-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                {item}
                            </li>)
                        }
                    </ul>

                </div>

                {/* procedure */}
                <div className='mt-10'>
                    <p className='text-3xl font-bold mb-5'>Procedure</p>

                    <p className='text-base font-sans'>
                        {
                            steps.map((step, index) => <dl key={index} class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                <div class="flex flex-col pb-3">
                                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Steps {index + 1}</dt>
                                    <dd class="text-lg font-semibold">{step}</dd>
                                </div>

                            </dl>)
                        }
                    </p>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;