import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useAuth from "../../hooks/useAuth";

const BookDetails = () => {

  const singleBook = useLoaderData();

  const {user} = useAuth();

  const { _id, image, description, author_name, name, quantity } = singleBook || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const returnDate = form.date.value;
    const name = user?.displayName;
    const email = user?.email;
    const quantityBook = quantity - 1;
    const borrowedBook = {
        returnDate,
        name,
        email,
        image : singleBook.image,
        bookName : singleBook.name,
        category : singleBook.category,
        borrowedDate : new Date(),
        quantityBook
    }

    // console.log(borrowedBook);

  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            className="w-[400px] h-[400px] rounded-lg shadow-2xl object-cover"
          />
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">{name}</h1>
            <p className="text-md">Written by: {author_name}</p>
            <span className="text-md">Available: {quantity} </span>
            <p className="py-6 text-md">{description}</p>

            <div className="flex gap-8">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <Link>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="px-6 py-2 bg-[#0087EB] text-white rounded-md font-medium "
                >
                  Borrow
                </button>
              </Link>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <div>
                    <form onSubmit={handleSubmit}>
                    <label className="font-medium">Return Date</label> <br />   
                    <input type="date" name="date" placeholder="Please enter return date" className="input input-bordered w-full max-w-xs mt-2" />
                    <input type="submit" value="Submit" className="ml-2 bg-[#0087EB] px-5 py-3 rounded-md text-white cursor-pointer font-medium" />
                    
                    </form>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button><AiOutlineCloseCircle className="text-3xl"></AiOutlineCloseCircle></button>
                    </form>
                  </div>
                </div>
              </dialog>

              <Link to={`/readBook/${_id}`} readBook={description}>
                <button className="px-6 py-2 bg-[#0087EB] text-white rounded-md font-medium ">
                  Read
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
