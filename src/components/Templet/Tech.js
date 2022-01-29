import React from "react";
import tech1 from "../../Images/tech1.png";
import tech2 from "../../Images/tech2.png";
import tech3 from "../../Images/tech3.png";
import tech4 from "../../Images/tech4.png";
import tech5 from "../../Images/tech5.png";
import tech6 from "../../Images/tech6.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Tech = ({ title }) => {
  return (
    <div>
      <div className="py-5 flex bg-[#F3F7FF] flex-col items-center justify-center space-y-8">
        <div className="px-10">
          <h1 className="text-3xl font-bold md:max-w-[70vw] lg:max-w-[50vw] text-center">
            {title}
          </h1>
        </div>
        <div className="flex items-center space-x-16">
          <div>
            <img src={tech1} alt="" className="h-[30px]" />
          </div>
          <div>
            <img src={tech2} alt="" className="h-[30px]" />
          </div>
          <div>
            <img src={tech3} alt="" className="h-[30px]" />
          </div>
          <div>
            <img src={tech4} alt="" className="h-[30px]" />
          </div>
          <div>
            <img src={tech5} alt="" className="h-[30px]" />
          </div>
          <div>
            <img src={tech6} alt="" className="h-[30px]" />
          </div>
        </div>
        <div className="flex items-center justify-center mt-7 space-x-5">
          <div className="bg-[#656565] p-2 rounded-full hover:cursor-pointer">
            <ArrowRightAltIcon className="rotate-180 text-white" />
          </div>
          <div className="bg-[#3DB3F5] p-2 rounded-full hover:cursor-pointer">
            <ArrowRightAltIcon className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
