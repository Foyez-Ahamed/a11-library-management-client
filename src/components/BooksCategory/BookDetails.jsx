import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { format } from 'date-fns';

const BookDetails = () => {

  const loadedSingleBook = useLoaderData();

  // const [bookDetails, setBookDetails] = useState(loadedSingleBook);


  const axiosPublic = useAxiosPublic();

  // console.log(loadedSingleBook);

  const [singleBook, setSingleBook] = useState(loadedSingleBook);

  const {user} = useAuth();

  const { _id, image, description, author_name, name, quantity } = singleBook || {};

  const handleSubmit = (e) => {

    e.preventDefault();
    
    const form = e.target;

    const returnDate = form.date.value;
    const name = user?.displayName;
    const email = user?.email;
  
    const borrowedBook = {
        returnDate,
        name,
        email,
        image : singleBook.image,
        bookName : singleBook.name,
        bookId : singleBook._id,
        category : singleBook.category,
        quantity : singleBook.quantity,
        borrowedDate: format(new Date(), 'yyyy-MM-dd'),
    }

    // console.log(borrowedBook);

    axiosPublic.post('/createBorrowedBook', borrowedBook)
    .then(res => {
      // console.log(res.data);
      if(res.data.insertedId) {
        axiosPublic.patch(`/updateBookQuantity/${_id}`)
        .then(res => {
          // console.log(res.data);

          if(res.data.result.modifiedCount) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: `${singleBook.name} are added to borrowed book page`,
              showConfirmButton: false,
              timer: 1500
            });

            const modal = document.getElementById("my_modal_5");
            if (modal) {
              modal.close();
            }
            // setUpdatedBook 
            setSingleBook(res.data.book)
          }
         
        })
      }

      else {
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Your already borrow this book !",
          showConfirmButton: false,
          timer: 1500
        });
        const modal = document.getElementById("my_modal_5");
        if (modal) {
          modal.close();
        }
      }
    })



    
    // const updateQuantity = {
    //    quantity : quantity - 1
    // }

    // fetch('http://localhost:5000/borrowedBook' , {
    //   method: 'POST',
    //   headers: {
    //     'content-type' : 'application/json'
    //   },
    //   body: JSON.stringify(borrowedBook)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   axios.get(`http://localhost:5000/singleBook/${_id}`)
    //   .then(res => setSingleBook(res.data))
    //   if(data.insertedId){
    //     Swal.fire({
    //         title: 'success!',
    //         text: 'Borrowed Book successfully',
    //         icon: 'success',
    //         confirmButtonText: 'Thanks!'
    //       })
    // }
    // })

    // fetch(`http://localhost:5000/borrowedBook/${_id}`, {
    //       method:'PUT',
    //       headers: {
    //         'content-type' : 'application/json'
    //       },
    //       body: JSON.stringify(updateQuantity)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //       setSingleBook(data);
    //     })

  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-100 dark:bg-zinc-900 dark:text-white">
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
                  disabled = {quantity == 0}
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="px-6 py-2 bg-[#0087EB] text-white rounded-md font-medium "
                >
                  Borrow 
                </button>
              </Link>
              {/* modal */}
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box dark:bg-zinc-900">
                  <div>
                    <form onSubmit={handleSubmit}>
                    <label className="font-medium">Return Date</label> <br />   
                    <input type="date" name="date" placeholder="Please enter return date" className="input input-bordered w-full max-w-xs mt-2 dark:bg-gray-500" />
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
