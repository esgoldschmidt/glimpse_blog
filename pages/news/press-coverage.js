import React, { useEffect } from 'react'
import HeaderSite from '../../components/HeaderSite';
import FooterSite from '../../components/FooterSite'
import ContactForm from '../../components/ContactForm'
import { useState } from 'react'
import { Helmet } from "react-helmet";
import pressc from '../../components/data/allpress'
import Dates from '../../components/Dates'
import PressCoverageItems from "../../components/PressCoverageItems";
import { getPressCoverage } from '../../services';



function pressCoverage( {pressCoverageItems} ) {
    const allDates = ['All', ...new Set(pressCoverageItems.map(item => item.node.coverageYear))];
    const [dates] = useState(allDates);
    const [pressItems, setPressItems] = useState(pressCoverageItems);
    const [date, setDate] = useState('Start')

    const filter = (dateIn) =>{
        if(dateIn === 'All'){
            setPressItems(pressCoverageItems)
            setDate('All')
            return;
        }
        let filteredData;
        if (dateIn === 'Start'){
            filteredData  = pressCoverageItems.filter((item)=>{
                return item.node.coverageYear == '2022';
            })
        } else {
            filteredData  = pressCoverageItems.filter((item)=>{
                setDate(dateIn)
                return item.node.coverageYear === dateIn;
            })
        }
        setPressItems(filteredData);
    }

    useEffect(() => {
        if(date === 'Start'){
        let pressCoverageItems2022 = pressCoverageItems.filter((item) => {
            return item.node.coverageYear == '2022';
        })
        setPressItems(pressCoverageItems2022)
        }
    }, [date])

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
                <h4 className='text-center'>YOUR TRUSTED SOURCE FOR VR AND AR INFORMATION</h4>
                </span>
                <h1 className="text-gray-600 font-light text-4xl mt-3" style={{ fontFamily: 'Montserrat' }}>Press Coverage</h1>
                {/* <p>Glimpse is your source for information regrading the enterprise <br/> development of VR and AR software services.</p> */}
            </div>
            <Dates filter={filter} dates={dates}/>
            <br/>
            <div className="press-content text-center gap-4 flex flex-wrap justify-center pb-4 w-full">
                <PressCoverageItems pressItem={pressItems}/>
            </div>
            <ContactForm />
            <FooterSite />
        </div>
    )
}

export default pressCoverage

// Fetch data at build time
export async function getStaticProps() {
    const pressCoverageItems = (await getPressCoverage()) || [];
    return {
      props: { pressCoverageItems },
    };
  }