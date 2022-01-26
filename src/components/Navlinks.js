import React from 'react'

const Navlinks = ({title}) => {
  return (
    <div>
      <div className="font-semibold lg:text-sm hover:cursor-pointer hover:text-yellow-400 transition-all">
          <p>{title}</p>
      </div>
    </div>
  )
}

export default Navlinks
