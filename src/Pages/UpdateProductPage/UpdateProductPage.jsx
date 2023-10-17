import { useState } from "react";


const UpdateProductPage = () => {


  const [modelName, setModelName] = useState('')
  const [img, setImg] = useState('')
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [des, setDes] = useState('');
  const [milage, setMilage] = useState('');
  const [fuelType, setFuelType] = useState('')
  const [company, setCompany] = useState('');
  const [fuelTankCapacity, setFuelTankCapacity] = useState('');
  const [seatingCapacity, setSeatingCapacity] = useState('')
  const [release,setRelease]=useState('');



  const handleSubmitProduct=(event)=>{
    event.preventDefault();

    const newProduct = {modelName,img,price,rating,description:des,milage,fuelType,company,fuelTankCapacity,seatingCapacity,release}
    console.log(newProduct);
  }



  return (
    <div className="py-10 max-w-7xl mx-auto">
      <form onSubmit={handleSubmitProduct} className=" max-w-3xl mx-auto rounded-xl p-3 dark:shadow-lg dark:bg-gray-700 shadow-2xl">
        <h1 className="text-3xl my-10 text-center font-bold">Update Product Here</h1>

        <select defaultValue={company} onChange={e=>setCompany(e.target.value)} className="select dark:text-black select-bordered w-full mb-1">
          <option >Select Company</option>
          <option value="asdf">Han Solo</option>
          <option value="basd">Greedo</option>
        </select>




        <label htmlFor="">
          <small>Model Name</small>
          <input onChange={e => setModelName(e.target.value)} value={modelName} type="text" placeholder="Enter Model Name" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Model Image</small>
          <input onChange={e => setImg(e.target.value)} value={img} type="text" placeholder="Enter Model Image URL" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Model Price</small>
          <input onChange={e => setPrice(e.target.value)} value={price} type="number" placeholder="Enter Price $" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Milage /hr</small>
          <input onChange={e => setMilage(e.target.value)} value={milage} type="text" placeholder="Enter Milage" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Fuel Type</small>
          <input onChange={e => setFuelType(e.target.value)} value={fuelType} type="text" placeholder="Enter fuel type" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Fuel tank capacity</small>
          <input onChange={e => setFuelTankCapacity(e.target.value)} value={fuelTankCapacity} type="number" placeholder="Enter fuel tank capacity in Liter" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Seating capacity</small>
          <input onChange={e => setSeatingCapacity(e.target.value)} value={seatingCapacity} type="number" min={1} placeholder="Enter seating capacity" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Universal Rating</small>
          <input onChange={e => setRating(e.target.value)} value={rating} type="number" min={0} max={10} placeholder="Enter Universal Rating" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Model Release Date</small>
          <input onChange={e => setRelease(e.target.value)} value={release} type="date" min={0} max={10} placeholder="Enter Universal Rating" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Short Description</small>
          <textarea onChange={e => setDes(e.target.value)} value={des} className="textarea textarea-bordered w-full" placeholder="Short Description"></textarea>
        </label>
        
        
        
        
        
        
        
        
        <div className="flex justify-center my-2">
        <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProductPage