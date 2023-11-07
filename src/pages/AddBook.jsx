import Swal from "sweetalert2";

const AddBook = () => {

    const handleAddBooks = e => {

        e.preventDefault();

        const form = e.target;

        const image = form.image.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const addBooks = {image, name, rating, quantity, author, category, description};

      fetch('http://localhost:5000/books', {
      method:'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(addBooks)
    })
    .then(res => res.json())
    .then(data => {

      if(data.insertedId){
        Swal.fire({
            title: 'success!',
            text: 'Book added successfully',
            icon: 'success',
            confirmButtonText: 'Thanks!'
          })
    }

    form.reset();
    })
    }

    return (
        <div>
            
         <section className="flex justify-center items-center w-full md:w-full lg:w-3/4 shadow-xl rounded-xl p-3 mx-auto bg-slate-100 mt-10">
        <div>

          <div>
            <h1 className="text-center text-4xl font-medium">Add Book</h1>
          </div>

         
          <div className="mt-10">
            <form onSubmit={handleAddBooks}>
              <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                <div className="form-control">
                  <label>Image</label>
                  <input
                    type="text"
                    placeholder="Image...."
                    name="image"
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

            
              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Quantity</label>
                  <input
                    type="text"
                    placeholder="quantity of books"
                    name="quantity"
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Author Name</label>
                  <input
                    type="text"
                    placeholder="Author Name"
                    name="author"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

              
              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Category</label>
                  <select
                    name="category"
                    required
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  >
                    <option value="">Select a Category</option>
                    <option value="Mystery & Thriller">Mystery & Thriller</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Novel">Novel</option>
                    <option value="Drama">Drama</option>
                  </select>
                </div>

                <div className="form-control">
                  <label>Short Description</label>
                  <input
                    type="text"
                    placeholder="Short description"
                    name="description"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>


              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Rating</label>
                  <input
                    type="text"
                    placeholder="Rating"
                    required
                    name="rating"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

             
              <div className="form-control mt-4">
                <label>
                  <input
                    type="submit"
                    value="Add Books"
                    className="input input-bordered w-full bg-[#0087EB] hover:bg-slate-900 text-white font-bold cursor-pointer"
                  />
                </label>
              </div>
            </form>
          </div>

        </div>
        </section>

        </div>
    );
};

export default AddBook;