import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import Categories from './Categories'
import { getCategories } from '../services';

const Header = () => {

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
        <div className='container mx-auto px-10 mb-8'>
            <div className='m__bottom m__top flex justify-center'>
                <h1 className="text-gray-500 font-light text-4xl my-3" style={{ fontFamily: 'Montserrat' }}>Glimpse Blog</h1>
            </div>
        </div>
    )
}

export default Header
