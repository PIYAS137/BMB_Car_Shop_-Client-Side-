import { useEffect, useState } from "react"

const CartPage = () => {
  const price = 200;
  const [quan, setQuan] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);


  const handleAddQuantity = () => {
    setQuan(prev => prev + 1)

  }
  const handleLessQuantity = () => {
    if (quan > 1) {
      setQuan(prev => prev - 1)
    }
  }

  useEffect(() => {
    setTotalPrice(price * quan)
  }, [quan])


  return (
    <div className=" min-h-screen">
      <h1 className=" text-center mt-16 text-xl font-bold">Total <span className=" text-blue-500">10</span> Item Found</h1>
      <div className="grid grid-cols-3 max-w-7xl gap-5 mx-auto  py-16">
        <div className=" col-span-2">
          <div className=" flex justify-start border dark:border-gray-700 rounded-xl overflow-hidden">
            <img width="300" src="https://i.pinimg.com/564x/82/41/1f/82411f1233372834efa6fdb8f0c1fb05.jpg" alt="" />
            <div className=" ml-5 flex flex-col justify-center">
              <h1>Brand Name : default name</h1>
              <h1>Model Name : default name</h1>
              <p>Quantity : {quan}</p>
              <p>Price : ${totalPrice}</p>
            </div>
            <div className="btn-group space-y-1 flex flex-col justify-between btn-group-vertical ml-auto">
              <button onClick={handleAddQuantity} className="btn bg-green-600 border-none text-white">Add One</button>
              <button className="btn bg-red-500 border-none text-white">Delete</button>
              <button onClick={handleLessQuantity} className="btn border-none bg-orange-600 text-white">Minus One</button>
            </div>
          </div>
        </div>
        <div className=" col-span-1 border dark:border-gray-700 rounded-xl max-h-60">
          <h1 className="text-center p-3 text-2xl font-bold">Final Calculation</h1>
          <div className=" flex flex-col justify-center p-2 items-center">
            <h1 className="text-lg my-2">Total Price : <span className=" font-bold">$7777</span></h1>
            <button className="mt-4 bg-green-600 border-none text-white btn w-full">Purchase Now</button>
            <button className="bg-red-500 border-none text-white btn mt-2 w-full">Reset Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage