import React from 'react'
import Location from './Reach/Location'
import ReachBanner from './Reach/ReachBanner'
import { motion } from 'framer-motion'
import Find from './Reach/Find'


const Reach = () => {
  return (
    <motion.div
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}
  transition={{
    delay: .1,
  }}
>
      <ReachBanner />
    <Location />
    <Find />
    </motion.div>
  )
}

export default Reach
