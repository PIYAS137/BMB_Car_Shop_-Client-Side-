import { Link } from "react-router-dom"


const OneCard = () => {
    return (
        <div className="card card-compact bg-base-100 rounded-xl overflow-hidden shadow-xl">
            <figure className=" max-h-60 relative">
                <span className=" absolute top-2 right-2 bg-white text-black rounded-lg font-semibold text-sm p-1 px-3">Company Name</span>
                <img src="https://i.pinimg.com/564x/82/41/1f/82411f1233372834efa6fdb8f0c1fb05.jpg" alt="Shoes" />
            </figure>
            <div className="card-body dark:bg-zinc-800 dark:text-white">
                <h2 className="card-title font-bold ">Model Name!</h2>
                <div className="flex justify-between text-lg font-semibold">
                    <span>Price $ 0000</span>
                    <span>Rating 10 </span>
                </div>
                <div className="card-actions mt-3 justify-center">
                    <Link to='/oneCarDet'><button className="btn btn-primary">Details</button></Link>
                    <Link to='/updateproduct'><button className="btn btn-primary">Update</button></Link>
                </div>
            </div>
        </div>
    )
}

export default OneCard