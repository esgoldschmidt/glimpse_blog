import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'; 

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ( {categories, slug} ) => {
    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
        if(slug){
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    return (
        <div>
            <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
                <h3 className='text-xl mb-8 font-semibold border-b pb-4 text-gray-500' >
                    {slug ? 'Related posts' : 'Recent Posts'} 

                </h3>
                {relatedPosts.map((post) => (
                    <div key={post.title} className='flex items-center w-full mb-4'>
                        <div className='w-20 h-full flex-none'>
                            <img 
                                alt={post.title}
                                className='align-middle rounded-full object-cover'
                                style={{ height: '80px' }}
                                src={post.featuredImage.url}
                            />
                        </div>
                        <div className='flex-grow ml-4'>
                            <p className='text-gray-500 font-xs'>
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </p>
                            <a href={'/post/' + post.slug} key={post.title} className="transition duration-300 ease text-gray-500 hover:text-glimpse-blue" >
                                {post.title}
                            </a>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostWidget
