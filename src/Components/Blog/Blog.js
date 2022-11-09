import React from 'react';

const Blog = () => {

    document.title = "HomeChef - Blog"

    return (
        <div>

            <h1 className='text-3xl font-bold my-10 text-center'>Increase your knowledge</h1>


            <div className='w-3/4 mx-auto'>

                {/* question 1 */}
                <div className="collapse collapse-arrow font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title ">
                        <p><span>Question 1: </span> Difference between SQL and NoSQL</p>
                    </div>
                    <div className="collapse-content border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className='p-5'>hello</p>
                    </div>
                </div>

                {/* question 2 */}
                <div className="collapse collapse-arrow font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title ">
                        <p><span>Question 2: </span> What is JWT, and how does it work?</p>
                    </div>
                    <div className="collapse-content border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className='p-5'>hello</p>
                    </div>
                </div>

                {/* question 3 */}
                <div className="collapse collapse-arrow font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title ">
                        <p><span>Question 3: </span> What is the difference between javascript and NodeJS?</p>
                    </div>
                    <div className="collapse-content border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className='p-5'>hello</p>
                    </div>
                </div>

                {/* question 4 */}
                <div className="collapse collapse-arrow font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title ">
                        <p><span>Question 4: </span> How does NodeJS handle multiple requests at the same time?</p>
                    </div>
                    <div className="collapse-content border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className='p-5'>hello</p>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Blog;