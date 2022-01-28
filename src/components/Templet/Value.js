import React from 'react'
import ValueCard from './ValueCard'
import team from '../../Images/team.png'
import development from '../../Images/developement.png'
import checklist from '../../Images/checklist.png'
import industry from '../../Images/industry.png'

const Value = ({title, text}) => {
  return (
    <div className="px-5 py-10 lg:p-10 space-y-5 bg-[#F3F7FF]">
    <div className="flex flex-col items-center justify-center text-center px-5 lg:px-20 space-y-6">
        <h1 className="text-3xl font-bold">{title}</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
    <ValueCard text={text} heading='Experienced Teams' image={team}/>
    <ValueCard text={text} heading='Faster Development' image={development}/>
    <ValueCard text={text} heading='Requirement Gathering' image={checklist}/>
    <ValueCard text={text} heading='Industry Best Practices' image={industry}/>
    </div>
  </div>
  )
}

export default Value
