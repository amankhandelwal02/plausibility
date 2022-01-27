import React from "react";
import blogImage from "../Images/blog-img.png";
import BlogsCard from "./Blog/BlogsCard";
import Pagination from '@mui/material/Pagination';

const Blogs = () => {
  return (
    <div className="bg-[#F3F7FF] p-10 space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <BlogsCard
          title="5 self-care practices to avoid 
post-lockdown burnout"
          date="30-03-2021"
          author="ESTHER HOWARD"
          text="Sed ut perspiciatis unde omnis iste natus error
sit voluptatem accusantium dolore mque 
laudantium, totam remaperiam, eaque ipsa 
quae ab illo ."
          image={blogImage}
        />
        <BlogsCard
          title="5 self-care practices to avoid 
post-lockdown burnout"
          date="30-03-2021"
          author="ESTHER HOWARD"
          text="Sed ut perspiciatis unde omnis iste natus error
sit voluptatem accusantium dolore mque 
laudantium, totam remaperiam, eaque ipsa 
quae ab illo ."
          image={blogImage}
        />
        <BlogsCard
          title="5 self-care practices to avoid 
post-lockdown burnout"
          date="30-03-2021"
          author="ESTHER HOWARD"
          text="Sed ut perspiciatis unde omnis iste natus error
sit voluptatem accusantium dolore mque 
laudantium, totam remaperiam, eaque ipsa 
quae ab illo ."
          image={blogImage}
        />
        <BlogsCard
          title="5 self-care practices to avoid 
post-lockdown burnout"
          date="30-03-2021"
          author="ESTHER HOWARD"
          text="Sed ut perspiciatis unde omnis iste natus error
sit voluptatem accusantium dolore mque 
laudantium, totam remaperiam, eaque ipsa 
quae ab illo ."
          image={blogImage}
        />
        <BlogsCard
          title="5 self-care practices to avoid 
post-lockdown burnout"
          date="30-03-2021"
          author="ESTHER HOWARD"
          text="Sed ut perspiciatis unde omnis iste natus error
sit voluptatem accusantium dolore mque 
laudantium, totam remaperiam, eaque ipsa 
quae ab illo ."
          image={blogImage}
        />
        <BlogsCard
          title="5 self-care practices to avoid 
post-lockdown burnout"
          date="30-03-2021"
          author="ESTHER HOWARD"
          text="Sed ut perspiciatis unde omnis iste natus error
sit voluptatem accusantium dolore mque 
laudantium, totam remaperiam, eaque ipsa 
quae ab illo ."
          image={blogImage}
        />
        <BlogsCard
          title="5 self-care practices to avoid 
post-lockdown burnout"
          date="30-03-2021"
          author="ESTHER HOWARD"
          text="Sed ut perspiciatis unde omnis iste natus error
sit voluptatem accusantium dolore mque 
laudantium, totam remaperiam, eaque ipsa 
quae ab illo ."
          image={blogImage}
        />
        <BlogsCard
          title="5 self-care practices to avoid 
post-lockdown burnout"
          date="30-03-2021"
          author="ESTHER HOWARD"
          text="Sed ut perspiciatis unde omnis iste natus error
sit voluptatem accusantium dolore mque 
laudantium, totam remaperiam, eaque ipsa 
quae ab illo ."
          image={blogImage}
        />
        <BlogsCard
          title="5 self-care practices to avoid 
post-lockdown burnout"
          date="30-03-2021"
          author="ESTHER HOWARD"
          text="Sed ut perspiciatis unde omnis iste natus error
sit voluptatem accusantium dolore mque 
laudantium, totam remaperiam, eaque ipsa 
quae ab illo ."
          image={blogImage}
        />
      </div>
      <div className="flex flex-col items-end">
      <Pagination count={10} />
      </div>
    </div>
  );
};

export default Blogs;
