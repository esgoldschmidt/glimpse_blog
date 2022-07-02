import React, { useState, useEffect } from 'react'
import { FeaturedPostsCard } from '../components'
import { getFeaturedPosts } from '../services'
import {isMobile} from 'react-device-detect';
import Carousel from 'react-grid-carousel'

const FeaturedPosts = () => {
    const [ featuredPosts, setFeaturedPosts ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        getFeaturedPosts()
            .then((result) => {
                setFeaturedPosts(result)
                setIsLoading(false)
            })
            
    }, [])
    
    return (
        <div>
            <div className="press-content text-center gap-4 flex flex-wrap justify-center pb-4 w-full">
                {!isLoading && 
                    featuredPosts.map((post, index) => (  
                        <FeaturedPostsCard post={post} />  
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedPosts
