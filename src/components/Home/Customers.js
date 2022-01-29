import React, { Component, useEffect, useRef } from "react";
import TestimonialCard from "../Home/TestimonialCard";
import frame1 from "../../Images/frame1.png";
import frame2 from "../../Images/frame2.png";
import frame3 from "../../Images/frame3.png";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Customers = ({ background, cardBg, heading, paddingY, paddingB  }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`${background} px-10 py-${paddingY} pb-${paddingB}`}>
      <div className="mb-10 flex flex-col items-center justify-center">
        {heading && (
          <p className="text-4xl font-bold max-w-[50vw] text-center">
            {heading}
          </p>
        )}
      </div>
      <Slider {...settings}>
        <TestimonialCard
          text="We stuggled for years to find an IT company that we could trust, Let
          alone understand. While others would try to sell us IT solutions.
          Plausilbility solutions actually took the time to listen to what made
          us unique as a business."
          name="Jenny Wilson"
          post="IT manager, XYZ Corp."
          image={frame1}
          cardBg={cardBg}
        />
        <TestimonialCard
          text="We stuggled for years to find an IT company that we could trust, Let
          alone understand. While others would try to sell us IT solutions.
          Plausilbility solutions actually took the time to listen to what made
          us unique as a business."
          name="Robert Fox"
          post="IT manager, XYZ Corp."
          image={frame2}
          cardBg={cardBg}
        />
        <TestimonialCard
          text="We stuggled for years to find an IT company that we could trust, Let
          alone understand. While others would try to sell us IT solutions.
          Plausilbility solutions actually took the time to listen to what made
          us unique as a business."
          name="Ronald Richards"
          post="IT manager, XYZ Corp."
          image={frame3}
          cardBg={cardBg}
        />
        <TestimonialCard
          text="We stuggled for years to find an IT company that we could trust, Let
          alone understand. While others would try to sell us IT solutions.
          Plausilbility solutions actually took the time to listen to what made
          us unique as a business."
          name="Jenny Wilson"
          post="IT manager, XYZ Corp."
          image={frame1}
          cardBg={cardBg}
        />
      </Slider>
      <div className="flex items-center justify-center mt-7 space-x-5">
        <div
          className="bg-[#656565] p-2 rounded-full hover:cursor-pointer"
        >
          <ArrowRightAltIcon className="rotate-180 text-white" />
        </div>
        <div
          className="bg-[#3DB3F5] p-2 rounded-full hover:cursor-pointer"
        >
          <ArrowRightAltIcon className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Customers;
