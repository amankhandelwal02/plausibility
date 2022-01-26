import React from 'react'
import icon1 from '../Images/icon1.png'
import icon2 from '../Images/icon2.png'
import icon3 from '../Images/icon3.png'
import icon4 from '../Images/icon4.png'
import icon5 from '../Images/icon5.png'
import icon6 from '../Images/icon6.png'
import SolutionCard from './SolutionCard'

const Solutions = () => {
  return (
    <div className="p-10 bg-[#F3F7FF] space-y-10">
      <div className="flex flex-col md:items-start space-y-4 md:space-y-2 lg:items-center justify-center">
          <p className="text-3xl font-bold">Take back control with <span className="text-blue-500">IT solutions </span>
tailored to help you win.</p>
<p className="text-base text-gray-500">No more wasted resources. No more runaway budgets. No more excuses.</p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-0 sm:px-16 md:px-16 lg:px-36'>
          <SolutionCard image={icon1} title='Customize Solutions' text='Say “Goodbye” to generic solutions and get customized solutions that are proven to support your business goals'/>
          <SolutionCard image={icon2} title='Maximize Resources' text='Say “Goodbye” to generic solutions and get customized solutions that are proven to support your business goals'/>
          <SolutionCard image={icon3} title='Track Progress' text='Say “Goodbye” to generic solutions and get customized solutions that are proven to support your business goals'/>
          <SolutionCard image={icon4} title='Guarantee Results' text='Say “Goodbye” to generic solutions and get customized solutions that are proven to support your business goals'/>
          <SolutionCard image={icon5} title='Protect Budget' text='Say “Goodbye” to generic solutions and get customized solutions that are proven to support your business goals'/>
          <SolutionCard image={icon6} title='Improve Performance' text='Say “Goodbye” to generic solutions and get customized solutions that are proven to support your business goals'/>
      </div>
    </div>
  )
}

export default Solutions
