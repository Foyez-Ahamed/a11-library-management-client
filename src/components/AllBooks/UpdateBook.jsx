import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {

    const books = useLoaderData();
    
    const {image, name , author_name, category, rating} = books || {};

    const handleUpdateBooks = e => {

        e.preventDefault();

        const form = e.target;

        const image = form.image.value;
        const name = form.name.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;

        const updateBooks = {image, name, rating, author, category};

        console.log(updateBooks);
    }

    return (
        <div>
           <section className="flex justify-center items-center w-full md:w-full lg:w-3/4 shadow-xl rounded-xl p-3 mx-auto bg-slate-100 mt-10">
        <div>

          <div>
            <h1 className="text-center text-4xl font-medium">Update Books</h1>
          </div>

         
          <div className="mt-10">
            <form onSubmit={handleUpdateBooks}>
              <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                <div className="form-control">
                  <label>Image</label>
                  <input
                    type="text"
                    defaultValue={image}
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
                    defaultValue={name}
                    name="name"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

            
              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Author Name</label>
                  <input
                    type="text"
                    placeholder="Author Name"
                    defaultValue={author_name}
                    name="author"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
                
                <div className="form-control">
                  <label>Category</label>
                  <select
                    name="category"
                    defaultValue={category}
                    required
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  >
                    <option value="">{category}</option>
                    <option value="Mystery & Thriller">Mystery & Thriller</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Novel">Novel</option>
                    <option value="Drama">Drama</option>
                  </select>
                </div>

              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Rating</label>
                  <input
                    type="text"
                    placeholder="Rating"
                    required
                    defaultValue={rating}
                    name="rating"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

             
              <div className="form-control mt-4">
                <label>
                  <input
                    type="submit"
                    value="Update Books"
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

export default UpdateBook;