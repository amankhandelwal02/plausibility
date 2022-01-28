import React from 'react'

const InfoCard = ({image, heading, description, btnText, background}) => {
  return (
    <div>
      <div className={`bg-${background} py-8 px-6 rounded-3xl space-y-4 w-[270px] h-[250px] m-5 lg:m-0`}>
            <img src={image} alt="" className="h-12"/>
            <div className="mb-30">
            <h1 className="font-bold">{heading}</h1>
            <p className="text-sm">{description}</p>
            </div>
            {btnText && <button className='text-xs text-white font-semibold bg-[#656565] py-2 px-5 rounded-full'>{btnText}</button>}
      </div>
    </div>
  )
}

export default InfoCard
