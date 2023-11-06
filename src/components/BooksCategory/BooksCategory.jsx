import { useLoaderData } from "react-router-dom";

const BooksCategory = () => {

    const booksCategory = useLoaderData();

    return (
        <div>
        
      <div>
        <h1 className="text-4xl font-bold">Books Categories</h1>
        <progress
          className="progress progress-primary w-[100px]"
          value="20"
          max="100"
        ></progress>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {
                booksCategory.map(category => 

                <div key={category._id} className="card glass">
                <figure><img className="lg:h-[200px] md:h-[200px] w-full object-cover" src={category.image} alt="car!"/> </figure>
                <div className="card-body">
                  <h2 className="card-title">{category.category}</h2>
                  <div className="card-actions justify-end mt-4">
                    <button className="px-5 py-1 shadow-xl text-[#0087EB] rounded-md font-medium">See Books</button>
                  </div>
                </div>
              </div>)
            }
        </div>

            
        </div>
    );
};

export default BooksCategory;