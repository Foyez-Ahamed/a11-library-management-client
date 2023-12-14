import logo from "../../../src/assets/logo/logo.png"
import { AiFillPhone, AiTwotoneMail, AiFillHome } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <>

        <footer className="bg-[#FFFFFF] dark:bg-zinc-900 dark:text-white shadow-lg">
        <section className="flex flex-col md:flex-col lg:flex-row  justify-between p-4 md:p-4 lg:p-5 text-black space-y-5">

<div className="mt-6 dark:text-white">
    <img className="w-[120px] object-cover" src={logo} alt="" />
    <p className="text-[#0087EB] dark:text-white ml-4 cursor-pointer font-bold">BookWise</p>

 <div className="flex gap-4 mt-4 lg:ml-3 dark:text-white">
    <a href=""> <span className="text-2xl text-[#1877F2] "><FaFacebook></FaFacebook></span> </a>
   <a href=""> <span className="text-2xl text-[#1DA1F2]"><FaTwitter></FaTwitter></span> </a>
    <a href=""> <span className="text-2xl text-[#0077B5]"><FaLinkedin></FaLinkedin></span> </a>
</div>

<div className="lg:ml-3">
     <ul className="mt-4 dark:text-white">
        <li className="flex items-center gap-2"> <AiFillHome className="text-gray-400"></AiFillHome> Sector-3, Azampur, Uttara</li>
        <li className="flex items-center gap-2"><AiFillPhone className="text-gray-400"></AiFillPhone> +8801316782</li>
        <li className="flex items-center gap-2"><AiTwotoneMail className="text-gray-400"></AiTwotoneMail>bookCorner@gmail.com</li>
     </ul>
</div>

</div>

<div>
    <h1 className="font-bold dark:text-white">About The Library</h1>
     <ul className="mt-4 space-y-4 dark:text-white">
        <li className="flex items-center gap-2 hover:text-[#1DA1F2] cursor-pointer"> Vision, Mission and values</li>
        <li className="flex items-center gap-2 hover:text-[#1DA1F2] cursor-pointer">Customers feedback standers</li>
        <li className="flex items-center gap-2 hover:text-[#1DA1F2] cursor-pointer">Strategic plans, annual reports</li>
        <li className="flex items-center gap-2 hover:text-[#1DA1F2] cursor-pointer">History of the library</li>
        <li className="flex items-center gap-2 hover:text-[#1DA1F2] cursor-pointer">Job at the library</li>
     </ul>
</div>

<div>
    <h1 className="font-bold dark:text-white">Accessibility</h1>
     <ul className="mt-4 space-y-4 dark:text-white">
        <li className="flex items-center gap-2 hover:text-[#1DA1F2] cursor-pointer"> Accessibility of library brunches</li>
        <li className="flex items-center gap-2 hover:text-[#1DA1F2] cursor-pointer">Can borrowed books</li>
        <li className="flex items-center gap-2 hover:text-[#1DA1F2] cursor-pointer">Website accessibility</li>
        <li className="flex items-center gap-2 hover:text-[#1DA1F2] cursor-pointer">TTY service</li>
     </ul>
</div>

<div>
    
</div>
<div className="flex gap-4">
<div className="form-control">
<h1 className="font-bold text-[#68AFFF]">Search For Books</h1>
  <div className="input-group mt-6">
    <input type="text" placeholder="Search here.." className="input input-bordered" />
    <button className="btn btn-square bg-[#0087EB] text-white hover:text-black">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
</div>

</section>
   
   <h1 className="text-center  py-3 px-2"> <p>Copyright © 2023 - All right reserved by library management system</p></h1>
        </footer>

        

        </>
    );
};

export default Footer;