import axios from "axios";

const axisSecure = axios.create({
    baseURL : 'https://library-management-server-sigma.vercel.app'
})

const useAxiosSecure = () => {
   
  return axisSecure;


};

export default useAxiosSecure;