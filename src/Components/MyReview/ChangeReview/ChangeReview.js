import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const ChangeReview = () => {
    const data = useLoaderData()
    console.log("change review", data);

    const { serviceId, _id, message } = data;

    const updateReview = (event) => {
        event.preventDefault()
        const form = event.target;
        const review = form.message.value;
        console.log(message);

        fetch(`http://localhost:5000/changeReview/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ message: review })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    toast.success("Updated successfully")
                }
            })
            .catch(error => toast.error(error.message))

        form.reset()
    }
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>Change your review of Service no :{serviceId}</h1>
            <form className='w-1/2 mx-auto mt-10' onSubmit={updateReview}>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Review</label>
                <textarea id="message" name='message' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your review..."></textarea>

                <input className='btn bg-yellow-400 border-0 mt-5' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default ChangeReview;