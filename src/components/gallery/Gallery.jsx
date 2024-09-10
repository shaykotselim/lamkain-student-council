"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import firstImage from "../../assets/Image/hero.jpg";
import secondImage from "../../assets/Image/hero2.jpg";
import thirdImage from "../../assets/Image/hero.jpg";
import fourthImage from "../../assets/Image/hero.jpg";
import fiveImage from "../../assets/Image/hero.jpg";
import sixImage from "../../assets/Image/hero.jpg";
import Image from "next/image";
const Gallery = () => {
  return (
    <div>
      <div className="border  w-[90%] md:w-[20%] lg:w-[20%] mx-auto bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded shadow-gray-400 shadow-lg">
        <h1 className=" p-4 text-xl font-extrabold hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-500 shadow-md shadow-white">Sports Activities & Events</h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mt-8 md:mt-10 lg:mt-20"
        breakpoints={{
          // When window width is >= 640px (desktop)
          640: {
            slidesPerView: 3,
          },
          // When window width is <= 640px (mobile)
          0: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={firstImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={secondImage} alt="Gallery" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Gallery;
