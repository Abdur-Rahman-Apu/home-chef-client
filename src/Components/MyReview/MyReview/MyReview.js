import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const MyReview = ({ review, handleDelete, updateReview }) => {

    const { message, serviceId, _id } = review;
    console.log(_id);
    const [service, setService] = useState([])

    const [msg, setMsg] = useState(message)
    console.log("review", review);

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setService(data)
            })
    }, [])

    console.log(service);
    const { title, image } = service;








    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {title}
            </th>

            <td className="py-4 px-6">
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={image} alt='img' />
                    </div>
                </div>
            </td>

            <td className="py-4 px-6">
                {msg}
            </td>

            <td className="flex items-center py-4 px-6 space-x-3">

                {/* Edit  */}
                {/* <button htmlFor="my-modal-3" className="font-medium text-blue-600 dark:text-blue-500 cursor-pointer hover:underline">Edit</button>

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <form onSubmit={() => updateReview(_id)}>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Review</label>
                            <textarea id="message" name='message' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your review..."></textarea>

                            <input className='btn bg-yellow-400 border-0 mt-5' type="submit" value="Update" />
                        </form>

                    </div>
                </div> */}

                <Link to={`/changeReview/${_id}`}>Edit</Link>


                {/* remove  */}
                <button onClick={() => handleDelete(_id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
            </td>
        </tr>


    );
};

export default MyReview;