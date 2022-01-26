import React from 'react'
import Banner from './Home/Banner'
import Customers from './Home/Customers'
import Experties from './Home/Experties'
import Meeting from './Home/Meeting'
import Partners from './Home/Partners'
import Solutions from './Home/Solutions'

const IndexPage = () => {
  return (
    <div>
      <Banner />
      <Experties />
      <Solutions />
      <Meeting />
      <Partners />
      <Customers />
    </div>
  )
}

export default IndexPage
