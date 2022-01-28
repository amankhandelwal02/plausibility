import React from "react";
import Avatar from "@mui/material/Avatar";
import Vector from "../../Images/Vector.png";

const TestimonialCard = ({text, name, post, image, cardBg}) => {
  return (
    <div className={`bg-${cardBg} flex flex-col items-center justify-center relative px-4 py-7 rounded-3xl mx-2`}>
        <div className="mb-8">
          <Avatar sx={{ width: 56, height: 56 }} src={image} />
          </div>
        <div className="bg-yellow-400 p-2 rounded-full absolute top-[49px] right-[153px] hidden">
          <img src={Vector} alt="" className="h-3 mr-[1px]" />
          <img src={Vector} alt="" className="h-3" />
        </div>

        <p className='mb-7 text-center'>
          {text}
        </p>
        <p className='text-xl font-bold'>{name}</p>
        <p className='text-base text-gray-500'>{post}</p>
    </div>
  );
};

export default TestimonialCard;
