import React from "react";
import findFb from '../../Images/find-fb.png';
import findIg from '../../Images/find-ig.png';
import findTw from '../../Images/find-tw.png';
import findLi from '../../Images/find-li.png';

const Find = () => {
  return (
    <div>
      <div className="bg-[#F3F7FF] space-y-8 pb-10">
        <div className="flex flex-col space-y-2 items-center text-center justify-center">
          <h1 className="text-3xl font-bold">Find Us Here</h1>
        </div>
        <div className="grid grid-cols-4 sm:gap-6 sm:space-x-0 md:flex md:items-center md:justify-center md:space-x-28">
            <div className="flex flex-col items-center text-center justify-center">
            <img src={findFb} alt="" className="h-12 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col items-center text-center justify-center">
            <img src={findIg} alt="" className="h-12 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col items-center text-center justify-center">
            <img src={findTw} alt="" className="h-12 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col items-center text-center justify-center">
            <img src={findLi} alt="" className="h-12 hover:cursor-pointer" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
