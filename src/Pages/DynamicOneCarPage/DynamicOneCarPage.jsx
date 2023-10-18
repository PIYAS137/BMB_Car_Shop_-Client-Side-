import { useContext } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import { FirebaseAuthContext } from "../../Context/FirebaseContext"
import Swal from 'sweetalert2'


const DynamicOneCarPage = () => {
    const navigate = useNavigate()
    const loadedData = useLoaderData()
    const { AddProductToCart } = useContext(FirebaseAuthContext)
    const { modelName, img, price, rating, description: des, milage, fuelType, company, fuelTankCapacity, seatingCapacity, release, speed, cylinder, torque, hp } = loadedData;


    const handleBackPage = () => {
        navigate(-1)
    }

    const handleCart = () => {
        const x = AddProductToCart(loadedData._id)
        if (x !== -1) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Sucessfully added to Cart',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'info',
                title: 'Already Added Item !',
                showConfirmButton: false,
                timer: 1500
              })
        }

    }

    return (
        <div className=" max-w-7xl mx-auto py-20">
            <div className="grid gap-10 grid-cols-3">
                <div className=" col-span-2 rounded-xl overflow-hidden">
                    <img className="w-full" src={img} alt="" />

                </div>
                <div className=" col-span-1  items-center justify-center flex flex-col">
                    <h1 className=" text-3xl mb-5 text-red-500 font-bold">Brand Name : {company}</h1>
                    <h1 className=" text-xl mb-5 font-bold">Model Name : {modelName}</h1>
                    <h1 className="w-full text-center text-lg bg-red-500 p-3 rounded-xl text-white font-semibold">PRICE : ${price}</h1>
                    <button onClick={handleCart} className="w-full text-center text-lg bg-orange-500 dark:bg-orange-600 dark:text-white mt-3 p-3 rounded-xl text-black font-semibold">Add to Cart</button>
                    <button onClickCapture={handleBackPage} className="w-full text-center text-lg bg-blue-400 dark:bg-blue-900 dark:text-white mt-3 p-3 rounded-xl font-semibold">Discover More</button>

                </div>

            </div>
            <div className="border w-full rounded-xl mt-20 p-4">
                <h1 className=" border-b py-2 text-lg">Milage : {milage}L</h1>
                <h1 className=" border-b py-2 text-lg">Fuel Type : {fuelType}</h1>
                <h1 className=" border-b py-2 text-lg">Fuel Tank Capacity : {fuelTankCapacity}L</h1>
                <h1 className=" border-b py-2 text-lg">Universal Rating : {rating} star</h1>
                <h1 className=" border-b py-2 text-lg">Release Date : {release}</h1>
                <h1 className=" border-b py-2 text-lg">Seating Capacity : {seatingCapacity} Human</h1>
                <h1 className=" border-b py-2 text-lg">Max Speed : {speed} K/ph</h1>
                <h1 className=" border-b py-2 text-lg">Cylinder Capacity : {cylinder}L</h1>
                <h1 className=" border-b py-2 text-lg">Torque : {torque} RPM</h1>
                <h1 className=" border-b py-2 text-lg">Engine : {hp} CC</h1>
                <div><span className=" font-bold">Summary :</span> <p>{des}</p></div>
            </div>
        </div>
    )
}

export default DynamicOneCarPage