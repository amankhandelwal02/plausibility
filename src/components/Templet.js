import React from 'react'
import AboutBanner from './About/AboutBanner'
import iotImg from '../Images/iot.png'
import Desc from './Templet/Desc'
import Value from './Templet/Value'
import Tech from './Templet/Tech'
import Partners from './Home/Partners'
import Customers from './Home/Customers'
import Query from './Templet/Query'

const Templet = () => {
  return (
    <div>
      <AboutBanner image={iotImg} heading='Internet of Things' subheading='With our Expertise, Tools, Processes & Business Thinking'  />
      <Desc title='Internet of Things' subtitle='A new tech product, whether you are a startup or a large company, requires that you focus on its business viability, and not worry about building a team to develop it. By working with a reliable partner like Qualtech who focuses on the lean methodology and getting the development right the first time, you can stay focused on ensuring product fit for the market. Qualtech’s Product Outsourcing services gives you the freedom to imagine your product offering, without worrying about the technological challenges.'/>
      <Value title='Value Proposition' text='The miFIN™ suite of products leverages advances in web, analytics and mobile technologies to provide better credit assessments, faster turnaround times and improved operational efficiency.'/>
      <Desc title='Engagement Methedology' subtitle='Successful outsourced product development demands an experienced and technically qualified services provider. Qualtech, with its experienced resource pool, in-depth technical expertise, and business process knowledge, helps you resolve your business problems efficiently and effectively. Qualtech specializes in planning, developing, designing, implementing, and supporting your software product, ensuring a high ROI and low ownership costs.' />
      <Tech title='Technology Stack' />
      <Partners text='Valued Partner Testimonials' />
      <Customers background='white' cardBg='[#F3F7FF]' />
      <Query />
    </div>
  )
}

export default Templet
