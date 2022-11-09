import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../Shared/Navbar/Navbar';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Footer from '../../Shared/Footer/Footer';


const ServiceDetails = () => {

    document.title = "HomeChef - Service Details"

    const { user } = useContext(AuthContext);

    const data = useLoaderData()
    const { available, deliveryCharge, description, price, serviceId, title, _id, image, rating } = data;

    const { ingredients, procedure, shortDescription } = description;

    const steps = procedure.split(',')
    console.log(steps);
    console.log(data);
    return (
        <div>


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


                {/* Other reviews  */}
                <div>
                    <h1 className='text-3xl text-center text-yellow-400 font-bold my-5'>Customer Reviews</h1>


                    <div class="overflow-x-auto  relative ">
                        <table class="w-2/4 mx-auto mt-5 text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>

                                    <th scope="col" class="py-3 px-6">
                                        Review
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Rating
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className='flex items-center gap-10'>
                                            {/* avatar  */}
                                            <div className="avatar">
                                                <div className="w-20 rounded-full">
                                                    <img src="https://placeimg.com/192/192/people" alt="avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className='flex justify-center items-center gap-5'>
                                                    <h4 class="text-2xl font-bold dark:text-white">Tom</h4>
                                                    <p class="font-light text-gray-500 dark:text-gray-400">
                                                        23/12/2023
                                                    </p>
                                                </div>
                                                <p className='text-sans'>Review</p>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="py-4 px-6 flex gap-1">
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <p>3.4</p>
                                    </td>


                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>


                {/* add review  */}

                <div className='mb-10'>

                    <h1 className='text-3xl mt-10   font-bold my-5'>Add Your Review</h1>

                    {
                        user?.email ?
                            <form >
                                <div className='w-1/2'>

                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Review</label>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your review..."></textarea>

                                </div>

                                <div className='my-5'>
                                    <label for="rating" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Rating</label>
                                    <input id="rating" type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                                </div>

                                <input className="btn btn-warning" type="submit" value="Add" />
                            </form>

                            :
                            <p className='text-center text-gray-400 font-bold'>Please Log In first</p>
                    }
                </div>

            </div>


        </div>
    );
};

export default ServiceDetails;