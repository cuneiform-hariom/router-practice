import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const SingleBlog = () => {
    const SingleBlogData = useLoaderData()
    console.log('SingleBlogData: ', SingleBlogData);
    return (
        <div className='blogcontainer'>
            <h1 className='mb-5' dangerouslySetInnerHTML={{ __html: SingleBlogData.title }}></h1>
            <img src={SingleBlogData.image} alt="" />
            <p dangerouslySetInnerHTML={{ __html: SingleBlogData.content }}></p>

        </div>
    )
}


export default SingleBlog

export const loadSingleBlogs = async ({ params }) => {
    const resBlog = await fetch(`https://thecuneiform.com/wp-json/wp/v2/posts/${params.id}`)

    if(!resBlog.ok){
        throw Error("Couldn't find blog post")
    }

    return resBlog
}