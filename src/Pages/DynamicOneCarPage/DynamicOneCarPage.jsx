
import { useEffect, useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'


const DynamicOneCarPage = () => {
    const navigate = useNavigate()
    const loadedData = useLoaderData()
    const { modelName, img, price, rating, description: des, milage, fuelType, company, fuelTankCapacity, seatingCapacity, release, speed, cylinder, torque, hp } = loadedData;
    const [carts, setCarts] = useState([])

    const handleBackPage = () => {
        navigate(-1)
    }

    useEffect(() => {
        fetch('https://bmb-cars-shop-ikqz8auq1-piyass-projects.vercel.app/cart/get')
            .then(res => res.json())
            .then(res => setCarts(res))
            .catch(err => console.log(err))
    }, [carts])

    const handleCart = () => {
        const CreateCartProduct = {
            m_data: loadedData,
            quan: 1
        }
        const x = carts.filter(one => one.m_data._id == loadedData._id)
        if (x.length > 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Already Added to Cart !',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            fetch('https://bmb-cars-shop-ikqz8auq1-piyass-projects.vercel.app/cart/post', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(CreateCartProduct)
            }).then(res => res.json())
                .then(res => {
                    if (res.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Sucessfully added to Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }).catch(err => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'info',
                        title: `${err.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        }



    }

    return (
        <div className=" max-w-7xl mx-auto py-10 md:py-20">
            <div className="grid gap-10 px-2 md:px-0 lg:grid-cols-3">
                <div className="px-2 lg:col-span-2 rounded-xl overflow-hidden">
                    <img className="w-full" src={img} alt="" />

                </div>
                <div className="mx-auto text-center md:text-left lg:col-span-1  items-center justify-center flex flex-col">
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