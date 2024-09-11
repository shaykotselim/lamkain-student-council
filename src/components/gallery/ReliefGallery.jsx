"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import firstImage from "../../assets/Image/relief/relief1.jpg";
import secondImage from "../../assets/Image/relief/relief2.jpg";
import thirdImage from "../../assets/Image/relief/relief3.jpg";
import fourthImage from "../../assets/Image/relief/relief4.jpg";
import fiveImage from "../../assets/Image/relief/relief5.jpg";
import sixImage from "../../assets/Image/relief/relief6.jpg";
import sevenImage from "../../assets/Image/relief/relief7.jpg";
const ReliefGallery = () => {
  return (
    <div>
      <div className="border  w-[90%] md:w-[20%] lg:w-[20%] mx-auto bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded shadow-gray-400 shadow-lg">
        <h1 className=" p-4 text-xl font-extrabold hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-500 shadow-md shadow-white">
          Disaster Relief Gallery
        </h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={1}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[100%]"
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
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={thirdImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={fourthImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={fiveImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={sixImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={sevenImage} alt="Gallery" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default ReliefGallery;
