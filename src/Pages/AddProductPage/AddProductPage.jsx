import { useEffect, useState } from "react"
import Swal from 'sweetalert2'





const AddProductPage = () => {

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
  const [release, setRelease] = useState('');
  const [speed, setSpeed] = useState('')
  const [cylinder, setCylinder] = useState('')
  const [torque, setTorque] = useState('')
  const [hp, setHp] = useState('')

  const fuelTypes = [
    {
      id: 1,
      fuel_type: "Diesel"
    },
    {
      id: 2,
      fuel_type: "Petrol"
    },
    {
      id: 3,
      fuel_type: "Ethanol"
    },
    {
      id: 4,
      fuel_type: "Biodiesel"
    },
    {
      id: 5,
      fuel_type: "Natural Gas"
    },
    {
      id: 6,
      fuel_type: "Liquefied Petroleum Gas"
    },
    {
      id: 7,
      fuel_type: "Compressed Natural Gas"
    },
    {
      id: 8,
      fuel_type: "Propane"
    },
    {
      id: 9,
      fuel_type: "Unleaded Gasoline"
    },
    {
      id: 10,
      fuel_type: "Leaded Gasoline"
    }

  ]
  const handleSubmitProduct = (event) => {
    event.preventDefault();

    const newProduct = { modelName, img, price, rating, description: des, milage, fuelType, company, fuelTankCapacity, seatingCapacity, release, speed, cylinder, torque, hp }
    console.log(newProduct);

    fetch('http://localhost:5020/addcars', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    }).then(res => res.json())
      .then(res =>{
        if(res.modifiedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully Added Product',
            showConfirmButton: false,
            timer: 2000
          })
        }
      })
      .catch(err => console.log(err))
  }

  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch('http://localhost:5020/category',)
      .then(res => res.json())
      .then(res => {
        setCategory(res)
      }).catch(err => console.log(err))
  }, [])





  return (
    <div className="py-10 max-w-7xl mx-auto">
      <form onSubmit={handleSubmitProduct} className=" max-w-3xl mx-auto rounded-xl p-3 dark:shadow-lg dark:bg-gray-700 shadow-2xl">
        <h1 className="text-3xl my-10 text-center font-bold">Add Product Here</h1>

        <select defaultValue={company} onChange={e => setCompany(e.target.value)} className="select dark:text-black select-bordered w-full mb-1">
          <option >Select Company</option>
          {category?.map((one, i) => <option key={i} value={one.brand}>{one.brand}</option>)}

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
          <small>Max Speed /hr</small>
          <input onChange={e => setSpeed(e.target.value)} value={speed} type="text" placeholder="Enter Max Speed" className="input input-bordered dark:text-black w-full mb-1" />
        </label>






        <label htmlFor="">Select Fuel Type</label>
        <select defaultValue={fuelType} onChange={e => setFuelType(e.target.value)} className="select dark:text-black select-bordered w-full mb-1">
          <option >Select Fuel Types</option>
          {fuelTypes?.map((one, i) => <option key={i} value={one.fuel_type}>{one.fuel_type}</option>)}

        </select>



        <label htmlFor="">
          <small>Fuel tank capacity</small>
          <input onChange={e => setFuelTankCapacity(e.target.value)} value={fuelTankCapacity} type="number" placeholder="Enter fuel tank capacity in Liter" className="input input-bordered dark:text-black w-full mb-1" />
        </label>


        <label htmlFor="">
          <small>Number of Cylinder</small>
          <input onChange={e => setCylinder(e.target.value)} value={cylinder} type="number" placeholder="Enter number of cylinder" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Torque</small>
          <input onChange={e => setTorque(e.target.value)} value={torque} type="text" placeholder="Enter torque /RPM" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Engine / CC</small>
          <input onChange={e => setHp(e.target.value)} value={hp} type="number" placeholder="Enter Engine Power / HP" className="input input-bordered dark:text-black w-full mb-1" />
        </label>





        <label htmlFor="">
          <small>Seating capacity</small>
          <input onChange={e => setSeatingCapacity(e.target.value)} value={seatingCapacity} type="number" min={1} placeholder="Enter seating capacity" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Universal Rating</small>
          <input onChange={e => setRating(e.target.value)} value={rating} type="text" min={0} max={10} placeholder="Enter Universal Rating" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Model Release Date</small>
          <input onChange={e => setRelease(e.target.value)} value={release} type="date" min={0} max={10} placeholder="Enter Universal Rating" className="input input-bordered dark:text-black w-full mb-1" />
        </label>
        <label htmlFor="">
          <small>Short Description</small>
          <textarea onChange={e => setDes(e.target.value)} value={des} className="textarea dark:text-black textarea-bordered w-full" placeholder="Short Description"></textarea>
        </label>








        <div className="flex justify-center my-2">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddProductPage