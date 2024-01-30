import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Blogs = () => {
    const allBlogs = useLoaderData()
    console.log('allBlogs: ', allBlogs);
    return (
        <div className='row p-3'>
            {
                allBlogs?.map((ele) =>
                    <div className="col-md-4" key={ele.id}>
                        <div className="card blogcard mb-3">
                            <img src={ele.image} alt="" />
                            <div className="p-3">
                                <Link to={`${ele.id}`}>
                                    <h2 className='blog-title'>{ele.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Blogs

export const loadBlogs = async () => {
    const res = await fetch('https://thecuneiform.com/wp-json/wp/v2/posts/')
    if(!res.ok){
        throw Error("Unable to fetch blog post")
    }
    return res
}