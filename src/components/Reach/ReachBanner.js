import React from 'react'
import User from  '../../Images/User.png'
import Phone from  '../../Images/Phone.png'
import Email from  '../../Images/Email.png'
import FormIImage from '../../Images/form-image.png'

const ReachBanner = () => {
  return (
    <div className="px-5 md:px-10 py-5 bg-white space-y-8">
      <div className="flex flex-col space-y-2 items-center text-center justify-center bg-white">
          <h1 className='text-3xl font-bold'>Get In Touch With Us</h1>
          <p className='text-lg text-gray-500'>Any Questions or Feedback, just write us a Message!</p>
      </div>
      <div className="flex px-10 lg:px-20 lg:space-x-24 items-center justify-center">
            <form action="" className="flex flex-col space-y-4 max-w-xs sm:max-w-sm md:max-w-lg">
                <div className='bg-[#EEF4FF] flex p-4 items-center space-x-3 rounded-xl'>
                <img src={User} alt="" className='h-4' />
                <input type="text" placeholder="Your Full Name" className="text-sm border-none outline-none bg-transparent flex-1"/>
                </div>
                <div className='bg-[#EEF4FF] flex p-4 items-center space-x-3 rounded-xl'>
                <img src={Phone} alt="" className='h-4' />
                <input type="text" placeholder="Contact Number" className="text-sm border-none outline-none bg-transparent flex-1"/>
                </div>
                <div className='bg-[#EEF4FF] flex p-4 items-center space-x-3 rounded-xl'>
                <img src={Email} alt="" className='h-4' />
                <input type="email" placeholder="Email ID" className="text-sm border-none outline-none bg-transparent flex-1"/>
                </div>
                <div className='bg-[#EEF4FF] flex p-4 items-center space-x-3 rounded-xl'>
                <textarea id="w3review" name="w3review" rows="4" cols="200" className="text-sm border-none outline-none bg-transparent flex-1" placeholder="Write your message here!" maxlength="320"></textarea>
                </div>
                <div className='flex flex-col items-start justify-start'>
                <button className="py-3 px-10 text-white font-semibold rounded-full bg-gradient-to-t from-[#82C0FF] to-[#2C8EFF]">Submit</button>
                </div>
            </form>
            <div className='hidden lg:block'>
                <img src={FormIImage} alt="" className='h-[350px]'/>
            </div>
      </div>
    </div>
  )
}

export default ReachBanner
