import React from 'react';

const AddService = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold my-5 text-center'>Add a service</h1>

            <div className='mx-10 my-10'>
                <form >

                    <div className='my-5'>
                        <label htmlFor="title" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Service Name</label>
                        <input id="title" type="text" placeholder="Service Name" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="image" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Image</label>
                        <input id="image" type="text" placeholder="Enter image url" className="input input-bordered input-md w-full " />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="shortDescription" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Short Description</label>
                        <textarea id="shortDescription" rows="4" type="text" placeholder="Short description" className="input input-bordered input-md w-full " />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="ingredients" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Ingredients</label>
                        <textarea id="ingredients" rows="4" type="text" placeholder="Type here" className="input input-bordered input-md w-full" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="procedure" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Procedure</label>
                        <textarea id="procedure" rows="4" type="text" placeholder="Enter process of making this item" className="input input-bordered input-md w-full " />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="available" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Available</label>
                        <input id="available" type="text" placeholder="Ex- at launch time" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="deliveryCharge" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Delivery Charge</label>
                        <input id="deliveryCharge" type="text" placeholder="Ex- 60" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="rating" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Rating</label>
                        <input id="rating" type="text" placeholder="Ex- 4.8" className="input input-bordered input-md w-full max-w-xs" />
                    </div>



                    <input className="btn btn-warning" type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddService;