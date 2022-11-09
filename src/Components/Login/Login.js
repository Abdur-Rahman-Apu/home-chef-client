import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../Assets/Google logo/google.svg'
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    document.title = "HomeChef - Log in"

    const { user, logIn, setUser, googleLogIn, resetPassword } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from.pathname || '/'

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                toast.success("Log in Successfully")
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))

    }


    // handle google log in 
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Successfully log in")
            })
            .catch(error => console.log(error))
    }

    //forget password
    const handleResetPassword = (event) => {
        const form = event.target.parentElement.parentElement;
        console.log(form);
        const email = form?.email?.value;
        console.log(email);

        if (email) {
            resetPassword(email)
                .then(() => {
                    toast.success("Check your email to reset password")
                })
                .catch(error => {
                    toast.error("Unsuccessfully, password is not reset.")
                })
        } else {
            toast.error("Please enter your email to reset password")
        }

    }
    return (
        <div>


            <div className='flex justify-center my-10'>
                <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleLogIn} class="space-y-6" action="#">
                        <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">Sign in to HouseChef</h5>
                        <div>
                            <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <div class="flex items-start">
                            <button onClick={handleResetPassword} class=" text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</button>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link to="/register" class="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                        </div>
                    </form>

                    <div
                        class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p class="text-center font-semibold mx-4 mb-0">OR</p>
                    </div>

                    <button onClick={handleGoogleLogIn} className='text-center w-full card flex-row h-11  bg-base-100 border shadow-lg justify-center items-center'>
                        <img className='h-7 mr-2' src={google} alt="google" />
                        Log in with google

                    </button>
                </div>
            </div>



        </div>


    );
};

export default Login;