import React, { useState } from 'react'
import logo from '../Images/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hiding, showing } from '../features/modalSlice'

const Header = () => {
    const [open, setOpen] = useState(false)
  const [style, setStyle] = useState({})

  const show = () => {
    setOpen(true)
    setStyle({
      left: "0",
      transition: "all 0.5s ease-in-out",
    })

    if(open === true) {
      setOpen(false)
      setStyle({
        left: "-100%",
        transition: "all 0.5s ease-in-out",
      })
    }
  }

  const hideNav = () => {
    setOpen(false)
    setStyle({
      left: "-100%",
      transition: "all 0.5s ease-in-out",
    })
  }

  const dispatch = useDispatch();

  const showModal = () => {
    if(window.innerWidth > 1024) {
      dispatch(showing({
        modal: true,
      }))
    } else {
      dispatch(hiding())
    }
  }


  return (
<div className='bg-[#F7FAFF] sticky top-0 z-50 py-3' style={style}>
    <div className='flex items-start px-5 md:px-12'>
      <div className="flex items-center flex-1 space-x-1">
          <Link to='/'><img src={logo} alt="" className="h-10"/></Link>
      </div>
      <div className=" lg:hidden block">
        {open === true ? <CloseIcon className='cursor-pointer' onClick={show}/> : <MenuIcon className='cursor-pointer' onClick={show}/>}
      </div>
      <div className="fixed top-0 left-[-100%] bg-black opacity-90 text-white h-[100vh] w-[55%] space-y-10 text-center py-[10%] lg:static lg:bg-white lg:text-black lg:flex lg:space-y-0 lg:space-x-16 lg:h-0 lg:justify-end lg:py-0 lg:pr-20" style={style} onClick={hideNav}>
      <div className="font-semibold lg:text-sm hover:cursor-pointer hover:text-yellow-400 transition-all">
          <Link to="/about">About Us</Link>
      </div>
      <div className="font-semibold lg:text-sm hover:cursor-pointer hover:text-yellow-400 transition-all" onClick={showModal} >
          <Link to="/">Our Offerings</Link>
      </div>
      <div className="font-semibold lg:text-sm hover:cursor-pointer hover:text-yellow-400 transition-all">
          <Link to="/blogs">Blogs</Link>
      </div>
      <div className="font-semibold lg:text-sm hover:cursor-pointer hover:text-yellow-400 transition-all">
          <Link to="/careers">Careers</Link>
      </div>
      <div className="font-semibold lg:text-sm hover:cursor-pointer hover:text-yellow-400 transition-all">
          <Link to="/reach-us">React Us</Link>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Header
