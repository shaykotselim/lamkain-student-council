import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-blue-200">
      <div className="border w-[20%] mx-auto p-2 bg-blue-800 text-white rounded">
        <h1 className="text-4xl">What We Do?</h1>
        <p className="border-2 mt-1 w-[80%] border-black mx-auto"></p>
      </div>
      <div className="lg:grid grid-cols-3 w-[95%] mx-auto">
        <div className="text-left  rounded p-4 ">
          <div className="p-4 text-xl  shadow-md shadow-gray-300  rounded text-center">
            <h1>Sports Activities</h1>
          </div>
          <article className="text-lg font-light p-4 mt-8 rounded-lg text-black shadow-gray-400 shadow-md  bg-white/4">
            We organize various sports events to promote physical fitness,
            teamwork, and leadership skills among students. These activities not
            only foster healthy competition but also create a sense of unity and
            belonging within our community.
          </article>
        </div>
        <div className="text-left  rounded p-4 ">
          <div className="p-4 text-xl  shadow-md shadow-gray-300  rounded text-center">
            <h1>Disaster Relief</h1>
          </div>
          <article className="text-lg font-light p-4 mt-8 rounded-lg text-black shadow-gray-400 shadow-md  bg-white/4">
            Disaster Relief: During natural disasters such as floods or health
            crises, we step in to provide food, essential
            supplies, and relief to those affected. Our dedicated team works
            tirelessly to ensure that no one is left behind in times of need.
          </article>
        </div>
        <div className="text-left  rounded p-4 ">
          <div className="p-4 text-xl  shadow-md shadow-gray-300  rounded text-center  ">
            <h1>Social Responsibility</h1>
          </div>
          <article className="text-lg font-light p-4 mt-8 rounded-lg text-black shadow-gray-400 shadow-md  bg-white/4">
             We are deeply committed to contributing to
            the betterment of society. Our social initiatives extend beyond
            disaster relief, as we actively participate in and support
            community-building projects and welfare programs.
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
