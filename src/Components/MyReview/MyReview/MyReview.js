import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './MyReview.css'

const MyReview = () => {

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
                                            Sliver
                                        </td>

                                        <td className="flex items-center py-4 px-6 space-x-3">

                                            {/* Edit  */}
                                            <label htmlFor="my-modal-3" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</label>

                                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box relative">
                                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

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