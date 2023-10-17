

import { createBrowserRouter } from 'react-router-dom'
import RootPage from '../Pages/RootPage/RootPage'
import HomePage from '../Pages/HomePage/HomePage'
import LogInPage from '../Pages/LogInPage/LogInPage'
import CartPage from '../Pages/CartPage/CartPage'
import AddProductPage from '../Pages/AddProductPage/AddProductPage'

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
                path:'/cart',
                element:<CartPage/>
            },
            {
                path:'/addproduct',
                element:<AddProductPage/>
            }
        ]
    }
])



export default router ;