"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import firstImage from "../../assets/Image/sports/sports1.jpg";
import secondImage from "../../assets/Image/sports/sports2.jpg";
import thirdImage from "../../assets/Image/sports/sports3.jpg";
import fourthImage from "../../assets/Image/sports/sports4.jpg";
import fiveImage from "../../assets/Image/sports/sports5.jpg";
import sixImage from "../../assets/Image/sports/sports6.jpg";
import sevenImage from "../../assets/Image/sports/sports7.jpg";
import eightImage from "../../assets/Image/sports/sports8.jpg";
import nineImage from "../../assets/Image/sports/sports9.jpg";
import tenImage from "../../assets/Image/sports/sports10.jpg";
import elevenImage from "../../assets/Image/sports/sports11.jpg";
import twelveImage from "../../assets/Image/sports/sports12.jpg";
import thirtyImage from "../../assets/Image/sports/sports13.jpg";
import foutyImage from "../../assets/Image/sports/sports14.jpg";
import fifteenImage from "../../assets/Image/sports/sports15.jpg";
import sixteenImage from "../../assets/Image/sports/sports16.jpg";
import seventyImage from "../../assets/Image/sports/sports17.jpg";


import Image from "next/image";
const SportsGallery = () => {
  return (
    <div className="mt-10 md:mt-20 lg:mt-20">
      <div className="mt-4 borde mx-auto w-[95%] md:w-[20%] lg:w-[20%] hover:bg-black hover:text-white  bg-[#fffdf2] text-black rounded shadow-black shadow-lg ">
        <h1 className=" p-4 text-xl ">Sports Activities & Events</h1>
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
        className="mySwiper w-[90%] md:w-[100%] lg:w-[100%] mt-10 md:mt-20 lg:mt-20 rounded"
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
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={eightImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={nineImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={tenImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={elevenImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={twelveImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={thirtyImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={foutyImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={fifteenImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={sixteenImage} alt="Gallery" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image className="w-full h-[400px]" src={seventyImage} alt="Gallery" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default SportsGallery;
