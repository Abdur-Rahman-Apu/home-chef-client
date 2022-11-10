import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReview from '../MyReview/MyReview';
import '../MyReview/MyReview.css'

const MyReviews = () => {

    document.title = "HomeChef - My Reviews"
    const { user, logOut } = useContext(AuthContext)

    const navigate = useNavigate()

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data);
            })
            .catch(error => console.log(error))
    }, [user?.email])


    // delete 

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== id)
                    setReviews(remaining)
                    toast.success("deleted successfully")
                }
            })
    }
    // update 

    const [msg, setMsg] = useState("")
    const updateReview = (event, id) => {
        event.preventDefault()
        console.log(id);
        const form = event.target;
        const review = form.message.value;
        console.log("clicked", review);
        console.log("update value", id);
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ message: review })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // setMsg(review)
                    toast.success("Updated successfully")
                }
            })
            .catch(error => toast.error(error.message))

        form.reset()

    }



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

                                    {
                                        reviews.map(review => <MyReview key={review._id} review={review} msg={msg} handleDelete={handleDelete} updateReview={updateReview}></MyReview>)
                                    }

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

export default MyReviews;