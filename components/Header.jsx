import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import Categories from './Categories'
import { getCategories } from '../services';

const Header = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-gray-300 py-8'>
                <div className='md:float-left block'>
                    <span className='font-bold text-4xl text-gray-400 flex items-center'>
                        At a Glimpse <span className='font-normal text-lg text-glimpse-blue mx-2'>| The Glimpse Group Blog </span>
                    </span>
                </div>
                <div className='hidden md:float-left md:contents' >
                    { categories.map(( category ) => ( 
                        <Link key={ category.slug } href={'/category/' + category.slug}>
                            <span className='md:float-right mx-2 mt-2 align-middle text-gray-400 font-semibold cursor-pointer transition duration-300 ease hover:text-glimpse-blue hover:-translate-y-1'>
                                { category.name }
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
