import React from 'react'
import { Helmet } from "react-helmet";
import Link from "next/link"
import HeaderSite from '../../components/HeaderSite';
import Solutions from "../../components/Solutions";
import ContactForm from "../../components/ContactForm";
import FooterSite from "../../components/FooterSite";
import ClientIndustrySolutions from "../../components/ClientsIndustrySolutions"
import background from "../../assets/images/solutions/wave.png"

import k12Image from "../../assets/images/solutions/k-12.jpg";

import Fordham from "../../assets/images/clients/fordham.png";
import Temple from "../../assets/images/clients/temple.png";
import Sacred from "../../assets/images/clients/sacred.png";
import PWC from "../../assets/images/clients/pwc.png";

function k12Education() {
    return (
        <div>
            <Helmet>
                <title>Immersive education tools | Enhance classroom & remote learning | The Glimpse Group</title>
                <meta
                    name="description"
                    content="Immersive education tools deepen classroom learning and elevate remote learning. Introduce students to emerging VR early."
                />
            </Helmet>
            <HeaderSite />
            <div className="pt-12 px-3 mt-16">
                <h1 className='text-center text-4xl lg:text-5xl font-light m-3 text-gray-500'>Solutions by Sector</h1>
                <section className="outer-container relative bg-sky-700 max-w-screen-2xl rounded-lg m-4 py-5 px-4">
                    <div className="inner__container text-gray-700 rounded-lg">
                        <div className="grid-container flex items-center lg:items-stretch lg:justify-between flex-col lg:flex-row w-full bg-cover bg-no-repeat bg-right lg:bg-center py-6 pb-24 rounded-t-lg" style={{ backgroundImage: `url(${background.src})` }}>
                            <div className="sm:h-72 lg:h-auto w-full lg:w-1/2 ml-4">
                                <iframe
                                    src="https://player.vimeo.com/video/582304954?h=59a4792128&byline=0&title=0&portrait=0"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                            <div className="w-full md:w-10/12 lg:w-1/2">
                                <h2 className='text-white text-3xl xl:text-4xl m-3 text-center font-light'>K-12 Education</h2>
                                <p className='text-white mb-4 mx-4 font-light'>VR/AR complements traditional classroom learning and enhances remote education. Immersive learning tools strengthen classroom and remote learning, while shared digital spaces and virtual field trips elevate remote learning. Familiarizing students with VR/AR technology prepares them for the workplace of the future.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner__container bg-white border-y-4 border-gray-200">
                        <div className="features">
                            <div className="grid-features-container flex flex-col lg:flex-row justify-around">
                                <div className="box text-left lg:text-right lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>AR Learning Materials</h3>
                                        <p>Transform books and worksheets into dynamic learning tools that feature quizzes, 3D models, videos, and more.</p>
                                    </div>
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Boost Enrollment</h3>
                                        <p>Adopting VR/AR educational technology positions your school above the rest. Virtual tours and testimonials from real students allow prospective students to learn more about your school.</p>
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 flex items-center justify-center p-3">
                                    <div className="img-box">
                                        <img src={k12Image.src} alt="K-12 Education" />
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Virtual Field Trips</h3>
                                        <p>Use VR to transport students to tour magical libraries, excavate rock formations, and explore new environments in-person and remotely.</p>
                                    </div>
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Digital Home Room</h3>
                                        <p>Classroom learning in VR/AR bridges the social gap between remote and in-person education, enabling students to share a digital space and showcase schoolwork with one another in real time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
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

export default k12Education
