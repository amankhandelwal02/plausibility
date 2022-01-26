import React from "react";
import TestiCard from "./TestiCard";

const Testi = () => {
  return (
    <div className="p-10 space-y-16 bg-white">
      <div className="flex flex-col items-center justify-center text-center px-20 space-y-6">
        <h1 className="text-3xl font-bold">Testimonials</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <TestiCard
          name="Ralph Edwards"
          post="CEO, Founder of Alpha Tech"
          text="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequat duis enim velit mollit. Exercitation 
veniam consequat sunt nostrud amet."
        />
        <TestiCard
          name="Kristin Watson"
          post="Graphic Designer"
          text="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequat duis enim velit mollit. Exercitation 
veniam consequat sunt nostrud amet."
        />
        <TestiCard
          name="Courtney Henry"
          post="Freelancer"
          text="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequat duis enim velit mollit. Exercitation 
veniam consequat sunt nostrud amet."
        />
        <TestiCard
          name="Theresa Webb"
          post="HR Manager, Infosys"
          text="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequat duis enim velit mollit. Exercitation 
veniam consequat sunt nostrud amet."
        />
        <TestiCard
          name="Jerome Bell"
          post="Student"
          text="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequat duis enim velit mollit. Exercitation 
veniam consequat sunt nostrud amet."
        />
        <TestiCard
          name="Darrell Steward"
          post="Chemist"
          text="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequat duis enim velit mollit. Exercitation 
veniam consequat sunt nostrud amet."
        />
      </div>
    </div>
  );
};

export default Testi;
