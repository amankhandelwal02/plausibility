import React from "react";
import MeetingRoom from '../../Images/meeting.png'

const Meeting = () => {
  return (
    <div className="p-10 block md:flex space-x-0 md:space-x-10 items-center justify-center bg-white">
      <div className="sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[35vw] space-y-5">
        <p className="text-3xl font-bold">
          We don’t just care about IT. We care about your{" "}
          <span className="text-blue-500">business.</span>
        </p>
        <p className="text-base text-gray-500">
          Keeping up with technology can be exhausting. Don’t let it hold you
          back.Keeping up with technology can be exhausting. Don’t let it hold
          you back.
        </p>
        <button className="bg-gradient-to-t from-[#82C0FF] to-[#2C8EFF] px-4 py-2 text-white text-semibold rounded-full">
          Our Offerings
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 hidden md:block">
          <img src={MeetingRoom} alt="" className='h-[250px] md:h-[230px] lg:h-[270px]' />
      </div>
    </div>
  );
};

export default Meeting;
