import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-10 lg:py-2">

            <h1>This is main layout</h1>

            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;