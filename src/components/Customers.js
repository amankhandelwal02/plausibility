import React, { Component } from "react";
import TestimonialCard from "./TestimonialCard";

const Customers = () => {


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
          us unique as a business.' name='Jenny Wilson' post='IT manager, XYZ Corp.'/>
        <TestimonialCard text='We stuggled for years to find an IT company that we could trust, Let
          alone understand. While others would try to sell us IT solutions.
          Plausilbility solutions actually took the time to listen to what made
          us unique as a business.' name='Robert Fox' post='IT manager, XYZ Corp.'/>
        <TestimonialCard text='We stuggled for years to find an IT company that we could trust, Let
          alone understand. While others would try to sell us IT solutions.
          Plausilbility solutions actually took the time to listen to what made
          us unique as a business.' name='Ronald Richards' post='IT manager, XYZ Corp.'/>
      </div>
    </div>
  );
};

export default Customers;
