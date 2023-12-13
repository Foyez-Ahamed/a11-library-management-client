import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import { BiSolidQuoteLeft } from 'react-icons/bi';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Reviews = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");

      return res.data;
    },
  });

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Feedback</h1>
        <progress
          className="progress progress-primary w-[100px]"
          value="20"
          max="100"
        ></progress>
      </div>

     <div className="mt-10">
     <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            reviews.map(review => <SwiperSlide key={review._id}>
            
                <div className=" px-14 space-y-4 lg:px-20">
                            <p className="flex justify-center text-6xl mb-4"><BiSolidQuoteLeft></BiSolidQuoteLeft></p>
                            <p className="flex justify-center text-6xl mb-4"> <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly /></p>
                            <p>{review.details}</p>
                            <p className="text-center mt-2 uppercase font-bold text-[#0087EB]">{review.name}</p>
                          </div>
                </SwiperSlide>)
        }
        
      </Swiper>
     </div>

    </div>
  );
};

export default Reviews;
