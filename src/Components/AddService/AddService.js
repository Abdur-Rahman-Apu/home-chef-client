import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const AddService = () => {

    document.title = "HomeChef - Add Service"

    const { user } = useContext(AuthContext)

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://homechef.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const handleAddUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const shortDescription = form.shortDescription.value;
        const ingredients = (form.ingredients.value).split(',');
        const procedure = form.procedure.value;
        const available = form.available.value;
        const deliveryCharge = form.deliveryCharge.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const serviceId = services.length + 1;



        console.log(title, image, shortDescription, ingredients, procedure, available, deliveryCharge, rating);

        const description = {
            "shortDescription": shortDescription,
            "ingredients": ingredients,
            "procedure": procedure
        }
        const service = {
            title,
            image,
            description,
            price,
            available,
            deliveryCharge,
            rating,
            serviceId
        }

        fetch(`https://homechef.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(data => {
                if (data.status === 200) {
                    toast.success("Service is added successfully")
                } else {
                    toast.error("Unfortunately, service is not added")
                }
            })
            .catch(error => toast.error(error.message))




        form.reset()
    }

    return (
        <div>
            <h1 className='text-5xl font-bold my-5 text-center'>Add a service</h1>

            <div className='mx-10 my-10'>
                <form onSubmit={handleAddUser} >

                    <div className='my-5'>
                        <label htmlFor="title" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Service Name</label>
                        <input name='title' id="title" type="text" placeholder="Service Name" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="image" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Image</label>
                        <input name='image' id="image" type="text" placeholder="Enter image url" className="input input-bordered input-md w-full " />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="shortDescription" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Short Description</label>
                        <textarea name="shortDescription" id="shortDescription" rows="4" type="text" placeholder="Short description" className="input input-bordered input-md w-full " />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="ingredients" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Ingredients</label>
                        <textarea name='ingredients' id="ingredients" rows="4" type="text" placeholder="Add ingredients using comma" className="input input-bordered input-md w-full" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="procedure" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Procedure</label>
                        <textarea name='procedure' id="procedure" rows="4" type="text" placeholder="Enter process of making this item" className="input input-bordered input-md w-full " />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="available" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Available</label>
                        <input name='available' id="available" type="text" placeholder="Ex- at launch time" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="price" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Price</label>
                        <input name='price' id="price" type="text" placeholder="Ex- at launch time" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="deliveryCharge" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Delivery Charge</label>
                        <input name="deliveryCharge" id="deliveryCharge" type="text" placeholder="Ex- 60" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="rating" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Rating</label>
                        <input name='rating' id="rating" type="text" placeholder="Ex- 4.8" className="input input-bordered input-md w-full max-w-xs" />
                    </div>



                    <input className="btn btn-warning" type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddService;