import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const BookShelf = ({ book }) => {
  
    const {_id, image, name, author_name, category, rating} = book || {};

  return (
    <div>
      <div className="card card-side shadow-md">
        <figure>
          <img
            className=" w-[150px] lg:w-[250px] h-[150px] lg:h-[300px] lg:object-cover"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="p-4 space-y-4 relative">
          <h2 className="font-medium">Name: {name}</h2>
          <p className="font-medium">{category}</p>
          <p className="font-medium">Writer: {author_name}</p>

          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />

          <div className="card-actions justify-end absolute bottom-2 right-0">
          <Link to={`/bookDetails/${_id}`}><button className="px-5 py-1 shadow-xl text-[#0087EB] rounded-md font-medium bg-gray-100 underline">See Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
