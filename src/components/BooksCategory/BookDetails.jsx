import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const singleBook = useLoaderData();

  const {_id, image, description, author_name, name} = singleBook || {};

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            className="w-[400px] h-[400px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">{name}</h1>
            <p>Written by: {author_name}</p>
            <p className="py-6">
              {description}
            </p>

            <div className="flex gap-8">
            <Link><button className="px-5 py-1 bg-[#0087EB] text-white rounded-md font-medium ">Borrow</button></Link>

            <Link to={`/readBook/${_id}`} readBook ={description} ><button className="px-5 py-1 bg-[#0087EB] text-white rounded-md font-medium ">Read</button></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
