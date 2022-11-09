import { createBrowserRouter } from "react-router-dom"
import Blog from "../../Components/Blog/Blog"
import Login from "../../Components/Login/Login"
import Register from "../../Components/Register/Register"
import ServiceDetails from "../../Components/ServiceDetails/ServiceDetails"
import Services from "../../Components/Services/Services/Services"
import Main from "../../Layouts/Main"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

        ]
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
        path: '/service/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
    },

])

