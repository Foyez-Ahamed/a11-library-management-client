import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBooks = () => {

    const axiosPublic = useAxiosPublic();
   
    const {data : books = [], refetch} = useQuery({
        queryKey : ['books'],
        queryFn : async() => {
            const res = await axiosPublic.get('/allBooks')

            return res.data;
        }
    })

    return [books, refetch];

};

export default useBooks;