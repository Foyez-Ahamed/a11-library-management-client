import AllBooks from "../components/AllBooks/AllBooks";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllBook = () => {

    const [allBooks, setAllBooks] = useState([]);

    const [filterBook, setFilterBook] = useState([]);

    const [showBooks, setShowBooks] = useState([]);

    const axiosSecure = useAxiosSecure();

    const url = '/allBooks'
    const urlFilter = '/filterBooks'

    useEffect(() => {
       axiosSecure.get(url)
        .then(res => {setAllBooks(res.data)
            setShowBooks(res.data)
        })
    },[axiosSecure])
    
    useEffect(() => {
         axiosSecure.get(urlFilter)
        .then(res => setFilterBook(res.data))
    },[axiosSecure])

    const handleAllBooks = () => {
        setShowBooks(allBooks);
    }

    const handleAvailableBooks = () => {
        setShowBooks(filterBook)
    }



    return (
        <div className="mt-10">
             <div className="flex gap-4">
                <button className="px-5 py-1 shadow-xl text-[#0087EB] rounded-md font-medium bg-gray-100" onClick={handleAllBooks}>All Books</button>
                <button className="px-5 py-1 shadow-xl text-[#0087EB] rounded-md font-medium bg-gray-100" onClick={handleAvailableBooks}>Available Books</button>
             </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 dark:text-black">
                {
                    showBooks.map(allBook => <AllBooks key={allBook._id} allBook = {allBook}></AllBooks>)
                }
            </div>
        </div>
    );
};

export default AllBook;