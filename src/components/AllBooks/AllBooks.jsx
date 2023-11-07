import { Link } from "react-router-dom";

const AllBooks = ({ allBook }) => {
  const {_id, image, name, author_name, category, quantity} = allBook || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-md">
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
           
          <div className="rating rating-sm">
         <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
         <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
         </div>
          <div className="card-actions justify-end">
          <Link to={`/updateBook/${_id}`}><button className="px-5 py-1 shadow-xl text-[#0087EB] rounded-md font-medium bg-gray-100">Update Book</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
