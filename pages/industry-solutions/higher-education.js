import React from 'react'
import { Helmet } from "react-helmet";
import Link from "next/link"
import HeaderSite from '../../components/HeaderSite';
import Solutions from "../../components/Solutions";
import ContactForm from "../../components/ContactForm";
import FooterSite from "../../components/FooterSite";
import ClientIndustrySolutions from "../../components/ClientsIndustrySolutions"
import background from "../../assets/images/solutions/wave.png"

import higherEdImage from "../../assets/images/solutions/higher-ed-alt.png";

import Fordham from "../../assets/images/clients/fordham.png";
import Temple from "../../assets/images/clients/temple.png";
import Sacred from "../../assets/images/clients/sacred.png";
import PWC from "../../assets/images/clients/pwc.png";

function higherEducation() {
    const image1 = Fordham
    const image2 = Sacred
    const image3 = Temple
    const image4 = PWC

    const linky1 = "https://www.fordham.edu/"
    const linky2 = "https://www.sacredheart.edu/"
    const linky3 = "https://www.temple.edu/"
    const linky4 = "https://pwc.com/"

    const alt1 = "Fordham University"
    const alt2 = "Sacred Heart University"
    const alt3 = "Temple University - Philadelphia"
    const alt4 = "PricewaterhouseCoopers"
    return (
        <div>
            <Helmet>
                <title>Challenge and inspire students | Immersive education tools | The Glimpse Group </title>
                <meta
                    name="description"
                    content="Enhance higher education with innovative learning solutions and immersive VR environments for lectures and classes."
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
                                    src="https://player.vimeo.com/video/652134375?h=5bc6d23b9c&title=0&byline=0&portrait=0"
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
                                <h2 className='text-white text-3xl xl:text-4xl m-3 text-center font-light'>Higher Education</h2>
                                <p className='text-white mb-4 mx-4 font-light'>Enhance education at the highest level by using VR/AR to challenge and inspire students. Improve remote learning with immersive educational environments and reinforce in-person learning with specialized classroom technology. Equip students with the latest VR/AR tools for presentation and research and boost enrollment by adopting innovative educational techniques.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner__container bg-white border-y-4 border-gray-200">
                        <div className="features">
                            <div className="grid-features-container flex flex-col lg:flex-row justify-around">
                                <div className="box text-left lg:text-right lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Virtual Campus Tours</h3>
                                        <p>Utilize AR school tours to boost enrollment, showcasing the adoption of cutting-edge educational technologies.</p>
                                    </div>
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Experiential Learning</h3>
                                        <p>VR simulations provide realistic practical experience for developing soft and hard skills, preparing students for any vocation.</p>
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 flex items-center justify-center p-3">
                                    <div className="img-box">
                                        <img src={higherEdImage.src} alt="Higher Education" />
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Digital Workspace</h3>
                                        <p>VR gives students a vast digital workspace to organize research, visualize data, and reach new conclusions.</p>
                                    </div>
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Virtual Classrooms</h3>
                                        <p>Take advantage of specialized classroom technologies in VR such as AI note-takers, whiteboards, and special 360-video for remote and in-person learning.</p>
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

export default higherEducation
