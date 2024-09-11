import Image from "next/image";
import React from "react";
import sports from "../../assets/Image/council/lineman.png";
import disester from "../../assets/Image/council/humanitaria.jpg";
import social from "../../assets/Image/council/social-worker.png";
const About = () => {
  return (
    <div className="">
      <div className="mt-4 borde mx-auto w-[95%] md:w-[20%] lg:w-[20%] hover:bg-black hover:text-white  bg-[#fffdf2] text-black rounded shadow-black shadow-lg">
        <h1 className="p-4 text-xl font-extrabold">
          What We Do?
        </h1>
      </div>

      <div className="md:grid lg:grid grid-cols-3 gap-8 w-[95%] mx-auto mt-8">
        <section
          id="helping-hand"
          className="py-10 bg-[#fffdf2] col-span-1  p-8 rounded-lg shadow-md "
        >
          <div className="container mx-auto">
            <div className="flex items-center mt-2 mb-6">
              <Image className="w-8" src={sports} alt="helping-hand" />
              <h2 className="text-3xl font-bold  text-left">
                Sports Activities
              </h2>
            </div>

            <p className="text-md font-light text-gray-700 text-left">
              We organize various sports events to promote physical fitness,
              teamwork, and leadership skills among students. These activities
              not only foster healthy competition but also create a sense of
              unity and belonging within our community.
            </p>
          </div>
        </section>

        <section
          id="get-involved"
          className="py-10 bg-[#fffdf2] col-span-1  p-8  rounded-lg shadow-md  mt-8 md-mt-0 lg:mt-0"
        >
          <div className="container mx-auto">
            <div className="flex items-center mt-2 mb-6 ">
              <Image className="w-8" src={disester} alt="helping-hand" />
              <h2 className="text-3xl font-bold text-left">Disaster Relief</h2>
            </div>

            <p className="text-md font-light text-gray-700 text-left">
              During natural disasters such as floods or health crises like the
              COVID-19 pandemic, we step in to provide food, essential supplies,
              and relief to those affected. Our dedicated team works tirelessly
              to ensure that no one is left behind in times of need.
            </p>
          </div>
        </section>

        <section
          id="giving-back"
          className="py-10 bg-[#fffdf2] col-span-1 p-8 rounded-lg shadow-md mt-8 md-mt-0 lg:mt-0"
        >
          <div className="container mx-auto">
            <div className="flex gap-2 items-center mt-2 mb-6">
              <Image className="w-8" src={social} alt="helping-hand" />
              <h2 className="text-3xl font-bold  text-left">
                Social Responsibility
              </h2>
            </div>

            <p className="text-md font-light text-gray-700 text-left">
              We are deeply committed to contributing to the betterment of
              society. Our social initiatives extend beyond disaster relief, as
              we actively participate in and support community-building projects
              and welfare programs.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
