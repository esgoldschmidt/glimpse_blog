import React from 'react'
import { Helmet } from "react-helmet";
import Link from "next/link"
import HeaderSite from '../../components/HeaderSite';
import Solutions from "../../components/Solutions";
import ContactForm from "../../components/ContactForm";
import FooterSite from "../../components/FooterSite";
import ClientIndustrySolutions from "../../components/ClientsIndustrySolutions"
import background from "../../assets/images/solutions/wave.png"

import trainingImage from "../../assets/images/solutions/training-alt.jpg";

import Glu from "../../assets/images/clients/glu.png";
import Unreal from "../../assets/images/clients/unreal.png";
import Verizon from "../../assets/images/clients/verizon.png";
import Samsung from "../../assets/images/clients/samsung.png";

function professionalTraining() {
    const image1 = Glu
    const image2 = Unreal
    const image3 = Verizon
    const image4 = Samsung

    const linky1 = "https://glu.com/"
    const linky2 = "https://www.unrealengine.com/en-US/"
    const linky3 = "https://verizon.com/"
    const linky4 = "https://samsung.com/"

    const alt1 = "Glu Mobile"
    const alt2 = "Unreal"
    const alt3 = "Verizon"
    const alt4 = "Samsung"

    return (
        <div>
            <Helmet>
                <title>Hard skills and soft skills | Accelerate training and onboarding with VR | The Glimpse Group</title>
                <meta
                    name="description"
                    content="Upskill your workforce with realistic VR simulations. Practice and acquire technical knowledge and interpersonal skills faster."
                />
            </Helmet>
            <HeaderSite />
            <div className="pt-12 px-3 mt-16">
                <h1 className='text-center text-4xl lg:text-5xl font-light m-3 text-gray-600'>Solutions by Sector</h1>
                <section className="outer-container relative bg-cyan-800 max-w-screen-2xl rounded-lg m-4 py-5 px-4">
                    <div className="inner__container text-gray-700 rounded-lg">
                        <div className="grid-container flex items-center lg:items-stretch lg:justify-between flex-col lg:flex-row w-full bg-cover bg-no-repeat bg-right lg:bg-center py-6 pb-24 rounded-t-lg" style={{ backgroundImage: `url(${background.src})` }}>
                            <div className="sm:h-72 lg:h-auto w-full lg:w-1/2 ml-4">
                                <iframe
                                    src="https://player.vimeo.com/video/668674296?h=e237ef9707&byline=0&title=0&portrait=0"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                            <div className="w-full md:w-10/12 lg:w-1/2">
                                <h2 className='text-white text-3xl xl:text-4xl m-3 text-center font-light'>Professional Training</h2>
                                <p className='text-white mb-4 mx-4 font-light text-justify'>VR/AR offers convenient, comfortable spaces for practicing and acquiring
                                both hard skills and soft skills remotely, as well as analytics to
                                optimize the training process.</p> 
                        
                                <p className='text-white mb-4 mx-4 font-light text-justify'>VR/AR training for hard skills – technical skills which can be
                                quantified – simulates on-the-job experience for professions hinged on
                                practical training while reducing associated costs. VR/AR can also be
                                used to train soft skills like public speaking, negotiation, and
                                networking, enabling crucial trial-and-error experience in a
                                pressure-free environment.</p>

                                <p className='text-white mb-4 mx-4 font-light text-justify'>
                                VR/AR platforms offer comprehensive professional training, orientation
                                for new employees, and accurately replicated workplaces to smoothen the
                                onboarding process.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner__container bg-white border-y-4 border-gray-200">
                        <div className="features">
                            <div className="grid-features-container flex flex-col lg:flex-row justify-around">
                                <div className="box text-left lg:text-right lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Safety Training</h3>
                                        <p>Safety training in VR provides intuitive controls and explanatory instructions, ensuring preparedness for emergency situations.</p>
                                    </div>
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Hard Skills Training</h3>
                                        <p>VR/AR technology allows trainees to acquire crucial on-the-job experience, practicing challenging procedures and receiving immediate constructive feedback.</p>
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 flex items-center justify-center p-3">
                                    <div className="img-box">
                                        <img src={trainingImage.src} alt="Professional Training" />
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Soft Skills Training</h3>
                                        <p>Train your team in public speaking, creative thinking, negotiating, and pitching ideas in realistic business and entrepreneurial situations.</p>
                                    </div>
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Training Analytics and Feedback</h3>
                                        <p>VR/AR training platforms allow instructors to receive performance analytics in the moment, enabling them to understand training efficacy and adjust their methods in real time.</p>
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

export default professionalTraining
