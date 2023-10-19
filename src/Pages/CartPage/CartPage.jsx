import { useContext, useEffect, useState } from "react"
import { FirebaseAuthContext } from "../../Context/FirebaseContext";
import Swal from 'sweetalert2'
import { removeFromLocalStorage } from "../../Functions/LocalStorage";



const CartPage = () => {
  const { GetDataFromLS } = useContext(FirebaseAuthContext)
  const [totalPrice, setTotalPrice] = useState('');
  const [allProd, setAllProd] = useState([])
  const [allIds, setAllIds] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => {
    // setTotalPrice(price * quan)
    const xy = GetDataFromLS()
    setAllIds(xy)
  }, [])

  useEffect(() => {
    fetch('http://localhost:5020/all')
      .then(res => res.json())
      .then(res => setAllProd(res))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    const filteredData = allProd.filter(data => allIds.includes(data._id));
    setCarts(filteredData)

  }, [allProd])

  useEffect(() => {
    var count = 0;
    carts.filter(one => {
      count = count + parseInt(one.price)
    })
    setTotalPrice(count)
  }, [carts])

  const handleResetCart = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Reset it!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear()
        setCarts([])
        Swal.fire(
          'Deleted!',
          'Your Cart Is Clear Now',
          'success'
        )
      }
    })
  }
  const hanldeClickDeleteItem = (_id) => {
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
        removeFromLocalStorage(_id)
        setCarts(carts?.filter(one => one._id != _id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  const handlePurchase = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Oh NOoo',
      text: "Purchase Funcitonality not added yet",
    })
  }


  return (
    <div className="px-2 lg:px-0 min-h-screen">
      <h1 className=" text-center mt-8 md:mt-16 text-xl font-bold">Total <span className=" text-red-500">{carts.length}</span> Item Found</h1>
      <div className="md:grid flex flex-col-reverse md:grid-cols-3 max-w-7xl gap-5 mx-auto py-8 md:py-16">
        <div className=" md:col-span-2">

          {
            carts.length == 0 && <div>
              <h1 className=" bg-red-500 text-xl p-3 text-center rounded-lg">Your Cart Is Empty !</h1>
            </div>
          }

          {
            carts && carts.map(one => {
              return (
                <div key={one._id} className="mb-5 flex flex-col items-center md:justify-center md:py-0 lg:flex-row justify-start border dark:border-gray-700 rounded-xl overflow-hidden">
                  <img width="300" src={one.img} alt="" />
                  <div className=" ml-5 flex flex-col justify-center">
                    <h1>Brand Name : {one.company}</h1>
                    <h1>Model Name : {one.modelName}</h1>
                    <p>Quantity : 1</p>
                    <p>Price : ${one.price}</p>
                  </div>
                  <div className="btn-group w-full lg:w-auto my-2 lg:my-0 items-center space-y-1 flex justify-center btn-group-vertical ml-auto">
                    <button onClick={() => hanldeClickDeleteItem(one._id)} className="btn mr-3 hover:bg-red-400 bg-red-500 border-none text-white">Delete</button>
                  </div>
                </div>
              )
            })
          }






        </div>
        <div className=" col-span-1 border dark:border-gray-700 rounded-xl max-h-60">
          <h1 className="text-center p-3 text-2xl font-bold">Final Calculation</h1>
          <div className=" flex flex-col justify-center p-2 items-center">
            <h1 className="text-lg my-2">Total Price : <span className=" font-bold">${totalPrice}</span></h1>
            <button onClick={handlePurchase} className="mt-4 bg-green-600 border-none text-white btn w-full">Purchase Now</button>
            <button onClick={handleResetCart} className="bg-red-500 border-none text-white btn mt-2 w-full">Reset Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage