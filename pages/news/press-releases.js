import React, { useEffect } from 'react';
import ReleaseItems from '../../components/PressReleaseItems';
import { getPressReleases } from '../../services';
import releases from '../../components/data/Releases/allreleases';
import Dates from '../../components/Dates'
import { Helmet } from "react-helmet";
import { useState } from 'react';
import HeaderSite from '../../components/HeaderSite';
import FooterSite from '../../components/FooterSite';


function pressReleases({ pressReleases }) {
    const allDates = [...new Set(pressReleases.map(item => item.node.releaseYear)), 'All'];
    const [dates] = useState(allDates);
    const [releaseItems, setReleaseItems] = useState( pressReleases );
    const [date, setDate] = useState('Start')
    

    const filter = (dateIn) =>{
        if(dateIn === 'All'){
            setReleaseItems(pressReleases)
            setDate('All')
            return;
        }
        let filteredData;
        if (dateIn === 'Start'){
        filteredData  = pressReleases.filter((item)=>{
            return item.node.releaseYear == '2022';
        })
        } else {
        filteredData  = pressReleases.filter((item)=>{
            setDate(date)
            return item.node.releaseYear === dateIn;
        })
        }
        setReleaseItems(filteredData);

    }

    useEffect(() => {
        if(date === 'Start'){
        let releases2022 = releaseItems.filter((item) => {
            return item.node.releaseYear == '2022';
        })
        setReleaseItems(releases2022)
        }
    }, [date])

    // <ReleaseItems releaseItem={releaseItems}/>

    return (
        <div className="PressR">
            <Helmet>
                <title>Press Releases | Official Glimpse announcements | Investor news</title>
                <meta
                name="description"
                content="Read official announcements from The Glimpse Group. Stay up to date on breaking news and important company developments."
                />
            </Helmet>
            <HeaderSite />
            <div className='py-8 px-3 mt-24 flex flex-col items-center'>
                <h1 className="m__bottom m__top text-gray-600 font-light text-center text-4xl" style={{ fontFamily: 'Montserrat' }}>Press Releases</h1>
                <div className='flex justify-center'>
                    <Dates filter={filter} dates={dates}/>
                </div>
                
                <div className="press-content mt-3 text-center gap-4 flex flex-wrap justify-center pb-4 w-full">
                    <ReleaseItems releaseItem={releaseItems} />
                </div>
            </div>
            <FooterSite />
        </div>
    )
}

export default pressReleases

// Fetch data at build time
export async function getStaticProps() {
    const pressReleases = (await getPressReleases()) || [];
    return {
      props: { pressReleases },
    };
  }
