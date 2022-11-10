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
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    }, [user?.email])


    // delete 

    const handleDelete = (serviceId) => {
        fetch(`http://localhost:5000/reviews/${serviceId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = reviews.filter(review => review.serviceId != serviceId)
                    setReviews(remaining)
                    toast.success("deleted successfully")
                }
            })
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
                                        reviews.map(review => <MyReview key={review._id} review={review} handleDelete={handleDelete}></MyReview>)
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