import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";
import AllBook from "../pages/AllBook";
import BorrowedBooks from "../pages/BorrowedBooks";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
                element: <AddBook></AddBook>
            },
            {
                path: '/allBooks',
                element: <AllBook></AllBook>
            },
            {
                path: '/borrowedBooks',
                element: <BorrowedBooks></BorrowedBooks>
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