import React from 'react'

const Desc = ({title, subtitle}) => {
  return (
    <div className="px-3 py-10 lg:p-10 space-y-5">
    <div className="flex flex-col items-center justify-center text-center px-5 lg:px-20 space-y-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500 text-lg">{subtitle}</p>
    </div>
  </div>
  )
}

export default Desc
