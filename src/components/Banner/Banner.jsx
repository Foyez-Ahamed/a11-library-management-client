import bannerOne from "../../../src/assets/images/slider1.jpg"
import bannerTwo from "../../../src/assets/images/slider2.jpg"
import bannerThree from "../../../src/assets/images/slider3.jpg"
import bannerFour from "../../../src/assets/images/slider4.jpg"

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const Banner = () => {
    return (
        <div className="carousel w-full h-screen lg:h-[500px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={bannerOne}
          className="w-full object-cover rounded-md"
        />

          <div className="absolute flex items-center left-0 right-0 bottom-0 bg-gradient-to-r from-[#131313] to-[rgba(21, 21, 21, 0.05)] rounded-xl h-full p-3">
           
           <div className="text-white te space-y-7 absolute lg:left-20">
            <h1 className="text-4xl text-[#FFFDFE] font-bold">Recollect your past for the future </h1>
            <p className="font-bold"> Find books, media, databases, journals and digital resources. <br /> The library is open <span className="text-2xl text-[#0087EB] font-bold">10:00 AM - 8:00 PM</span></p>

            <div className="flex gap-7">
            <button className=" px-4 py-2 bg-[#0087EB] font-bold rounded-md hover:bg-gray-500 hover:text-white">Find Books</button>
            <button className="px-4 py-2 border border-[#0087EB] hover:bg-gray-500 hover:text-white hover:border-none rounded-md font-bold">Borrow Books</button>
            </div>
           </div>

        </div>

        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
          <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#0087EB]">
            <AiOutlineArrowRight className="text-xl text-white hover:text-black"></AiOutlineArrowRight>
          </a>
        </div>
      </div>


      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={bannerTwo}
          className="w-full object-cover rounded-xl"
        />

          <div className="absolute flex items-center left-0 right-0 bottom-0 bg-gradient-to-r from-[#131313] to-[rgba(21, 21, 21, 0.05)] rounded-xl h-full p-3">
           
           <div className="text-white te space-y-7 absolute lg:left-20">
            <h1 className="text-4xl text-[#FFFDFE] font-bold">Recollect your past for the future </h1>
            <p className="font-bold"> Find books, media, databases, journals and digital resources. <br /> The library is open <span className="text-2xl text-[#0087EB] font-bold">10:00 AM - 8:00 PM</span></p>

            <div className="flex gap-7">
            <button className=" px-4 py-2 bg-[#68AFFF] font-bold rounded-md hover:bg-gray-500 hover:text-white">Find Books</button>
            <button className="px-4 py-2 border border-[#0087EB] hover:bg-gray-500 hover:text-white hover:border-none rounded-md font-bold">Borrow Books</button>
            </div>
           </div>

        </div>

       <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
          <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#0087EB]">
            <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
          </a>
        </div>
      </div>


      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={bannerThree}
          className="w-full object-cover rounded-xl"
        />
         
         <div className="absolute flex items-center left-0 right-0 bottom-0 bg-gradient-to-r from-[#131313] to-[rgba(21, 21, 21, 0.05)] rounded-xl h-full p-3">
           
           <div className="text-white te space-y-7 absolute lg:left-20">
            <h1 className="text-4xl text-[#FFFDFE] font-bold">Recollect your past for the future </h1>
            <p className="font-bold"> Find books, media, databases, journals and digital resources. <br /> The library is open <span className="text-2xl text-[#0087EB] font-bold">10:00 AM - 8:00 PM</span></p>

            <div className="flex gap-7">
            <button className=" px-4 py-2 bg-[#68AFFF] font-bold rounded-md hover:bg-gray-500 hover:text-white">Find Books</button>
            <button className="px-4 py-2 border border-[#0087EB] hover:bg-gray-500 hover:text-white hover:border-none rounded-md font-bold">Borrow Books</button>
            </div>
           </div>

        </div>

       <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
          <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#0087EB]">
            <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
          </a>
        </div>
      </div>


      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={bannerFour}
          className="w-full object-cover rounded-xl"
        />


          <div className="absolute flex items-center left-0 right-0 bottom-0 bg-gradient-to-r from-[#131313] to-[rgba(21, 21, 21, 0.05)] rounded-xl h-full p-3">
           
           <div className="text-white te space-y-7 absolute lg:left-20">
            <h1 className="text-4xl text-[#FFFDFE] font-bold">Recollect your past for the future </h1>
            <p className="font-bold"> Find books, media, databases, journals and digital resources. <br /> The library is open <span className="text-2xl text-[#0087EB] font-bold">10:00 AM - 8:00 PM</span></p>

            <div className="flex gap-7">
            <button className=" px-4 py-2 bg-[#68AFFF] font-bold rounded-md hover:bg-gray-500 hover:text-white">Find Books</button>
            <button className="px-4 py-2 border border-[#0087EB] hover:bg-gray-500 hover:text-white hover:border-none rounded-md font-bold">Borrow Books</button>
            </div>
           </div>

        </div>

       <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle bg-[#0087EB]">
          <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
          </a>
          <a href="#slide1" className="btn btn-circle">
            <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
          </a>
        </div>
      </div>
    </div>
    );
};

export default Banner;