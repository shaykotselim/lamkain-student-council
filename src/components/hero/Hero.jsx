import React from "react";
import backgroudImage from "../../assets/Image/hero2.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroudImage.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[70%]">
            <h1 className="mb-5 text-3xl font-bold">
              Empowering Students, Serving Communities
            </h1>
            <p className="mb-5">
              Uniting youth through sports, social service, and disaster relief.
              Together, we build a stronger, more compassionate world.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
