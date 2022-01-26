import React from 'react'

const SolutionCard = ({image, title, text}) => {
  return (
    <div>
      <div className="p-5 bg-white rounded-3xl">
          <img src={image} alt="" className="h-10 mb-5"/>
          <h1 className="font-bold mb-1">{title}</h1>
          <p className='text-sm text-gray-500'>{text}</p>
      </div>
    </div>
  )
}

export default SolutionCard
