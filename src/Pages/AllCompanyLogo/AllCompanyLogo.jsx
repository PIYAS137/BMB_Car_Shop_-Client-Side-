import { useLoaderData } from "react-router-dom"
import OneLogo from "../../Components/OneLogo";

const AllCompanyLogo = () => {

    const loadedData = useLoaderData()
    console.log(loadedData);




    return (
        <div className=" max-w-7xl mx-auto">
            <h1 className="text-center py-10 text-3xl md:text-5xl font-bold">Discover by company</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-10">
                {
                    loadedData.map(one=><OneLogo key={one._id} data={one}/>)
                }
            </div>
        </div>
    )
}

export default AllCompanyLogo