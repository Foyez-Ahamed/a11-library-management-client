import Swal from "sweetalert2";
import useBorrowedBooks from "../hooks/useBorrowedBooks";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const BorrowedBooks = () => {

  const [borrowedBooks, refetch] = useBorrowedBooks();

  const axiosPublic = useAxiosPublic();

  // console.log(borrowedBooks);

  const handleReturnBook = (id, bookId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Want to return this book",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/removeBook/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            axiosPublic.patch(`/increaseBookQuantity/${bookId}`).then((res) => {
             
              if (res.data.modifiedCount) {
                Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "Return Book Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });

                refetch();
              }
            });
          }
        });
      }
    });
  };

  // const {user} = useAuth();

  // const [borrowedBook, setBorrowedBook] = useState([]);

  // const url = `http://localhost:5000/borrowedBook?email=${user.email}`

  // useEffect(() => {
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data => setBorrowedBook(data))
  // },[url])

  return (
    <div className="mt-10">

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       {
          borrowedBooks.map(book =>  <SwiperSlide key={book._id}>
            <div
            className="hero h-[300px] rounded-xl object-cover"
            style={{
              backgroundImage:
                `url(${book.image})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="text-medium font-bold shadow-xl">
                 {book.email}
                </h1>
              </div>
            </div>
          </div>
            </SwiperSlide>)
       }

      </Swiper>


      <div className="mt-10">
        <h1 className="text-4xl font-bold">Your Collections</h1>
        <progress
          className="progress progress-primary w-[100px]"
          value="20"
          max="100"
        ></progress>
      </div>

      {!borrowedBooks.length && (
        <div className="mt-10">
          <Marquee>
            <h1 className="text-xl font-bold text-blue-500">
              Not Borrowed Book Yet !😑
            </h1>
          </Marquee>
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 dark:text-black">
        {borrowedBooks.map((borrow) => (
          <div
            key={borrow._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className=" h-[300px] lg:h-[200px] md:h-[300px] w-full object-cover"
                src={borrow.image}
                alt="books"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-[14px] font-bold">{borrow.bookName}</h2>
              <p className="text-[14px] font-bold">{borrow.category}</p>
              <span>Borrowed Date: {borrow.borrowedDate}</span>
              <span>Return Date: {borrow.returnDate}</span>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleReturnBook(borrow._id, borrow.bookId)}
                  className="px-5 py-1 shadow-xl text-[#0087EB] rounded-md font-medium bg-gray-100"
                >
                  Return Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
