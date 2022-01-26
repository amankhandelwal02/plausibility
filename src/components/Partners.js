import React from "react";
import Brand from '../Images/brand.png'

const Partners = () => {
  return (
    <div>
      <div className=" py-5 flex flex-col items-start lg:items-center justify-center space-y-8">
        <div className="px-10">
        <h1 className="text-3xl font-bold md:max-w-[70vw] lg:max-w-[50vw] text-left lg:text-center">
          We’re proud partners with the industry’s leading tech companies.
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
