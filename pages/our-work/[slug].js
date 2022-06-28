import React from 'react';
import ourwork from '../../components/data/allourwork'
import { useRouter } from 'next/router'
import { Helmet } from 'react-helmet';
import ContactForm from "../../components/ContactForm";
import FooterSite from "../../ccomponents/FooterSite";
import HeaderSite from '../../components/HeaderSite';

function singleVideo() {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div>
            <Helmet>
                <title>{`Our Work | ${ slug } | The Glimpse Group`}</title>
                <meta
                name="description"
                content="The Glimpse Group is a Virtual Reality & Augmented Reality Platform Company Comprised of Multiple Software & Services Subsidiaries Creating VR/AR Solutions"
                />
            </Helmet>
            <HeaderSite />
            {ourwork.filter(item => item.title === slug).map((item, index) => (
                <React.Fragment key={index} >
                    <div className='w-full flex justify-center m-4 text-gray-600 font-light text-4xl sm:text-5xl my-5' style={{ fontFamily: 'Montserrat' }}>
                        <h2 className='text-center'>{item.title}</h2>
                    </div>
                    <div className='iframe-container mx-3' style={{ height: '65vh', width: '94vw'}}>
                        <iframe src={`${item.video}&autoplay=1`} title="YouTube video player" frameBorder="{0}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen width='100%' height='100%' />
                    </div>
                    <div className='video-details'>
                    {/* <h1>{item.title}</h1> */}
                    {/* <i className="far fa-calendar-alt"></i>
                    <span> { item.date }</span> */}
                    </div>
                </React.Fragment>
                ))}
            <ContactForm />
            <FooterSite />
        </div>
    )
}

export default singleVideo
