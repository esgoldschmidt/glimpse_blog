import React from 'react'
import { Helmet } from "react-helmet";
import Link from "next/link"
import HeaderSite from '../../components/HeaderSite';
import Solutions from "../../components/Solutions";
import ContactForm from "../../components/ContactForm";
import FooterSite from "../../components/FooterSite";
import ClientIndustrySolutions from "../../components/ClientsIndustrySolutions"
import background from "../../assets/images/solutions/wave.png"

import eventsImage from "../../assets/images/solutions/retail-alt.png";

import Colgate from "../../assets/images/clients/colgate.png";
import Chanel from "../../assets/images/clients/chanel.png";
import Bolle from "../../assets/images/clients/bolle.png";
import American from "../../assets/images/clients/american-eagle.png";

function eventsAndMeetings() {
    const image1 = Colgate
    const image2 = Chanel
    const image3 = Bolle
    const image4 = American

    const linky1 = "https://www.colgate.com/en-us"
    const linky2 = "https://www.chanel.com/us/"
    const linky3 = "https://www.bolle.com/us/"
    const linky4 = "https://www.ae.com/us/en"

    const alt1 = "Colgate"
    const alt2 = "Chanel"
    const alt3 = "Bolle"
    const alt4 = "American Eagle Outfitters"
    
    return (
        <div>
            <Helmet>
                <title>Immersive coworking environments | Memorable virtual events | The Glimpse Group</title>
                <meta
                    name="description"
                    content="Increase productivity with seamless coworking in VR. Create memorable and accessible virtual events for attendees everywhere."
                />
            </Helmet>
            <HeaderSite />
            <div className="pt-12 sm:px-3 mt-16">
                <h1 className='text-center text-4xl lg:text-5xl font-light m-3 text-gray-500'>Solutions by Sector</h1>
                <section className="outer-container relative bg-sky-700 max-w-screen-2xl rounded-lg mx-1 my-4 sm:py-5 sm:px-2 md:px-4">
                    <div className="inner__container text-gray-700 rounded-lg">
                        <div className="grid-container flex items-center lg:items-stretch lg:justify-between flex-col lg:flex-row w-full bg-cover bg-no-repeat bg-right lg:bg-center py-6 pb-24 rounded-t-lg" style={{ backgroundImage: `url(${background.src})` }}>
                            <div className="h-72 lg:h-80 w-full lg:w-1/2 sm:ml-4">
                                <iframe
                                    src="https://player.vimeo.com/video/697116073?h=1fc3391f29&title=0&byline=0&portrait=0"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className='grow p-0 m-0 border-0'
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                            <div className="w-full md:w-10/12 lg:w-1/2 flex flex-col justify-center">
                                <h2 className='text-white text-3xl xl:text-4xl m-3 text-center font-light'>Events & Meetings</h2>
                                <p className='text-white mb-4 mx-4 font-light text-justify'>VR/AR technology enhances your industry conferences, corporate events, and meetings both personal and professional. Seamlessly collaborate with coworkers in VR, ensuring productive workflow remotely and in the office. Hosting corporate events in VR facilitates networking and contact info collection, making events easier to attend and more valuable to your brand. Digital avatars relieve tension in high-pressure presentations and emotionally intimate support group settings.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner__container bg-white border-y-4 border-gray-200">
                        <div className="features">
                            <div className="grid-features-container flex flex-col lg:flex-row justify-around">
                                <div className="box text-left lg:text-right lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Corporate Meetings</h3>
                                        <p>Personalized avatars and seamless virtual environments allow for productive and insightful meetings with coworkers and clients.</p>
                                    </div>
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Business Presentations</h3>
                                        <p>Business presentations conducted in VR are more compelling and comprehensive compared to conventional in-person presentations.</p>
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 flex items-center justify-center p-3">
                                    <div className="img-box">
                                        <img src={eventsImage.src} alt="Events & Meetings" />
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Professional Events</h3>
                                        <p>Conventions, exhibitions, and conferences in VR allow you to effortlessly network with industry colleagues and liaise with potential clients.</p>
                                    </div>
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Support Groups</h3>
                                        <p>VR breaks down traditional barriers to support group therapy, addressing issues of social stigma and public discomfort with anonymized avatars.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ClientIndustrySolutions image1={image1} image2={image2} image3={image3} image4={image4} alt1={alt1} alt2={alt2} alt3={alt3} alt4={alt4} linky1={linky1} linky2={linky2} linky3={linky3} linky4={linky4} />
                </section>
                <div className='m-6'>
                    <Solutions  />
                </div>
            </div>
            <ContactForm />
            <FooterSite />
        </div>
    )
}

export default eventsAndMeetings
