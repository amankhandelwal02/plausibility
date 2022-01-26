import React from 'react'
import logo from '../Images/logo.png'
import facebook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import google from '../Images/google.png'
import youtube from '../Images/youtube.png'
import linkedin from '../Images/linkedin.png'
import instagram from '../Images/insta.png'

const Footer = () => {
  return (
    <div className='px-12 md:px-20 py-10 md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20 items-center space-y-10 md:space-y-0 lg:space-y-0 lg:flex'>
      <div className='space-y-5 lg:flex-1'>
          <img src={logo} alt="" className="h-10" />
          <p className=''>2021 Plausibility Solutions. All rights reserved.</p>
          <div className="flex space-x-7">
            <img src={facebook} alt="" className='h-5'/>
            <img src={twitter} alt="" className='h-5'/>
            <img src={instagram} alt="" className='h-5'/>
            <img src={linkedin} alt="" className='h-5'/>
            <img src={google} alt="" className='h-5'/>
            <img src={youtube} alt="" className='h-5'/>
          </div>
          <div className="flex space-x-10">
              <p className="">T&C</p>
              <p>Privacy Policy</p>
          </div>
          <p className='font-bold'>Offices: <span className="font-normal">Bangalore, Japan , USA</span></p>
      </div>
      <div className='space-y-5'>
          <h1 className="text-xl font-bold">Quick Links</h1>
          <p>About Us</p>
          <p>Our Offerings</p>
          <p>Collaborate with us</p>
          <p>Careers</p>
      </div>
      <div className='space-y-5'>
          <h1 className="text-xl font-bold">Connect with Us</h1>
          <p>+91 8756478035</p>
          <p>support@plausibilitysolutions.com</p>
          <p>Reach Us</p>
          <p>Subscribe to Newsletters</p>
      </div>
    </div>
  )
}

export default Footer
