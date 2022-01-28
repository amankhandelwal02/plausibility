import React from 'react'

const ValueCard = ({image, heading, text}) => {
  return (
    <div>
      <div className="bg-white flex flex-col items-center justify-center text-center py-7 px-5 rounded-3xl">
          <img src={image} alt="" className="h-12 mb-4" />
          <div className="space-y-2 mb-7">
          <h1 className="font-bold text-lg">{heading}</h1>
          <p className="text-sm text-gray-600">{text}</p>
          </div>
          <button className="bg-[#3DB3F5] py-2 px-3 rounded-full text-white text-xs">Learn More</button>
      </div>
    </div>
  )
}

export default ValueCard
