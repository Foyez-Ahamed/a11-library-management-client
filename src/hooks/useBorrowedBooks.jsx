import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useBorrowedBooks = () => {
    
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data : borrowedBooks = [], refetch } = useQuery({
        queryKey : ['borrowedBooks', user?.email],
        enabled: !!user?.email,
        queryFn : async() => {
            const res = await axiosPublic.get(`/getBorrowedBook/${user?.email}`)

            return res.data;
        }

    })

    return [borrowedBooks, refetch];


};

export default useBorrowedBooks;