import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const BlogError = () => {
    const error = useRouteError();
    console.log('error: ', error);
  return (
    <div className='container p-5'>
        <div className="p-5">
            <h3>Blog Error</h3>
            <p>{error.message}</p>
            <Link to="/blogs">Explore More Blogs</Link>
        </div>
      
    </div>
  )
}

export default BlogError
