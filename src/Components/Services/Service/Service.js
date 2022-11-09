import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
    const { _id, title, image, price, description } = service;

    const { shortDescription } = description;
    console.log(service);
    return (

        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10 ">

            <PhotoView src={image}>
                <img className="rounded-t-lg h-64 w-full" src={image} alt="" />
            </PhotoView>
            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{shortDescription.split("").slice(0, 100).join("") + " ..."}</p>


                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {price}</span>
                    <Link to={`/service/${_id}`} className="text-black bg-yellow-400 hover:bg-yellow-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
                </div>
            </div>
        </div>


    );
};

export default Service;