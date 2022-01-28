import React from "react";
import pattern from "../../Images/pattern.png";
import About from "../../Images/about.png";

const AboutBanner = () => {
  return (
    <div>
      <div className="bg-[#F7FAFF] h-[86vh] lg:h-[62vh] block lg:flex items-center relative">
        <div className="absolute">
          <img src={pattern} alt="" className="h-[350px]" />
        </div>
        <div className="max-w-lg lg:max-w-xl py-20 px-10 lg:px-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8">Who we are?</h1>
          <p className="text-lg">
            We’re a team of dedicated wellness enthusiasts and entrepreneurs
            working remotely across the globe. From expert coaches to talented
            developers.
          </p>
        </div>

        <div className="z-10 absolute right-32 hidden lg:block">
          <img
              src={About}
            alt=""
            className="h-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
