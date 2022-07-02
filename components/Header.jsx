import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import Categories from './Categories'
import { getCategories } from '../services';
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    const path = router.asPath

    console.log('path', path)
    {/* 
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    // jsx body
    <div className='hidden md:float-left md:contents' >
        { categories.map(( category ) => ( 
            <Link key={ category.slug } href={'/category/' + category.slug}>
                <span className='md:float-right mx-2 mt-2 align-middle text-gray-400 font-semibold cursor-pointer transition duration-300 ease hover:text-glimpse-blue hover:-translate-y-1'>
                    { category.name }
                </span>
            </Link>
        ))}
    </div>


    */}

    return (
        <div className='container mx-auto px-10 mb-8 relative'>
            {path !== "/news/glimpse-blog" && 
                <div className='text-glimpse-blue absolute inset-y-1/3 transition duration-300 ease hover:-translate-y-0.5 hover:text-gray-600'>   
                    <i className="fas fa-arrow-left"></i>
                    <a href="/news/glimpse-blog" className='ml-2 hover:text-gray-600'>Blog Home</a>
                </div>
            }
            <div className='m__bottom m__top flex justify-center'>
                <h1 className="text-gray-500 font-light text-4xl my-3" style={{ fontFamily: 'Montserrat' }}>Glimpse Blog</h1>
            </div>
        </div>
    )
}

export default Header
