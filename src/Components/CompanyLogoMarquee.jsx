import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";



const CompanyLogoMarquee = () => {

    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('https://bmb-cars-shop-ikqz8auq1-piyass-projects.vercel.app/category')
            .then(res => res.json())
            .then(res => setDatas(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="max-w-7xl mx-auto py-20">
            <h1 className="text-center text-5xl font-bold">Our Business Partners</h1>
            <Marquee className="py-20 dark:bg-black dark:text-white">
                {
                    datas.map(one => {
                        return (
                            <Link to={`discover/${one.brand}`} key={one._id}>
                                <div className="flex ml-20 flex-col items-center justify-center">
                                    <img width={one.width} src={one.logo} alt="" />
                                    <h1 className="text-xl font-bold mt-2">{one.brand}</h1>
                                </div>
                            </Link>
                        )
                    })
                }
            </Marquee>
        </div>
    )
}

export default CompanyLogoMarquee