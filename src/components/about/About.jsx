"use client";
import Image from "next/image";
import React from "react";
import biddut from "../../assets/Image/about/bidut.jpg";
import tanvir from "../../assets/Image/about/tanvir-ahmed.jpg";
import mustakim from "../../assets/Image/about/mostakim.jpg";
const About = () => {
  return (
    <div
      id="about"
      className=" w-[95%] mx-auto  bg-[#fffdf2] flex items-center justify-center"
    >
      <div className=" mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className=" md:grid lg:grid grid-cols-3 gap-12 bg-white">
          <div className="container text-left p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-md font-normal text-gray-700 mb-6">
              We aim to foster a sense of responsibility, teamwork, and
              leadership among students by organizing sports activities, social
              service projects, and community outreach programs.
            </p>
          </div>

          <div className="container text-left p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-md font-normal text-gray-700 mb-6">
              Our vision is to build a future where students play an active role
              in shaping their communities, helping others during disasters, and
              promoting positive change through collaboration and compassion.
            </p>
          </div>

          <div className="container text-left p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-md font-normal text-gray-700">
              From organizing sports activities that encourage physical fitness
              and teamwork to participating in relief efforts during times of
              disaster, Lamkain Student Council is committed to making a
              meaningful impact.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-4xl font-bold text-center mb-6">
            About Lamkain Student Council
          </h1>

          <p className="text-left md:text-center lg:text-center text-sm font-normal text-gray-700 mb-6">
            At Lamkain Student Council, we are dedicated to making a difference
            in our community through active engagement in sports, social
            initiatives, and disaster relief efforts. Our student-driven
            organization fosters teamwork, leadership, and social responsibility
            by organizing sports activities and events that bring students
            together. Beyond the field, we step up in times of crisis, providing
            food and relief to those affected by disasters such as floods and
            the COVID-19 pandemic. We believe in the power of unity and
            compassion to bring about positive change.
          </p>
        </div>
        <div className="lg:grid md:grid-cols-3 lg:grid-cols-3 gap-12 mt-12">
          <div className="container text-left p-6 rounded shadow-md">
            <div className="flex items-center justify-center mb-8">
              <Image
                className="w-[200px] h-[200px] rounded-full"
                src={biddut}
                alt="Nazmul Ahmed Biddut"
              />
            </div>
            <h2 className="text-2xl font-bold">Nazmul Ahmed Biddut</h2>
            <p className="text-sm font-normal mb-4">
              President, Lamkain Student Council
            </p>
            <p className="text-md font-normal text-gray-700 mb-6">
              As the President of the Lamkain Student Council, it is a great
              honor for me to share a few words with all of you today. Our
              journey, as an organization committed to promoting sports,
              fostering social responsibility, and responding to crises, has
              been nothing short of extraordinary. What makes it truly special
              is the active participation and dedication of our members—students
              who have stepped up time and time again to make a difference.
            </p>
          </div>

          <div className="container text-left p-6 rounded shadow-md">
            <div className="flex justify-center items-center mb-8">
              <Image
                className="w-[200px] h-[200px] rounded-full"
                src={tanvir}
                alt="Nazmul Ahmed Biddut"
              />
            </div>
            <h2 className="text-2xl font-bold">Tanvir Ahmed</h2>
            <p className="text-sm font-normal mb-4">
              Chief Advisor, Lamkain Student Council
            </p>
            <p className="text-md font-normal text-gray-700 mb-6">
              It is with great pride that I address you today as the Chief
              Advisor of the Lamkain Student Council. Over the years, we have
              seen this council grow from a small, student-led organization to a
              dynamic force for change in our community. What began as a simple
              initiative to engage students in sports and social activities has
              evolved into a movement dedicated to serving those in need and
              building a stronger, more united society.
            </p>
          </div>

          <div className="container text-left p-6 rounded shadow-md">
            <div className="flex justify-center items-center mb-8">
              <Image
                className="w-[200px] h-[200px]  rounded-full"
                src={mustakim}
                alt="Nazmul Ahmed Biddut"
              />
            </div>
            <h2 className="text-2xl font-bold">Mustakim Ahmed Riyedh</h2>
            <p className="text-sm font-normal mb-4">
              General Secretary, Lamkain Student Council
            </p>
            <p className="text-md font-normal text-gray-700">
              As General Secretary, I have had the privilege of working closely
              with our dedicated members to coordinate various
              activities—whether It s organizing sports events, conducting
              relief efforts, or launching community projects. Every initiative
              we undertake is driven by the desire to make a meaningful impact
              on the lives of others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
