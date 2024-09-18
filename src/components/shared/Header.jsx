"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/Image/logo1.png";
import { FiAlignJustify } from "react-icons/fi";
import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const setScroll = () => {
    if (window.scrollY >= 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);
  return (
    <div
      className={`z-50 w-full fixed flex items-center ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-md top-0 transition ease-in-out duration-1000"
          : "bg-opacity-20 bg-black transition ease-in-out duration-1000"
      }`}
    >
      <div className="navbar-start ">
        <div className="dropdown lg:flex lg:gap-9">
          <div
            tabIndex={1}
            role="button"
            className={`text-4xl lg:hidden -ml-[80px] ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <FiAlignJustify />
          </div>
          <ul
            tabIndex={1}
            className={`menu-sm dropdown-content mt-3 p-2 -ml-[80px] rounded w-40 ${
              isScrolled
                ? "bg-white/80 backdrop-blur-md shadow-md top-0 transition ease-in-out duration-1000"
                : "bg-black bg-opacity-70 transition ease-in-out duration-1000"
            }`}
          >
            <li
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className={`border-b-2 px-4 py-3 ${
                isScrolled
                  ? "text-black border-black"
                  : "text-white border-white"
              }`}
            >
              <span>Home</span>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className={`border-b-2 px-4 py-3 ${
                isScrolled
                  ? "text-black border-black"
                  : "text-white border-white"
              }`}
            >
              <span>About</span>
            </li>

            <li
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("gallery");
              }}
              className={`border-b-2 px-4 py-3 ${
                isScrolled
                  ? "text-black border-black"
                  : "text-white border-white"
              }`}
            >
              <span>Glarry</span>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className={`border-b-2 px-4 py-3 ${
                isScrolled
                  ? "text-black border-black"
                  : "text-white border-white"
              }`}
            >
              <span>Contact us</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-28 lg:-ml-[600px] rounded-full  ">
        <Image
          className="rounded h-16 lg:h-28 w-auto"
          alt="Lamkain-Student-Council"
          src={logo}
        />
      </div>

      {/*---------------- For Desktop Area------------- */}
      <div className="hidden lg:flex lg:ml-[700px] lg:items-start ">
        <ul className=" flex items-center gap-8 px-1">
          <li
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className={`border-b-2 cursor-pointer ${
              isScrolled ? "text-black border-black" : "text-white border-white"
            }`}
          >
            <span>Home</span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className={`border-b-2 cursor-pointer ${
              isScrolled ? "text-black border-black" : "text-white border-white"
            }`}
          >
            <span>About</span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("gallery");
            }}
            className={`border-b-2 ${
              isScrolled ? "text-black border-black" : "text-white border-white"
            }`}
          >
            <span>Glarry</span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className={`border-b-2 cursor-pointer ${
              isScrolled ? "text-black border-black" : "text-white border-white"
            }`}
          >
            <span href="/">Contact Us</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
