import React from 'react'
import Banner from './Banner'
import Customers from './Customers'
import Experties from './Experties'
import Meeting from './Meeting'
import Partners from './Partners'
import Solutions from './Solutions'

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
