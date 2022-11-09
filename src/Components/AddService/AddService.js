import React from 'react';

const AddService = () => {
    return (
        <div>
            <h1 className='text-3xl text-center'>Add a service</h1>

            <div className='mx-10 my-10'>
                <form >



                    <div className='my-5'>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Service Name</label>
                        <input id="title" type="text" placeholder="Service Name" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Image</label>
                        <input id="image" type="text" placeholder="Enter image url" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="shortDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Short Description</label>
                        <input id="shortDescription" type="text" placeholder="Short description" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="ingredients" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Ingredients</label>
                        <input id="rating" type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Rating</label>
                        <input id="rating" type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Rating</label>
                        <input id="rating" type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                    </div>

                    <input className="btn btn-warning" type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddService;