import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './MyReview.css'

const MyReview = () => {

    document.title = "HomeChef - My Review"
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-5 mb-10'>My Review</h1>

            <div className='mx-10 '>

                {
                    user?.email ?
                        <div class="relative shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>

                                        <th scope="col" className="py-3 px-6">
                                            Service name
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Service image
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Review
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17"
                                        </th>

                                        <td className="py-4 px-6">
                                            <div className="avatar">
                                                <div className="w-24 rounded-xl">
                                                    <img src="https://placeimg.com/192/192/people" alt='img' />
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-4 px-6">
                                            Sliver
                                        </td>

                                        <td className="flex items-center py-4 px-6 space-x-3">

                                            {/* Edit  */}
                                            <label htmlFor="my-modal-3" className="font-medium text-blue-600 dark:text-blue-500 cursor-pointer hover:underline">Edit</label>

                                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box relative">
                                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                                    <form>
                                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Review</label>
                                                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your review..."></textarea>

                                                        <input className='btn bg-yellow-400 border-0 mt-5' type="submit" value="Update" />
                                                    </form>

                                                </div>
                                            </div>


                                            {/* remove  */}
                                            <Link to="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</Link>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        :

                        <div className='flex items-center justify-center no-review'>
                            <p className='text-gray-600 font-sans font-bold'>No reviews were added</p>
                        </div>

                }

            </div>
        </div>
    );
};

export default MyReview;