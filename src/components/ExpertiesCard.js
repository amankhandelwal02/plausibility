import React from 'react'

const ExpertiesCard = ({cardTheme, title, text, btnTheme, image}) => {
  return (
    <div className="max-w-[300px] m-5 lg:m-0">
      <div className={cardTheme}>
          <img src={image} alt="" className='h-12 w-12'/>
          <h1 className='font-bold text-lg p-1'>{title}</h1>
          <p className='text-gray-600 text-sm'>{text}</p>
          <button className={btnTheme}>Learn More</button>
      </div>
    </div>
  )
}

export default ExpertiesCard
