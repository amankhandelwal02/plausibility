import React from 'react'
import AboutBanner from './About/AboutBanner'
import Mission from './About/Mission'
import Team from './About/Team'
import Testi from './About/Testi'
import AboutImg from "../Images/about.png";
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}
  transition={{
    delay: .1,
  }}
>
      <AboutBanner subheading=' We’re a team of dedicated wellness enthusiasts and entrepreneurs
            working remotely across the globe. From expert coaches to talented
            developers.' heading='Who we are?' image={AboutImg} />
      <Mission />
      <Team />
      <Testi />
    </motion.div>
  )
}

export default About
