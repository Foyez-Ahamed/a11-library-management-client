import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-10 lg:py-2 font-roboto dark:bg-zinc-900 dark:text-white">

            <Navbar></Navbar>

            
            <Outlet></Outlet>

            <Toaster/>
           
            
        </div>
    );
};

export default MainLayout;