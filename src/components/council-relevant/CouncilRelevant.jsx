"use client";
import Image from "next/image";
import React from "react";
import helpingHand from "../../assets/Image/council/hand-with-a-pill.gif";
import getInvolved from "../../assets/Image/council/connect.gif";
import giveBack from "../../assets/Image/council/hand.gif";
const CouncilRelevant = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center text-3xl lg:text-4xl pt-4 md:pt-6 lg:pt-8">The Relevant of Lamkine Student Council</h1>
      </div>
      <div className="md:grid lg:grid grid-cols-3 gap-8 w-[95%] mx-auto mt-8">
        <section
          id="helping-hand"
          className="py-10 bg-[#fffdf2] col-span-1  p-8 rounded-lg shadow-md "
        >
          <div className="container mx-auto">
            <div>
              <Image className="w-8" src={helpingHand} alt="helping-hand" />
            </div>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-left">
              Helping Hand
            </h2>
            <p className="text-md font-light text-gray-700 text-left">
              At Lamkine Student Council, our commitment to providing aid during
              times of crisis is at the heart of our mission. Our Helping Hand
              initiative focuses on delivering essential relief to those
              affected by natural disasters, health emergencies, and other
              urgent situations.
            </p>
          </div>
        </section>

        <section
          id="get-involved"
          className="py-10 bg-[#fffdf2] col-span-1  p-8  rounded-lg shadow-md  mt-8 md-mt-0 lg:mt-0"
        >
          <div className="container mx-auto">
            <div>
              <Image className="w-8" src={getInvolved} alt="helping-hand" />
            </div>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-left">
              Get Involved
            </h2>
            <p className="text-md font-light text-gray-700 text-left">
              Your involvement is crucial to the success of our programs and
              initiatives. The Get Involved section is designed to offer various
              ways for you to contribute to our cause. Whether you’re a student
              eager to participate in our events, a volunteer looking to lend a
              hand.
            </p>
          </div>
        </section>

        <section
          id="giving-back"
          className="py-10 bg-[#fffdf2] col-span-1 p-8 rounded-lg shadow-md mt-8 md-mt-0 lg:mt-0"
        >
          <div className="container mx-auto">
            <div>
              <Image className="w-8" src={giveBack} alt="helping-hand" />
            </div>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-left">
              Giving Back
            </h2>
            <p className="text-md font-light text-gray-700 text-left">
              Giving back is a core value of the Lamkine Student Council. In
              this section, we highlight the many ways our members and
              supporters contribute to the betterment of society. Our Giving
              Back initiative encompasses everything from organizing charity
              events.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CouncilRelevant;
