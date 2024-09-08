import Link from "next/link";
import React from "react";
import { MdContactPage } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
const Cta = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 0 to-blue-500 via-blue-400 rounded-md w-[95%] mx-auto my-20 flex items-center justify-center">
      <div className=" p-8 ">
        <div className="p-4 border-2 text-white rounded-md  bg-gradient-to-r hover: from-blue-500 hover:to-blue-700 flex gap-2 items-center justify-center shadow-md shadow-white">
          <MdContactPage className="text-3xl font-bold transition ease-in-out duration-300 hover:scale-0" />

          <p className="text-xl ">Contact Us</p>
        </div>
      </div>
      <div className=" ">
        <div className="p-4 border-2 text-white rounded-md  bg-gradient-to-r hover: from-blue-500 hover:to-blue-700 flex gap-2 items-center justify-center shadow-md shadow-white">
          <FaPhoneVolume className="text-3xl font-bold transition ease-in-out duration-300 hover:scale-0" />
          <p className=" text-xl">
            +8801767-819874
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
