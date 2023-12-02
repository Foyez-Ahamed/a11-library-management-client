import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const AllBooks = ({ allBook }) => {
  const {_id, image, name, author_name, category, quantity, rating} = allBook || {};
  return (
    <div>
      <div className="card bg-base-100 dark:bg-zinc-900 dark:text-white shadow-md">
        <figure>
          <img
            className=" h-[300px] lg:h-[200px] md:h-[300px] w-full object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="p-2">
          <h2 className="text-[14px] font-bold"> 
            {name}
            <div className="badge bg-[#0087EB] text-white ml-[2px]">{quantity}</div>
          </h2>
          <p>Writer: {author_name}</p>
          <p>Category: {category}</p>
           
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />

          <div className="card-actions justify-end">
          <Link to={`/updateBook/${_id}`}><button className="px-5 py-1 shadow-xl text-[#0087EB] rounded-md font-medium bg-gray-100">Update Book</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
