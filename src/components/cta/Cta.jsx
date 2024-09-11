import Link from "next/link";
import React from "react";
import { MdContactPage } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
const Cta = () => {
  return (
    <div className="bg-[#fffdf2] rounded-md w-[95%] mx-auto my-20 md:flex lg:flex items-center justify-center shadow-lg">
      <div className=" p-8 ">
        <div className="p-4 border-2 text-black hover:text-white rounded-md  bg-[#ffff] hover:bg-black flex gap-2 items-center justify-center shadow-md shadow-black">
          <MdContactPage className="text-3xl font-bold transition ease-in-out duration-300 hover:scale-0" />

          <p className="text-xl ">Contact Us</p>
        </div>
      </div>
      <div className=" p-8 ">
        <div className="p-4 border-2 text-black hover:text-white rounded-md  bg-[#ffff] hover:bg-black flex gap-2 items-center justify-center shadow-md shadow-black">
          <FaPhoneVolume className="text-3xl font-bold transition ease-in-out duration-300 hover:scale-0" />
          <p className=" text-xl">+8801767-819874</p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
