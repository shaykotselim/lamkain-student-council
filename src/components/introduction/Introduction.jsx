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
        {/* <div className="col-span-2">
          <div className="mt-4 border  bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded shadow-gray-400 shadow-lg">
            <h1 className="p-4 text-xl font-extrabold hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-500">
              Introduction: Who We Are?
            </h1>
          </div>
          <h1 className="text-left font-bold text-3xl p-8 border-black shadow-lg rounded-md">
            Introduction: Who We Are?
          </h1>
          <p className="text-left font-normal  p-8  shadow-2xl rounded-md mt-4 lg:mt-8">
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
          <p className="text-left font-normal mt-4 border-black border-b-4"></p>
        </div> */}
        <section
          id="helping-hand"
          className="py-10 bg-[#fffdf2]  p-8 rounded-lg shadow-md col-span-2"
        >
          <div className="container mx-auto">
            {/* <div>
              <Image className="w-8" src={helpingHand} alt="helping-hand" />
            </div> */}
            <h2 className="text-3xl font-bold mt-2 mb-6 text-left">
              Introduction: Who We Are?
            </h2>
            <p className="text-md font-light text-gray-700 text-left">
              Lamkine Student Council is a student-led organization dedicated to
              empowering youth through sports, community service, and
              humanitarian efforts. Our mission is to foster leadership,
              teamwork, and social responsibility by engaging students in
              activities that build stronger, more compassionate communities.{" "}
              <br /> From organizing sports events that promote physical health
              and unity to providing critical relief during natural disasters,
              such as floods and the COVID-19 pandemic, Lamkine Student Council
              plays a vital role in uplifting those in need. We believe in the
              power of students to make a difference and lead the way in
              creating a brighter future for all.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduction;
