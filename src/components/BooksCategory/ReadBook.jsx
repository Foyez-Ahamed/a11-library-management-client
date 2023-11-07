import { useLoaderData } from "react-router-dom";


const ReadBook = () => {

    const books = useLoaderData();

    return (
        <div className="mt-10">
            <p className="w-[50%] mx-auto text-xl text-gray-600">{books.description}</p>
        </div>
    );
};

export default ReadBook;