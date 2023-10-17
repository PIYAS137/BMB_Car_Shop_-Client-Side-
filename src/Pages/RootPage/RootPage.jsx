import { Outlet } from "react-router-dom"
import AppNavBar from "../../Layout/AppNavBar"


const RootPage = () => {
    return (
        <div className="dark:bg-black dark:text-white ">
            <AppNavBar />
            <Outlet />
        </div>
    )
}

export default RootPage