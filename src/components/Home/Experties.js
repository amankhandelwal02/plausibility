import React from "react";
import ExpertiesCard from "../Home/ExpertiesCard";
import insurance from "../../Images/insurance.png";
import laptop from "../../Images/laptop.png";
import setting from "../../Images/setting.png";
import Person from "../../Images/Person.png";

const Experties = () => {
  return (
    <div className="px-3 py-10 lg:p-10 relative">
      <div className="">
        <h1 className="font-bold text-3xl text-center">Our Experties</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center lg:space-x-10 lg:py-10 py-5">
        <ExpertiesCard
          image={setting}
          cardTheme="rounded-3xl bg-[#E8F7FF] p-5 flex flex-col items-center text-center"
          btnTheme="bg-[#3DB3F5] py-2 px-4 rounded-full m-5 text-sm font-semibold"
          title="Landing Suite"
          text="The miFIN™ suite of products leverages advances in web, analytics and mobile technologies to provide better credit assessments, faster turnaround times and improved operational efficiency."
        />
        <ExpertiesCard
          image={insurance}
          cardTheme="rounded-3xl bg-[#DDF8F0] p-5 flex flex-col items-center text-center"
          btnTheme="bg-[#57DBBA] py-2 px-4 rounded-full m-5 text-sm font-semibold"
          title="Optimal Insurance"
          text="With more than a decade of experience in serving marquee customers in Indian Insurance sector across business functions, we understand the domain inside out."
        />
        <ExpertiesCard
          image={laptop}
          cardTheme="rounded-3xl bg-[#FFF7DC] p-5 flex flex-col items-center text-center"
          btnTheme="bg-[#FABE2C] py-2 px-4 rounded-full m-5 text-sm font-semibold"
          title="Digital Transformation"
          text="With our experience in delivering technology solutions using mobile, cloud, analytics and integration APIs, we have enabled companies to positively adapt to the rapidly changing market"
        />
      </div>
      <div className='block space-y-7 sm:flex justify-start sm:px-10 md:justify-center md:px-0 items-center'>
        <div className="flex flex-col items-center">
          <img src={Person} alt="" className="h-[220px] md:h-[280px]" />
        </div>
        <div className='max-w-[100vw] sm:max-w-[45vw] md:max-w-[50vw] lg:max-w-[40vw] py-0 px-7 md:px-10 lg:p-10 space-y-5'>
          <p className="text-xl md:text-3xl font-bold">
            Your time is too <span className="text-blue-500">valuable</span> to
            spend worrying about your IT needs.
          </p>
          <p className='text-xs lg:text-base text-gray-600'>
            Keeping up with technology can be exhausting. Don’t let it hold you
            back.
          </p>
          <button className='bg-gradient-to-t from-[#82C0FF] to-[#2C8EFF] px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-white'>Schedule Call</button>
        </div>
      </div>
    </div>
  );
};

export default Experties;
