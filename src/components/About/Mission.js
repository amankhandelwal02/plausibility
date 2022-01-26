import React from 'react'
import tag1 from '../../Images/tag1.png' 
import tag2 from '../../Images/tag2.png' 
import tag3 from '../../Images/tag3.png' 

const Mission = () => {
  return (
    <div className="px-3 py-10 lg:p-10 space-y-5">
      <div className="flex flex-col items-center justify-center text-center px-5 lg:px-20 space-y-6">
          <h1 className="text-3xl font-bold">Our Mission</h1>
          <p className="text-gray-500 text-lg">A new tech product, whether you are a startup or a large company, requires that you focus on its business viability, and not worry about building a team to develop it. By working with a reliable partner like Qualtech who focuses on the lean methodology.</p>
      </div>
      <div className="flex flex-wrap justify-evenly">
          <img src={tag1} alt="" className="h-48 md:m-0 sm:m-6 m-3"/>
          <img src={tag2} alt="" className="h-48 md:m-0 sm:m-6 m-3"/>
          <img src={tag3} alt="" className="h-48 md:m-0 sm:m-6 m-3"/>
      </div>
    </div>
  )
}

export default Mission
