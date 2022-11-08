import { createBrowserRouter } from "react-router-dom"
import Blog from "../../Components/Blog/Blog"
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
    }
])

