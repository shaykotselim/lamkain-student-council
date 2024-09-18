import Image from "next/image";
import Contact from "../contact/Contact";
import logo from "../../assets/Image/logo1.png";
import backgroundImage from "../../assets/Image/bg/bg-smooth.jpg";
import { ImFacebook2 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import Link from "next/link";
const Footer = () => {
  return (
    <div >
      {/* bg-gradient-to-b from-[#e4f5f5] to-slate-100 */}
      <section
        className="w-full p-10 bg-cover"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <div className=" lg:w-[30%] mx-auto">
          <Contact />
        </div>
      </section>
      <footer className="footer bg-white text-neutral-content p-12 flex lg:flex-row md:flex-row flex-col justify-start md:justify-around lg:justify-around items-center">
        <aside className=" flex flex-col">
          <div className="flex mx-auto">
            <Image className="h-[150px] w-[150px]" src={logo} alt="logo" />
          </div>
          <p className="text-black">
            Lamkine Student Council
            <br />
            Estd: 2024
          </p>
        </aside>
        <nav>
          <h6 className=" text-xl font-normal text-black">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link
              target="_blank"
              href={
                "https://www.facebook.com/profile.php?id=100064823643075&mibextid=ZbWKwL"
              }
              className="cursor-pointer"
            >
              <ImFacebook2 className="text-gray-500 text-2xl" />
            </Link>
            <Link
              target="_blank"
              href={"https://x.com/home"}
              className="cursor-pointer"
            >
              <FaSquareXTwitter className="text-gray-500 text-2xl" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.youtube.com"}
              className="cursor-pointer"
            >
              <IoLogoYoutube className="text-gray-500 text-2xl" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
