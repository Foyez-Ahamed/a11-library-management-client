import { useLoaderData } from "react-router-dom";


const ReadBook = () => {

    const books = useLoaderData();

    return (
        <div className="mt-10">
            <h1>{books.description}</h1>
        </div>
    );
};

export default ReadBook;