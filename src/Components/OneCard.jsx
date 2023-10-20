import { Link } from "react-router-dom"
import Swal from 'sweetalert2'




const OneCard = ({data,deletedItemCount}) => {

    const handleClickDelete=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://bmb-cars-shop-ikqz8auq1-piyass-projects.vercel.app/del/${id}`,{
                    method:"DELETE"
                }).then(res=>res.json())
                .then(res=>{
                    deletedItemCount(id)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }).catch(err=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                })
            }
          })
    }



    return (
        <div className="card card-compact bg-base-100 rounded-xl overflow-hidden shadow-xl">
            <figure className=" max-h-60 relative">
                <span className=" absolute top-2 border right-2 bg-white text-black rounded-lg font-semibold text-sm p-1 px-3">{data.company}</span>
                <img src={data?.img} alt="Shoes" />
            </figure>
            <div className="card-body dark:text-black">
                <h2 className="card-title font-bold ">{data.modelName}!</h2>
                <div className="flex justify-between text-lg font-semibold">
                    <span className=" text-orange-700 font-bold">Price $ {data.price}</span>
                    <span>Rating : {data.rating}</span>
                </div>
                <div className="card-actions mt-3 justify-center justify-between pt-2 mt-auto">
                    <Link to={`/discover/${data.company}/${data._id}`}><button className="btn btn-primary">Details</button></Link>
                    <Link to={`/discover/${data.company}/updateproduct/${data._id}`}><button className="btn btn-primary">Update</button></Link>
                    <button onClick={()=>handleClickDelete(data._id)} className="btn hover:bg-red-400 bg-red-600 text-white border-none">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default OneCard