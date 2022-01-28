import React from 'react'
import {
    useParams, useLocation, useHistory, useRouteMatch
  } from "react-router-dom";

const BlogPage = () => {
    const param = useParams()
    console.log(param.id)

  return (
    <div>
      <div>
          <h1>This is the page number{param.id}</h1>
      </div>
    </div>
  )
}

export default BlogPage
