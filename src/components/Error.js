import React from "react";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2 }}
  >
      <div className="flex flex-col items-center justify-center font-bold py-52">
        <h1 className="text-7xl">404 - Page Not Found</h1>
      </div>
    </motion.div>
  );
};

export default Error;
