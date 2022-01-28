import React, { useState } from "react";
import share from "../../Images/share.png";
import release from "../../Images/release.png";
import writer from "../../Images/writer.png";
import { Link } from "react-router-dom";

const BlogsCard = ({ image, title, date, author, text, id }) => {

    const [style, setStyle] = useState({
        width: '30px',
        height: '28px',
        transition: '0.3s',
    })
    const [styleText, setStyleText] = useState({
        display: 'none',
    })

    const show = () => {
        setStyle({
            width: '70px',
            transition: '0.3s',
            height: '30px',
        })
        setStyleText({
            display: 'block',
        })
    }
    const hide = () => {
        setStyle({
            width: '30px',
            transition: '0.3s',
            height: '30px',
        })
        setStyleText({
            display: 'none',
        })
    }


  return (
    <div>
      <div className="bg-white rounded-2xl relative">
        <img src={image} alt="" className="h-[100%] w-[100%] rounded-t-2xl" />
        <div className="p-6 space-y-4">
          <h1>{title}</h1>
          <div className="block space-y-2 md:flex md:space-y-0 justify-between md:justify-start md:space-x-10 lg:justify-start lg:space-x-10">
            <div className="flex items-center space-x-1">
              <img src={release} alt="" className="h-4" />
              <p className="text-sm font-semibold text-gray-500">{date}</p>
            </div>
            <div className="flex items-center space-x-1">
              <img src={writer} alt="" className="h-4" />
              <p className="text-sm font-semibold text-gray-500">{author}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">{text}</p>
          <button className="text-sm py-2 px-3 text-white bg-gradient-to-b from-[#FFD354] to-[#FFAB3F] rounded-full"><Link to={`/blogs/${id}`} target="_blank">Read More</Link></button>
          
        </div>
        <div className="bg-white flex items-center justify-center space-x-1 py-1 px-2 rounded-full absolute top-3 left-3 hover:cursor-pointer" style={style} onMouseOver={show} onMouseOut={hide}>
          <img src={share} alt="" className="h-3"/>
          <p className="text-xs" style={styleText}>SHARE</p>
      </div>
      </div>
    </div>
  );
};

export default BlogsCard;
