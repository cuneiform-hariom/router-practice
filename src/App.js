import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/About'
import Career from './pages/career/Career'
import Contact, { contactAction } from './pages/Contact'
import RootLayout from './layouts/RootLayout'
import Faq from './pages/About/Faq'
import Author from './pages/About/Author'
import Company from './pages/About/Company'
import NotFound from './pages/NotFound'
import Blogs, { loadBlogs } from './pages/blogs/Blogs'
import SingleBlog, { loadSingleBlogs } from './pages/blogs/SingleBlog'
import BlogError from './pages/blogs/BlogError'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />}>
          <Route path='faq' element={<Faq />} />
          <Route path='author' element={<Author />} />
          <Route path='company' element={<Company />} />
        </Route>
        <Route path='career' element={<Career />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
        <Route
          path='blogs'
          element={<Blogs />}
          loader={loadBlogs}
          errorElement={<BlogError/>}
        />
        <Route
          path='blogs/:id'
          loader={loadSingleBlogs}
          element={<SingleBlog />}
          errorElement={<BlogError/>}
        />


        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
