import React from 'react'
import { Helmet } from "react-helmet";
import Link from "next/link"
import HeaderSite from '../../components/HeaderSite';
import Solutions from "../../Components/Solutions";
import ContactForm from "../../Components/ContactForm";
import FooterSite from "../../Components/FooterSite";
import ClientIndustrySolutions from "../../Components/ClientsIndustrySolutions"
import background from "../../assets/images/solutions/wave.png"

import healthcareImage from "../../assets/images/solutions/health-alt.jpg";

import Montefiore from "../../assets/images/clients/montefiore.png";
import Mount from "../../assets/images/clients/mount.png";
import Yale from "../../assets/images/clients/yale-newhaven.png";
import BostonSchool from "../../assets/images/clients/bostonschool.png";

function healthcare() {
    const image1 = Montefiore
    const image2 = Mount
    const image3 = Yale
    const image4 = BostonSchool

    const linky1 = "https://www.montefiore.org/"
    const linky2 = "https://www.mountsinai.org/"
    const linky3 = "https://www.ynhh.org/"
    const linky4 = "https://www.bumc.bu.edu/busm/"

    const alt1 = "Montefiore Medical Center"
    const alt2 = "Mount Sinai"
    const alt3 = "Yale New Haven Hospital"
    const alt4 = "Boston University School of Medicine"

    return (
        <div>
            <Helmet>
                <title>Healthcare VR solutions | Improve patient experience | The Glimpse Group</title>
                <meta
                    name="description"
                    content="Train the next generation of healthcare professionals in VR. Improve the patient experience with engaging VR and AR solutions."
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
                                    src="https://player.vimeo.com/video/652134375?h=5bc6d23b9c&title=0&byline=0&portrait=0"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                            <div className="w-full md:w-10/12 lg:w-1/2">
                                <h2 className='text-white text-3xl xl:text-4xl m-3 text-center font-light'>Healthcare</h2>
                                <p className='text-white mb-4 mx-4 font-light text-justify'>VR/AR technology is transforming healthcare practices and training programs. Healthcare professionals receiving hard skill training in VR/AR can practice difficult procedures in a low-pressure environment. Patients receiving care can feel more comfortable in treatment centers with VR/AR experiences. Both physical therapy and mental/emotional therapy benefit from the conveniences of VR/AR technology.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner__container bg-white border-y-4 border-gray-200">
                        <div className="features">
                            <div className="grid-features-container flex flex-col lg:flex-row justify-around">
                                <div className="box text-left lg:text-right lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Clinical Training</h3>
                                        <p>VR/AR-based training enables upcoming healthcare professionals to safely acquire on-the-job experience, practicing procedures and receiving constructive feedback in the moment.</p>
                                    </div>
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Pediatric Distraction Therapy</h3>
                                        <p>VR/AR comforts patients by transforming ordinary hospital rooms into vivid, colorful artscapes. Patients who are physically separated can be brought together in virtual environments, providing a sense of agency to patients receiving treatment on-site.</p>
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 flex items-center justify-center p-3">
                                    <div className="img-box">
                                        <img src={healthcareImage.src} alt="Healthcare" />
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Physical Therapy</h3>
                                        <p>Physical therapy conducted in VR allows the therapist to personalize and fine-tune exercises within a given application, making physical therapy more convenient and engaging for patients.</p>
                                    </div>
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Remote Therapy Sessions</h3>
                                        <p>Lifelike avatars, gestures, and virtual environments lend a sense of realism to remote therapy, allowing it to be just as effective and more convenient than in-person therapy.</p>
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

export default healthcare
