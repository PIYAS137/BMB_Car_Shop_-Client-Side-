

import { createBrowserRouter } from 'react-router-dom'
import RootPage from '../Pages/RootPage/RootPage'
import HomePage from '../Pages/HomePage/HomePage'
import LogInPage from '../Pages/LogInPage/LogInPage'
import CartPage from '../Pages/CartPage/CartPage'
import AddProductPage from '../Pages/AddProductPage/AddProductPage'
import UpdateProductPage from '../Pages/UpdateProductPage/UpdateProductPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage'

const router = createBrowserRouter([
    {
        path:"/",
        element:<RootPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/login',
                element:<LogInPage/>
            },
            {
                path:'/register',
                element:<RegisterPage/>
            },
            {
                path:'/cart',
                element:<CartPage/>
            },
            {
                path:'/addproduct',
                element:<AddProductPage/>
            },
            {
                path:'/updateproduct',
                element:<UpdateProductPage/>
            }
        ]
    }
])



export default router ;