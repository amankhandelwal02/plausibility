import React, { useEffect } from "react";
import blogImage from "../Images/blog-img.png";
import BlogsCard from "./Blog/BlogsCard";
import Pagination from '@mui/material/Pagination';
import Data from '../blogs.json'
import { motion } from 'framer-motion'


const Blogs = () => {

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{
      delay: .1,
    }}
  >
    <div className="bg-[#F3F7FF] p-10 space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Data.map(post => (
          <BlogsCard 
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            author={post.author}
            text={post.text}
            image={blogImage}
          />
        ))}
      </div>
      <div className="flex flex-col items-end">
      <Pagination count={10} />
      </div>
    </div>
    </motion.div>
  );
};

export default Blogs;
