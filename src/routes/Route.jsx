import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";
import AllBook from "../pages/AllBook";
import BorrowedBooks from "../pages/BorrowedBooks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addBook',
                element: <PrivateRoute> <AddBook></AddBook> </PrivateRoute>
            },
            {
                path: '/allBooks',
                element: <PrivateRoute> <AllBook></AllBook> </PrivateRoute>
            },
            {
                path: '/borrowedBooks',
                element: <PrivateRoute> 
                <BorrowedBooks></BorrowedBooks>
                </PrivateRoute>
            },



            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register> 
            }
        ]
        
    }
])

export default Route;