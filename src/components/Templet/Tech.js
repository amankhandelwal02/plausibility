import React from 'react'
import tech1 from '../../Images/tech1.png'
import tech2 from '../../Images/tech2.png'
import tech3 from '../../Images/tech3.png'
import tech4 from '../../Images/tech4.png'
import tech6 from '../../Images/tech6.png'

const Tech = ({title}) => {
  return (
<div>
      <div className="py-5 flex bg-[#F3F7FF] flex-col items-center justify-center space-y-8">
        <div className="px-10">
        <h1 className="text-3xl font-bold md:max-w-[70vw] lg:max-w-[50vw] text-center">
          {title}
        </h1>
        </div>
        <div>
        <img src alt="" className="h-[80px]" />
        </div>
      </div>
    </div>
  )
}

export default Tech
