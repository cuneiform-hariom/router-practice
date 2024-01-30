import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      About Page <br />
      <nav className='container p-4'>
        <Link to="faq" className="btn btn-primary mx-3">Faq</Link>
        <Link to="author" className="btn btn-primary mx-3">About Author</Link>
        <Link to="company" className="btn btn-primary mx-3">About Company</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default About
