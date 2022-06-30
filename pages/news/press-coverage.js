import React from 'react'
import HeaderSite from '../../components/HeaderSite';
import { useState } from 'react'
import { Helmet } from "react-helmet";
import pressc from '../../components/data/allpress'
import Dates from '../../components/Dates'
import PressCoverageItems from "../../components/PressCoverageItems";

const allDates = ['All', ...new Set(pressc.map(item => item.date))];

function pressCoverage() {
    const [dates] = useState(allDates);
    const [pressItems, setPressItems] = useState(pressc);

    const filter = (date) =>{
        if(date === 'All'){
            setPressItems(pressc)
            return;
        }
        const filteredData  = pressc.filter((item)=>{
            return item.date === date;
        })
        setPressItems(filteredData);
    }

    return (
        <div>
            <Helmet>
                <title>The Glimpse Group news | Coverage by leading outlets</title>
                <meta
                name="description"
                content="Read the latest press coverage from leading outlets. Insightful reporting from tech experts and thought leaders around the world. "
                />
            </Helmet>
            <HeaderSite />
            <div className='pt-8 px-3 mt-24 flex flex-col items-center'>
                <span className="text-gray-600 font-light" style={{ fontFamily: 'Montserrat' }}>
                <h4>YOUR TRUSTED SOURCE FOR VR AND AR INFORMATION</h4>
                </span>
                <h1 className="text-gray-600 font-light text-4xl mt-3" style={{ fontFamily: 'Montserrat' }}>Press Coverage</h1>
                {/* <p>Glimpse is your source for information regrading the enterprise <br/> development of VR and AR software services.</p> */}
            </div>
            <Dates filter={filter} dates={dates}/>
            <br/>
            <div className="press-content text-center gap-4 flex flex-wrap justify-center pb-4 w-full">
                <PressCoverageItems pressItem={pressItems}/>
            </div>
        </div>
    )
}

export default pressCoverage
