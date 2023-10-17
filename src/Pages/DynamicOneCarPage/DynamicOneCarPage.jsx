import { useNavigate } from "react-router-dom"


const DynamicOneCarPage = () => {
    const navigate = useNavigate()



    const handleBackPage=()=>{
        navigate(-1)
    }

    return (
        <div className=" max-w-7xl mx-auto py-20">
            <div className="grid gap-10 grid-cols-3">
                <div className=" col-span-2 rounded-xl overflow-hidden">
                    <img src="https://i.ibb.co/f0YCWVM/wallpaperflare-com-wallpaper-8.jpg" alt="" />
                </div>
                <div className=" col-span-1  items-center justify-center flex flex-col">
                    <h1 className=" text-3xl mb-5 text-red-500 font-bold">Brand Name : Default Name</h1>
                    <h1 className=" text-xl mb-5 font-bold">Model Name : Default Name</h1>
                    <h1 className="w-full text-center text-lg bg-red-500 p-3 rounded-xl text-white font-semibold">PRICE : $ 10000</h1>
                    <button className="w-full text-center text-lg bg-orange-500 dark:bg-orange-600 dark:text-white mt-3 p-3 rounded-xl text-black font-semibold">Add to Cart</button>
                    <button onClickCapture={handleBackPage} className="w-full text-center text-lg bg-blue-400 dark:bg-blue-900 dark:text-white mt-3 p-3 rounded-xl font-semibold">Discover More</button>
                    
                </div>
                
            </div>
            <div className="border w-full rounded-xl mt-20 p-4">
                        <h1 className=" border-b py-2 text-lg">Milage : 45L</h1>
                        <h1 className=" border-b py-2 text-lg">Fuel Type : Desel</h1>
                        <h1 className=" border-b py-2 text-lg">Fuel Tank Capacity : 50L</h1>
                        <h1 className=" border-b py-2 text-lg">Universal Rating : 5 star</h1>
                        <h1 className=" border-b py-2 text-lg">Release Date : 12 sep 2023</h1>
                        <div>Summary : <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus molestiae saepe excepturi delectus voluptatem harum mollitia odit eum sed aliquam fugiat quod, dolor consequuntur, placeat deleniti consequatur officiis possimus praesentium?</p></div>
                    </div>
        </div>
    )
}

export default DynamicOneCarPage