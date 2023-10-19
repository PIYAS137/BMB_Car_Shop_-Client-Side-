import Marquee from "react-fast-marquee";



const ClientsSection = () => {
  return (
    <div className="dark:bg-black dark:text-white max-w-7xl mx-auto pt-1 mb-20">
      <h1 className=" text-5xl font-bold text-center mt-10">Our Clients </h1>
      <p className=" text-center my-3 mb-5">Our clients is our superstar !</p>

      <Marquee className="dark:bg-black max-w-7xl dark:text-white mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="shadow-lg mx-5 dark:bg-slate-600 bg-gray-200 p-5 text-center rounded-b-xl flex flex-col justify-center items-center  my-20">
          <div className="-mt-12">
            <div className=" bg-white w-20 h-20 p-1 rounded-full mx-auto" >
              <img className="w-full h-full rounded-full mx-auto object-cover" src="https://i.ibb.co/K5Krx1K/IMG-6035.jpg" alt="" />
            </div>
            <p className=" text-md mt-2 font-semibold">Rizvee</p>
            <p className="text-gray-400 text-sm">Your's products are very great outstanding!</p>
          </div>
        </div>
        <div className="shadow-lg mx-5 dark:bg-slate-600 bg-gray-200 p-5 text-center rounded-b-xl flex flex-col justify-center items-center  my-20">
          <div className="-mt-12">
            <div className=" bg-white w-20 h-20 p-1 rounded-full mx-auto" >
              <img className="w-full h-full rounded-full mx-auto object-cover" src="https://i.ibb.co/MCs5Sg8/Whats-App-Image-2023-05-25-at-21-30-48.jpg" alt="" />
            </div>
            <p className=" text-md mt-2 font-semibold">Osman</p>
            <p className="text-gray-400 text-sm">Your's products are very great outstanding!</p>
          </div>
        </div>
        <div className="shadow-lg mx-5 dark:bg-slate-600 bg-gray-200 p-5 text-center rounded-b-xl flex flex-col justify-center items-center  my-20">
          <div className="-mt-12">
            <div className=" bg-white w-20 h-20 p-1 rounded-full mx-auto" >
              <img className="w-full h-full rounded-full mx-auto object-cover" src="https://i.ibb.co/PDnJ0ny/Screenshot-8.png" alt="" />
            </div>
            <p className=" text-md mt-2 font-semibold">Himel</p>
            <p className="text-gray-400 text-sm">Your's products are very great outstanding!</p>
          </div>
        </div>

      </Marquee>

    </div>
  )
}

export default ClientsSection