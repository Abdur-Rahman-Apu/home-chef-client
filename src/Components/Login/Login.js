import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../Assets/Google logo/google.svg'
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    document.title = "HomeChef - Log in"

    const { user, logIn, setUser, googleLogIn, resetPassword, loading } = useContext(AuthContext)

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
                const currentUser = {
                    email: user?.email
                }
                console.log(currentUser);

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        localStorage.setItem('genius-token', data.token)
                        navigate(from, { replace: true })
                    })
                    .catch(error => console.log(error))
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

    console.log(loading);

    if (loading) {
        return <div class="text-center">
            <div role="status">
                <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    } else {
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
    }
};

export default Login;