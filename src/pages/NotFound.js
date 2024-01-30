import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h3 className='p-5 text-center'>Page Not Found</h3>
        <Link to="/" className="btn btn-primary">Go to Home Page</Link>
      
    </div>
  )
}

export default NotFound
