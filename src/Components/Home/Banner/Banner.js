import React from 'react';
import BannerImage from '../../../Assets/Banner/banner-img.jpg';

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row lg:flex basis-2/4 my-8'>
            <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                <div className="title">
                    <h1 className=" text-4xl leading-relaxed uppercase font-extrabold dark:text-white">Hi Mr. Guest</h1>
                    <h1 className=" text-3xl leading-relaxed uppercase font-extrabold text-yellow-400  dark:text-white">Delicious food for your taste</h1>
                </div>
                <div className="sub-title">
                    <p className='my-4 text-gray-500 dark:text-gray-400'> Welcome to my kitchen. Here you will find find which is totally home made.

                        <br />
                        And you will receive your desired food within a very short time</p>
                </div>
                <div>
                    <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Services</button>
                </div>
            </div>
            <div className=" w-full lg:w-1/2">
                <img className='w-full h-full' src={BannerImage} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;