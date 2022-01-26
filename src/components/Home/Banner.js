import React, { useState } from "react";
import headerImage from "../../Images/header image.png";
import pattern from "../../Images/pattern.png";
import Modal from "../Home/Modal";
import HoverModal from "./HoverModal";

const Banner = () => {

  const [style, setStyle] = useState({
    opacity: "0"
  })
  const [style1, setStyle1] = useState({
    opacity: "0"
  })

  const show = () => {
    setStyle({
      opacity: "1"
    })
  }

  const hide = () => {
    setStyle({
      opacity: "0"
    })
  }

  return (
    <>
    <div className="bg-[#F7FAFF] h-[76vh] lg:h-[62vh] block lg:flex items-center relative">
      <div className="absolute">
        <img src={pattern} alt="" className="h-[350px]" />
      </div>
      <div className='max-w-lg lg:max-w-2xl py-20 px-10 lg:px-20' >
        <h1 className='text-4xl lg:text-5xl font-bold mb-8'>Expertise to Power Innovative Tech Solutions</h1>
        <button className='bg-gradient-to-r from-[#FFD354] to-[#FFAB3F] p-3 rounded-full text-white font-bold transition-all' >Know More</button>
      </div>
      <div className='absolute left-[0px] top-[30px]' style={style} onMouseOver={show} onMouseOut={hide}>
      <Modal />
      </div>
      <div className="z-10 absolute right-20 hidden lg:block">
        <img
          src={headerImage}
          alt=""
          className="h-[350px]"
        />
      </div>
      <div className='hidden'>
      <HoverModal />
      </div>
    </div>
    </>
  );
};

export default Banner;
