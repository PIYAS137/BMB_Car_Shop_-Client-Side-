import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const DiscoverBrands = () => {

    const [brands,setBrands]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5020/category`)
            .then(res => res.json())
            .then(res => setBrands(res))
            .catch(err => console.log(err))
    }, [])


  return (
    <div className="max-w-7xl mx-auto pt-20 md:pt-32">
            <h1 className="text-center text-5xl font-bold">Discover Our Products By Com.</h1>
            <div className="py-20 w-full overflow-hidden justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 dark:bg-black dark:text-white">
                {
                    brands.map(one => {
                        return (
                            <Link to={`discover/${one.brand}`} key={one._id}>
                                <div className="flex hover:scale-150 transition mb-20 flex-col items-center justify-center">
                                    <img width={one.width} src={one.logo} alt="" />
                                    <h1 className="text-xl font-bold mt-2">{one.brand}</h1>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default DiscoverBrands