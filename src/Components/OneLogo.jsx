import { Link } from "react-router-dom";

const OneLogo = ({ data }) => {
    const { _id, since, brand, width, logo } = data;
    return (
        <Link to={`/discover/${brand}`}>
            <div className="flex ml-20 flex-col items-center justify-center">
                <img width={width} src={logo} alt="" />
                <h1 className="text-xl font-bold mt-2">{brand}</h1>
            </div>
        </Link>
    )
}

export default OneLogo