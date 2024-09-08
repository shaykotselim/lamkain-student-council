import Image from "next/image";
import React from "react";
import imageIntro from "../../assets/Image/hero.jpg";
const Introduction = () => {
  return (
    <div className="w-[80%] mx-auto my-20">
      <div className="lg:grid grid-cols-5 gap-8 items-center ">
        <div className="col-span-3 flex justify-center">
          <Image
            className="w-[80%] h-auto rounded-md"
            src={imageIntro}
            alt="Image"
          ></Image>
        </div>
        <div className="col-span-2">
          <h1 className="text-left font-bold text-3xl p-8 border-black shadow-lg rounded-md">
            Introduction: Who We Are?
          </h1>
          <p className="text-left font-normal  p-8  shadow-2xl rounded-md">
            Lamkine Student Council is a student-led organization dedicated to
            empowering youth through sports, community service, and humanitarian
            efforts. Our mission is to foster leadership, teamwork, and social
            responsibility by engaging students in activities that build
            stronger, more compassionate communities. <br /> From organizing
            sports events that promote physical health and unity to providing
            critical relief during natural disasters, such as floods and the
            COVID-19 pandemic, Lamkine Student Council plays a vital role in
            uplifting those in need. We believe in the power of students to make
            a difference and lead the way in creating a brighter future for all.
          </p>
          <p className="text-left font-normal mt-4 border-blue-400 border-b-4"></p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
