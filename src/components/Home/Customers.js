import React, { Component } from "react";
import TestimonialCard from "../Home/TestimonialCard";
import frame1 from '../../Images/frame1.png'
import frame2 from '../../Images/frame2.png'
import frame3 from '../../Images/frame3.png'
import Slider from "react-slick";


const Customers = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div className="bg-[#F3F7FF] p-10">
      <div className="py-10 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold max-w-[50vw] text-center">
          Here’s what our <span className="text-blue-400">customers</span> say.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <TestimonialCard text='We stuggled for years to find an IT company that we could trust, Let
          alone understand. While others would try to sell us IT solutions.
          Plausilbility solutions actually took the time to listen to what made
          us unique as a business.' name='Jenny Wilson' post='IT manager, XYZ Corp.' image={frame1}/>
        <TestimonialCard text='We stuggled for years to find an IT company that we could trust, Let
          alone understand. While others would try to sell us IT solutions.
          Plausilbility solutions actually took the time to listen to what made
          us unique as a business.' name='Robert Fox' post='IT manager, XYZ Corp.' image={frame2}/>
        <TestimonialCard text='We stuggled for years to find an IT company that we could trust, Let
          alone understand. While others would try to sell us IT solutions.
          Plausilbility solutions actually took the time to listen to what made
          us unique as a business.' name='Ronald Richards' post='IT manager, XYZ Corp.' image={frame3}/>
      </div>
    </div>
  );
};

export default Customers;
