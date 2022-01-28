import React from "react";
import Brand from '../../Images/brand.png'

const Partners = ({text}) => {
  return (
    <div>
      <div className="py-5 flex flex-col items-center justify-center space-y-8">
        <div className="px-5 lg:px-10">
        <h1 className="text-3xl font-bold md:max-w-[70vw] lg:max-w-[50vw] text-center">
          {text}
        </h1>
        </div>
        <div>
        <img src={Brand} alt="" className="h-[80px]" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
