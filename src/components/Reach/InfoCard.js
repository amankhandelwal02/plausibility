import React from 'react'

const InfoCard = ({image, heading, description}) => {
  return (
    <div>
      <div className="bg-white py-8 px-6 rounded-3xl space-y-4 w-[270px] h-[250px] m-5 lg:m-0">
            <img src={image} alt="" className="h-12"/>
            <div className="">
            <h1 className="font-bold">{heading}</h1>
            <p className="text-base">{description}</p>
            </div>
      </div>
    </div>
  )
}

export default InfoCard
