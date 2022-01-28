import React from "react";
import hire from '../Images/hire.png'
import { motion } from 'framer-motion'


const Careers = () => {
  return (
    <motion.div
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}
  transition={{
    delay: .1,
  }}
>
      <div className="bg-[#F7FAFF] space-y-8 p-5">
        <div className="flex flex-col item-center text-center justify-center">
          <h1 className="text-3xl font-bold">We're hiring!</h1>
          <p className="text-lg text-gray-500">
            Join us on our quest to tik jhsyuwk lorem ipsum
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
            <img src={hire} alt="" className="h-[55vh]" />
            <button className="text-sm font-semibold py-2 px-5 text-white bg-gradient-to-b from-[#FFD354] to-[#FFAB3F] rounded-full">Share your resume</button>
        </div>
        
      </div>
      </motion.div>
  );
};

export default Careers;
