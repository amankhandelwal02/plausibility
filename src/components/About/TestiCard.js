import React from "react";
import Comma from "../../Images/Comma.png";
import Avatar from "@mui/material/Avatar";

const TestiCard = ({ image, name, post, text }) => {
  return (
    <div className="bg-[#F3F7FF] rounded-3xl relative py-6 px-8">
      <div className="flex space-x-3">
        <div className="mb-4">
          <Avatar sx={{ width: 40, height: 40 }} src={image} />
        </div>
        <div className="flex absolute top-[-15px] right-[23px]">
          <img src={Comma} alt="" className="h-9" />
          <img src={Comma} alt="" className="h-9" />
        </div>
        <div className="">
          <h1 className="text-sm font-bold">{name}</h1>
          <p className="text-sm">{post}</p>
        </div>
      </div>
      <div className="text-sm">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TestiCard;

{
}
