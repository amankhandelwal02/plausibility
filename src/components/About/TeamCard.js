import React from 'react'

const TeamCard = ({image, name, post}) => {
  return (
    <div className='bg-white rounded-3xl py-8 px-10 flex flex-col items-center justify-center text-center'>
        <img src={image} alt="" className='h-14 mb-4' />
        <h1 className='text-lg font-bold'>{name}</h1>
        <p className='mb-6 text-sm'>{post}</p>
        <button className='bg-gradient-to-l from-[#FFD354] to-[#FFAB3F] py-2 px-4 rounded-full text-sm font-bold text-white'>Know More</button>
    </div>
  )
}

export default TeamCard
