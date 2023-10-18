

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
import Server from '../Components/Server'

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
            },
            {
                path:'/discover/:brand',
                
                loader:({params})=>fetch(`http://localhost:5020/${params.brand}`),
                element:<DynamicCompany/>
            },
            {
                path:'/oneCarDet',
                element:<DynamicOneCarPage/>
            }
            ,{
                path:'/discover',
                loader:()=>fetch('http://localhost:5020/category'),
                element:<AllCompanyLogo/>
            },{
                path:'/server',
                element:<Server/>
            }
        ]
    }
])



export default router ;