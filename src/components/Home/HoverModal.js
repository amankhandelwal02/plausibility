import React from "react";

const HoverModal = () => {
  return (
    <div className="z-20 bg-[#fff] px-10 py-7 rounded-2xl absolute top-2 right-20">
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-1">
          <h1 className="text-base font-semibold text-[#FFAB3F]">Solution</h1>
          <p className="text-sm">IOT</p>
          <p className="text-sm">AI</p>
          <p className="text-sm">Clout Computing</p>
          <p className="text-sm">Block Chain</p>
        </div>
        <div className="space-y-1">
          <h1 className="text-base font-semibold text-[#FFAB3F]">Services</h1>
          <p className="text-sm">Enterprise Application</p>
          <p className="text-sm">Mobility</p>
          <p className="text-sm">Clout Computing</p>
          <p className="text-sm">Block Chain</p>
        </div>
        <div className="space-y-1">
          <h1 className="text-base font-semibold text-[#FFAB3F]">Advanced Analytics</h1>
          <h1 className="text-base font-semibold text-[#FFAB3F]">BI</h1>
          <h1 className="text-base font-semibold text-[#FFAB3F]">Mobility</h1>
          <h1 className="text-base font-semibold text-[#FFAB3F]">Digital Transformation</h1>
        </div>
        <div className="space-y-1">
          <h1 className="text-base font-semibold text-[#FFAB3F]">Cloud/Devops</h1>
          <p className="text-sm">Smart Contract Cryptocurrency</p>
          <p className="text-sm">Project Planning and Acchitecture</p>
          <p className="text-sm">Managed Services & Consulting</p>
          <p className="text-sm">Branding and Digital Marketing</p>
        </div>
      </div>
    </div>
  );
};

export default HoverModal;
