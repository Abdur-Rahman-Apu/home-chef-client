import { createBrowserRouter } from "react-router-dom"
import Blog from "../../Components/Blog/Blog"
import Login from "../../Components/Login/Login"
import Register from "../../Components/Register/Register"
import ServiceDetails from "../../Components/ServiceDetails/ServiceDetails/ServiceDetails"
import Services from "../../Components/Services/Services/Services"
import Main from "../../Layouts/Main"
import Home from "../../Components/Home/Home/Home"
import AddService from "../../Components/AddService/AddService"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import ErrorPage from "../../Components/ErrorPage/ErrorPage"
import MyReviews from "../../Components/MyReview/MyReviews/MyReviews"
import ChangeReview from "../../Components/MyReview/ChangeReview/ChangeReview"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/changeReview/:id',
                element: <ChangeReview></ChangeReview>,
                loader: ({ params }) => fetch(`https://homechef.vercel.app/changeReview/${params.id}`)
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://homechef.vercel.app/service/${params.id}`)
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }


])

