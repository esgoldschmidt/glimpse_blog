import React from 'react'
import moment from 'moment'
import Link from 'next/link'; 

const FeaturedPostsCard = ({post}) => {
    return (
        <div key={post.title} className='flex flex-col items-center h-80 rounded-lg shadow-lg max-w-350px'>
            <div className='h-64 w-full min-w-350px'>
                <img 
                    alt={post.title}
                    className='object-cover h-44 w-full rounded-t-lg'
                    src={post.featuredImage.url}
                />
            </div>
            <div className='min-w-350px w-full h-full text-center text-white flex rounded-b-lg flex-col place-content-evenly bg-gray-200'>
                <Link href={'/post/' + post.slug} key={post.title} className='justify-items-center text-center w-350px'>
                    <div>
                        <p className='text-center text-sm text-gray-800 cursor-pointer hover:transition hover:duration-300 hover:ease hover:text-blue-800 '>{post.title}</p>
                        <button className='bg-blue-400 px-4 py-2 mt-2 rounded-lg hover:transition hover:duration-300 hover:ease hover:bg-gray-400'>Read</button>
                    </div>
                    
                </Link>
                <div className='flex items-center justify-center'>
                    <img 
                        className='h-8 w-8 rounded-full'
                        src={post.author.photo.url}
                    />
                    <div className='flex'>
                        <p className='text-white ml-2 mr-2'>{post.author.name}</p>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </div>
                    
                </div>
            </div>
            {/* 
            <div className='relative flex h-64 w-full min-w-350px'>
                <img 
                    alt={post.title}
                    className='object-cover h-32 w-full rounded-lg'
                    src={post.featuredImage.url}
                />
                <div className='absolute flex-grow flex flex-col justify-items-center w-350px h-64 bg-black/30 rounded-lg'>
                    <div className='min-w-350px h-full text-center text-white flex flex-col place-content-evenly'>
                        <Link href={'/post/' + post.slug} key={post.title} className='justify-items-center text-center w-350px'>
                            <div>
                                <p className='text-center text-gray-800 cursor-pointer hover:transition hover:duration-300 hover:ease hover:text-blue-200 '>{post.title}</p>
                                <button className='bg-blue-400 px-4 py-2 mt-2 rounded-full hover:transition hover:duration-300 hover:ease hover:bg-gray-400'>Read</button>
                            </div>
                            
                        </Link>
                        <div className='flex items-center justify-center'>
                            <img 
                                className='h-8 w-8 rounded-full'
                                src={post.author.photo.url}
                            />
                            <div className='flex'>
                                <p className='text-white ml-2 mr-2'>{post.author.name}</p>
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
            */}
            
        </div>
    )
}

export default FeaturedPostsCard
