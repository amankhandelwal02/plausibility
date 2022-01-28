import React from 'react'
import InfoCard from '../Reach/InfoCard'
import demo from '../../Images/demo.png'
import request from '../../Images/request.png'
import question from '../../Images/question.png'

const Query = () => {
  return (
    <div className="flex flex-wrap items-center justify-center md:space-x-0 lg:space-x-10">
      <InfoCard heading='Your Question' description='Do you have a question about this
offering?' background='[#EEF4FF]' image={question} btnText='Ask Now'/>
      <InfoCard heading='Request Meeting' description='Would you like to set up a meeting
with a Plausibility Solutions expert?' background='[#EEF4FF]' image={request} btnText='Get In Touch'/>
      <InfoCard heading='Free Demo' description='If you would like to see a demo of a product,
please leave your contact details here' background='[#EEF4FF]' image={demo} btnText='Demo Request'/>
    </div>
  )
}

export default Query
