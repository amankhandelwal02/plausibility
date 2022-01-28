import React from 'react'
import Banner from './Home/Banner'
import Customers from './Home/Customers'
import Experties from './Home/Experties'
import Meeting from './Home/Meeting'
import Partners from './Home/Partners'
import Solutions from './Home/Solutions'
import { motion } from 'framer-motion'

const IndexPage = () => {

  const heading = <p>Here’s what our <span className="text-blue-400">customers</span> say.</p>

  return (
    <motion.div
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}
  transition={{
    delay: .1,
  }}
>
      <Banner />
      <Experties />
      <Solutions />
      <Meeting />
      <Partners text='We’re proud partners with the industry’s leading tech companies.' />
      <Customers background='bg-[#F3F7FF]' cardBg='white' heading={heading} />
    </motion.div>
  )
}

export default IndexPage
