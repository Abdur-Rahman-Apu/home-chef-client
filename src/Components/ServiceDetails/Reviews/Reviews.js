import React from 'react';

const Reviews = ({ review }) => {

    const { message, rating, userName, userImage, addedTime } = review
    console.log(review);
    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className='flex items-center gap-10'>
                    {/* avatar  */}
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img src={userImage} alt="avatar" />
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center items-center gap-5'>
                            <h4 class="text-2xl font-bold dark:text-white">{userName}</h4>
                            <p class="font-light text-gray-500 dark:text-gray-400">
                                {addedTime}
                            </p>
                        </div>
                        <p className='text-sans'>{message}</p>
                    </div>
                </div>
            </th>
            <td class="py-4 px-6 flex gap-1">
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <p>{rating}</p>
            </td>


        </tr>
    );
};

export default Reviews;