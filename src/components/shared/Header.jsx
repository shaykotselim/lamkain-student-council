"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/Image/logo1.png";
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  return (
    <div className="navbar z-50 fixed  shadow-md  bg-opacity-40 bg-black transition ease-in-out duration-1000 h-28 ">  
      <div className="navbar-start">
        <div className="dropdown lg:flex lg:gap-9">
          <div tabIndex={0} role="button" className="text-4xl text-white lg:hidden">
            <FiAlignJustify />
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content mt-3 z-[1] p-2   rounded w-40 bg-blue-400"
          >
             <li className="text-white  border-b-2 px-4 py-3 ">
            <Link href="/">Home</Link>
          </li>
          <li>
     
          </li>
          <li className="text-white  border-b-2 px-4 py-3 ">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-white  border-b-2 px-4 py-3">
            <Link href="/">Glarry</Link>
          </li>
          <li className="text-white border-b-2 px-4 py-3 ">
            <Link href="/">Contact us</Link>
          </li>
          <li className="text-white  border-b-2 px-4 py-3 ">
            <Link href="/">About</Link>
          </li>
          </ul>
        </div>
      </div>
      <div className="ml-24 lg: lg:navbar-center lg:-ml-[600px]  rounded-full  ">
        <Image
          className="rounded h-16 lg:h-28 w-auto"
          alt="Lamkain-Student-Council"
          src={logo}
        />
      </div>
      {/*---------------- For Desktop Area------------- */}
      <div className="hidden lg:flex lg:ml-[600px]">
        <ul className=" flex gap-4 px-1">
          <li className="text-white border-b-2 px-4 py-3">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white  border-b-2 px-4 py-3 ">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-white  border-b-2 px-4 py-3">
            <Link href="/">Glarry</Link>
          </li>
          <li className="text-white  border-b-2 px-4 py-3">
            <Link href="/">Contact</Link>
          </li>
          <li className="text-white  border-b-2 px-4 py-3">
            <Link href="/">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
