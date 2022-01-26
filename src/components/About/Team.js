import React from 'react'
import profile1 from '../../Images/profile1.png'
import profile2 from '../../Images/profile2.png'
import profile3 from '../../Images/profile3.png'
import profile4 from '../../Images/profile4.png'
import profile5 from '../../Images/profile5.png'
import profile6 from '../../Images/profile6.png'
import profile7 from '../../Images/profile7.png'
import profile8 from '../../Images/profile8.png'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className="p-10 space-y-16 bg-[#F3F7FF]">
      <div className="flex flex-col items-center justify-center text-center px-20 space-y-6">
          <h1 className="text-3xl font-bold">Meet the team</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <TeamCard image={profile1} name='Cameron Williamson' post='CEO, Founder '/>
            <TeamCard image={profile2} name='Brooklyn Simmons' post='CEO, Founder '/>
            <TeamCard image={profile3} name='Wade Warren' post='CEO, Founder '/>
            <TeamCard image={profile4} name='Albert Flores' post='CEO, Founder '/>
            <TeamCard image={profile5} name='Kathryn Murphy' post='CEO, Founder '/>
            <TeamCard image={profile6} name='Leslie Alexander' post='CEO, Founder '/>
            <TeamCard image={profile7} name='Robert Fox' post='CEO, Founder '/>
            <TeamCard image={profile8} name='Eleanor Pena' post='CEO, Founder '/>
      </div>
    </div>
  )
}

export default Team
