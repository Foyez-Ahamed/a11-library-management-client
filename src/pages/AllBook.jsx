import { useLoaderData } from "react-router-dom";
import AllBooks from "../components/AllBooks/AllBooks";

const AllBook = () => {

    const allBooks = useLoaderData();
    

    return (
        <div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    allBooks.map(allBook => <AllBooks key={allBook._id} allBook = {allBook}></AllBooks>)
                }
            </div>
        </div>
    );
};

export default AllBook;