import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import BorrowedBook from "../components/BooksCategory/BorrowedBook";


const BorrowedBooks = () => {

    const {user} = useAuth();

    const [borrowedBook, setBorrowedBook] = useState([]);

    const url = `http://localhost:5000/borrowedBook?email=${user.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBorrowedBook(data))
    },[url])

    return (
        <div className="mt-10">
             <div
        className="hero h-[300px] rounded-xl object-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Np3kg6f/1112756-1-1209-best-2020-fiction-standard.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="text-2xl lg:text-5xl font-bold">Your Collection Here</h1>
          </div>
        </div>
      </div>
         
      <div className="mt-10">
        <h1 className="text-4xl font-bold">Your Collections</h1>
        <progress
          className="progress progress-primary w-[100px]"
          value="20"
          max="100"
        ></progress>
      </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 dark:text-black">
            {
                borrowedBook.map(borrow => <BorrowedBook key={borrow._id} borrow = {borrow} borrowedBook={borrowedBook} setBorrowedBook={setBorrowedBook}></BorrowedBook>)
            }
        </div>  

        </div>
    );
};

export default BorrowedBooks;