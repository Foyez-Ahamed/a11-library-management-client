import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BorrowedBook = ({ borrow, borrowedBook, setBorrowedBook }) => {
  const [book, setBook] = useState([]);

  const { _id, image, bookName, borrowedDate, returnDate, category } =
    borrow || {};

  useEffect(() => {
    fetch(`http://localhost:5000/increaseQuantity/${bookName}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [bookName]);

  const handleReturnDate = (id) => {
    Swal.fire({
      title: "Are you sure return book?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/removeBook/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your book has been removed.", "success");

              const remaining = borrowedBook.filter(
                (borrowed) => borrowed._id !== id
              );
              setBorrowedBook(remaining);

              const updateQuantity = {
                quantity: book.quantity + 1,
              };

              fetch(`http://localhost:5000/borrowedBook/${book._id}`, {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(updateQuantity),
              })
                .then((res) => res.json())
                .then((data) => {
                  setBook(data)
                });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className=" h-[300px] lg:h-[200px] md:h-[300px] w-full object-cover"
            src={image}
            alt="books"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-[14px] font-bold">{bookName}</h2>
          <p className="text-[14px] font-bold">{category}</p>
          <span>Borrowed Date: {borrowedDate}</span>
          <span>Return Date: {returnDate}</span>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleReturnDate(_id)}
              className="px-5 py-1 shadow-xl text-[#0087EB] rounded-md font-medium bg-gray-100"
            >
              Return Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBook;
