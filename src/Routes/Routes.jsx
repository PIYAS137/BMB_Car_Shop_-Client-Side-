

import { createBrowserRouter } from 'react-router-dom'
import RootPage from '../Pages/RootPage/RootPage'
import HomePage from '../Pages/HomePage/HomePage'
import LogInPage from '../Pages/LogInPage/LogInPage'
import CartPage from '../Pages/CartPage/CartPage'
import AddProductPage from '../Pages/AddProductPage/AddProductPage'
import UpdateProductPage from '../Pages/UpdateProductPage/UpdateProductPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage'
import DynamicCompany from '../Pages/DynamicCompanyPage/DynamicCompany'
import DynamicOneCarPage from '../Pages/DynamicOneCarPage/DynamicOneCarPage'
import AllCompanyLogo from '../Pages/AllCompanyLogo/AllCompanyLogo'
import PrivateRoute from '../Private/PrivateRoute'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'

const router = createBrowserRouter([
    {
        path:"/",
        element:<RootPage/>,
        errorElement:<ErrorPage/>,
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
                element:<PrivateRoute><CartPage/></PrivateRoute>
            },
            {
                path:'/addproduct',
                element:<PrivateRoute><AddProductPage/></PrivateRoute>
            },
            {
                path:`discover/:company/updateproduct/:sid`,
                loader:({params})=>fetch(`http://localhost:5020/getCar/${params.sid}`),
                element:<PrivateRoute><UpdateProductPage/></PrivateRoute>
            },
            {
                path:'/discover/:brand',
                
                loader:({params})=>fetch(`http://localhost:5020/${params.brand}`),
                element:<DynamicCompany/>
            },
            {
                path:`discover/:company/:sid`,
                loader:({params})=>fetch(`http://localhost:5020/getCar/${params.sid}`),
                element:<PrivateRoute><DynamicOneCarPage/></PrivateRoute>
            }
            ,{
                path:'/discover',
                loader:()=>fetch('http://localhost:5020/category'),
                element:<AllCompanyLogo/>
            }
        ]
    }
])



export default router ;