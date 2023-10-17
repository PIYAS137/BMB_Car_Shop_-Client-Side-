import { Outlet } from "react-router-dom"
import AppNavBar from "../../Layout/AppNavBar"


const RootPage = () => {
    return (
        <div className=" ">
            <AppNavBar />
            <Outlet />
        </div>
    )
}

export default RootPage