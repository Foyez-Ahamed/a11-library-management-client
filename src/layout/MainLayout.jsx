import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-10 lg:py-2">

            <Navbar></Navbar>

            
            <Outlet></Outlet>
           
            
        </div>
    );
};

export default MainLayout;