import React from 'react'
import moment from 'moment'
import Link from 'next/link'; 

const FeaturedPostsCard = ({post}) => {
    return (
        <div key={post.title} className='flex flex-col items-center h-80 rounded-lg' style={{ width: '350px' }}>
            <div className='h-64 w-full min-w-350px'>
                <img 
                    alt={post.title}
                    className='object-cover h-40 w-full rounded-t-lg'
                    src={post.featuredImage.url}
                />
            </div>
            <div className='w-full h-full text-center text-white flex rounded-b-lg flex-col items-center place-content-between bg-gray-200'>
                
                <a href={'/news/glimpse-blog/' + post.slug} key={post.title} className='text-center text-normal text-gray-500 cursor-pointer transition hover:text-glimpse-blue duration-300 ease-in-out hover:scale-105 px-2 h-16 flex items-center'>
                    {post.title}
                </a>
                <div className='flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className='flex text-gray-500'>
                        {moment(post.releaseDate).format('MMM DD, YYYY')}
                    </div>
                </div>
                <Link href={'/news/glimpse-blog/' + post.slug} key={post.title} className='justify-items-center text-center h-full w-350px'>
                    <button className='bg-glimpse-blue px-4 py-2 mt-2 w-full rounded-b-lg hover:transition hover:duration-300 ease hover:bg-sky-600'>Read</button>
                </Link>
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
