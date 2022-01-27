import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hiding, selectModal, showing } from "../../features/modalSlice";
import headerImage from "../../Images/header image.png";
import pattern from "../../Images/pattern.png";
import Modal from "../Home/Modal";
import HoverModal from "./HoverModal";

const Banner = () => {

  const currentState = useSelector(selectModal)

  return (
    <>
    <div className="bg-[#F7FAFF] h-[76vh] lg:h-[62vh] block lg:flex items-center relative">
      <div className="absolute">
        <img src={pattern} alt="" className="h-[350px]" />
      </div>
      <div className='max-w-lg lg:max-w-2xl py-20 px-10 lg:px-20' >
        <h1 className='text-4xl lg:text-5xl font-bold mb-8'>Expertise to Power Innovative Tech Solutions</h1>
        <button className='bg-gradient-to-r from-[#FFD354] to-[#FFAB3F] p-3 rounded-full text-white font-bold transition-all' onClick={() => console.log('clicked')}>Know More</button>
      </div>
      <div className='absolute left-[0px] top-[30px] hidden'>
      <Modal />
      </div>
      <div className="z-10 absolute right-20 hidden lg:block" >
        <img
          src={headerImage}
          alt=""
          className="h-[350px]"
        />
      </div>
      <div className="">
      {currentState?.modal === true && <HoverModal />}
      </div>
    </div>
    </>
  );
};

export default Banner;
