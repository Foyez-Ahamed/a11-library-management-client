import { useLoaderData } from "react-router-dom";
import BookShelf from "./BookShelf";

const Books = () => {
  
  const books = useLoaderData();

  return (
    <div className="mt-10">
      <div
        className="hero h-[300px] rounded-xl object-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Np4BmST/Uni-Oulu-0273.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="text-2xl lg:text-5xl font-bold"> Your All Favorite Here!</h1>
          </div>
        </div>
      </div>

       <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
            books.map(book => <BookShelf key={book._id} book = {book}></BookShelf> )
        }
       </div>

    </div>
  );
};

export default Books;
