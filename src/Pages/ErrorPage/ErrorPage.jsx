import { useNavigate } from "react-router-dom"


const ErrorPage = () => {

    const navigate = useNavigate()
    const handleGoHome=()=>{
        navigate('/')
    }
    
  return (
    <div className=" bg-red-200 h-screen flex justify-center items-center flex-col">
        <h1 className=" text-8xl text-red-600 font-bold">404</h1>
        <p className=" text-4xl my-10 font-bold text-red-400">! ! !</p>
        <button onClick={handleGoHome} className=" btn btn-primary mt-5">Go Back To Home</button>
    </div>
  )
}

export default ErrorPage