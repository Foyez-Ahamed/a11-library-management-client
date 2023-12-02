import axios from "axios";

const axisSecure = axios.create({
    baseURL : 'http://localhost:5000'
})

const useAxiosSecure = () => {
   
  return axisSecure;


};

export default useAxiosSecure;