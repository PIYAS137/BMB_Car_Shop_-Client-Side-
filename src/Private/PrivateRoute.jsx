import { useContext } from "react"
import { FirebaseAuthContext } from "../Context/FirebaseContext"
import { Navigate, useLoaderData, useLocation } from "react-router-dom"


const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(FirebaseAuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
        return(
            <div className=" flex justify-center items-center h-screen">
               <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'/>
    
}

export default PrivateRoute