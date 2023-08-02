import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Navigation } from "swiper/modules";
import Container from "../shared/Container";
import Subtitle from "../shared/Heading/Subtitle";
import Heading from "../shared/Heading/Heading";
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    },[])
  return (
    <div className='py-10 md:py-14 bg-cover bg-center bg-no-repeat bg-[url("../src/assets/Images/Moon.svg")]'>
      <Container>
        <div className="flex items-center flex-col">
          <Subtitle label="What our student say" />
          <Heading title="Testimonial" white />
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex items-center flex-col justify-center w-4/5 mx-auto">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-4 text-neutral-100">{review.details}</p>
                <h3 className="text-2xl font-semibold text-cyan-200">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonial;
