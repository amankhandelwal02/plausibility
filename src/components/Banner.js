import React, { useState } from "react";
import headerImage from "../Images/header image.png";
import pattern from "../Images/pattern.png";
import Modal from "./Modal";

const Banner = () => {

    const [showModal, setShowModal] = useState(false)
    const [style, setStyle] = useState({
        display: 'none',
    })
    const [newStyle, setNewStyle] = useState({})

    const modal = () => {
        console.log("clicked")
        setShowModal(true)
        setStyle({
            display: 'block',

        })

        if(showModal === true) {
            setShowModal(false)
        }
    }


  return (
    <div className="bg-[#F7FAFF] h-[100vh] lg:h-[72vh] block lg:flex items-center relative" style={newStyle}>
      <div className="absolute">
        <img src={pattern} alt="" className="h-[400px]" />
      </div>
      <div className='max-w-lg lg:max-w-2xl py-10 px-10 lg:px-20' >
        <h1 className='text-4xl lg:text-5xl font-bold mb-8'>Expertise to Power Innovative Tech Solutions</h1>
        <button className='bg-gradient-to-r from-[#FFD354] to-[#FFAB3F] p-3 rounded-full text-white font-bold transition-all' onMouseOver={modal}>Know More</button>
      </div>
      <div className='absolute left-[10px] top-[60px]' style={style} >
      <Modal />
      </div>
      <div className="z-10 absolute right-20 hidden lg:block">
        <img
          src={headerImage}
          alt=""
          className="h-[400px]"
        />
      </div>
    </div>
  );
};

export default Banner;
