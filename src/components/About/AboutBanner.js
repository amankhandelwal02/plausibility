import React from "react";
import pattern from "../../Images/pattern.png";

const AboutBanner = ({heading, subheading, image}) => {
  return (
    <div>
      <div className="bg-[#F7FAFF] h-[86vh] lg:h-[62vh] block lg:flex items-center relative">
        <div className="absolute">
          <img src={pattern} alt="" className="h-[350px]" />
        </div>
        <div className="max-w-lg lg:max-w-xl py-20 px-10 lg:px-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{heading}</h1>
          <p className="text-lg">
           {subheading}
          </p>
        </div>

        <div className="z-10 absolute right-32 hidden lg:block">
          <img
              src={image}
            alt=""
            className="h-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
