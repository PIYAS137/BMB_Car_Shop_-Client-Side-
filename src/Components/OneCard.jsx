import { Link } from "react-router-dom"


const OneCard = ({data}) => {
    return (
        <div className="card card-compact bg-base-100 rounded-xl overflow-hidden shadow-xl">
            <figure className=" max-h-60 relative">
                <span className=" absolute top-2 right-2 bg-white text-black rounded-lg font-semibold text-sm p-1 px-3">{data.company}</span>
                <img src={data?.img} alt="Shoes" />
            </figure>
            <div className="card-body dark:text-black">
                <h2 className="card-title font-bold ">{data.modelName}!</h2>
                <div className="flex justify-between text-lg font-semibold">
                    <span>Price $ {data.price}</span>
                    <span>Rating {data.rating}</span>
                </div>
                <div className="card-actions mt-3 justify-center">
                    <Link to={`/discover/${data.company}/${data._id}`}><button className="btn btn-primary">Details</button></Link>
                    <Link to={`/discover/${data.company}/updateproduct/${data._id}`}><button className="btn btn-primary">Update</button></Link>
                </div>
            </div>
        </div>
    )
}

export default OneCard