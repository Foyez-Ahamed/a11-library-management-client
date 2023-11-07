import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";
import AllBook from "../pages/AllBook";
import BorrowedBooks from "../pages/BorrowedBooks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Books from "../components/BooksCategory/Books";
import BookDetails from "../components/BooksCategory/BookDetails";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader : () => fetch('http://localhost:5000/booksCategory')
            },

            {
                path: '/books/:category',
                element : <Books></Books>,
                loader : ({params}) => fetch(`http://localhost:5000/books/${params.category}`) 
            },

            {
                path:'/bookDetails/:id',
                element: <BookDetails></BookDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/singleBook/${params.id}`)
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