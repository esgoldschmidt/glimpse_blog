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
            <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
                <Carousel 
                    cols={4} 
                    rows={2} 
                    gap={10} 
                    loop
                    className='bg-white'
                    responsiveLayout={[
                        {
                        breakpoint: 1300,
                        cols: 3
                        },
                        {
                        breakpoint: 1025,
                        cols: 2
                        }
                    ]}
                    mobileBreakpoint={670}
                    >
                    {!isLoading && 
                        featuredPosts.map((post, index) => (
                            <Carousel.Item key={index}>
                                <div className='m-2'>
                                    <FeaturedPostsCard post={post} />
                                </div>
                            </Carousel.Item> 
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default FeaturedPosts
