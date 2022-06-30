import React from 'react'
import { Helmet } from "react-helmet";
import HeaderSite from '../components/HeaderSite';
import Solutions from '../components/Solutions';

function industrySolutions() {
    return (
        <div>
            <Helmet>
                <title>AR and VR Industry Solutions | The Glimpse Group</title>
                <meta
                    name="description"
                    content="AR and VR Industry Solutions"
                />
            </Helmet>
            <HeaderSite />
            <div className='m-6 mt-32'>
                <h1 className='text-center text-4xl lg:text-5xl font-light text-gray-500'>Solutions by Sector</h1>
                <Solutions  />
            </div>
        </div>
    )
}

export default industrySolutions;
