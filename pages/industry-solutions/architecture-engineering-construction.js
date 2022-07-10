import React from 'react'
import { Helmet } from "react-helmet";
import Link from "next/link"
import HeaderSite from '../../components/HeaderSite';
import Solutions from "../../components/Solutions";
import ContactForm from "../../components/ContactForm";
import FooterSite from "../../components/FooterSite";
import ClientIndustrySolutions from "../../components/ClientsIndustrySolutions"
import background from "../../assets/images/solutions/wave.png"

import HConstruction from "../../assets/images/solutions/design-contruction.png";

import Suffolk from "../../assets/images/clients/suffolk.png";
import KPF from "../../assets/images/clients/kpf.png";
import FXC from "../../assets/images/clients/fxc.png";
import Pella from "../../assets/images/clients/pella.png";



function architectureEngineeringConstruction() {

    const image1 = KPF
    const image2 = Suffolk
    const image3 = FXC
    const image4 = Pella

    const linky1 = "https://kpf.com/"
    const linky2 = "https://www.suffolk.com/"
    const linky3 = "http://www.fxcollaborative.com/"
    const linky4 = "https://www.pella.com/"

    const alt1 = "Kohn Pedersen Fox"
    const alt2 = "Suffolk"
    const alt3 = "FXCollaborative"
    const alt4 = "Pella Door Company"

    return (
        <div>
            <Helmet>
                <title>Reduce rework costs | AR for Architecture, Engineering and Construction | The Glimpse Group</title>
                <meta
                    name="description"
                    content="Reduce rework costs and increase stakeholder buy-in with realistic 3D renderings. Enhance Building Information Modeling with AR. "
                />
            </Helmet>
            <HeaderSite />
            <div className="pt-12 sm:px-3 mt-16">
                <h1 className='text-center text-4xl lg:text-5xl font-light m-3 text-gray-500'>Solutions by Sector</h1>
                <section className="outer-container relative bg-sky-700 max-w-screen-2xl rounded-lg mx-1 my-4 py-5 px-2 md:px-4">
                    <div className="inner__container text-gray-700 rounded-lg">
                        <div className="grid-container flex items-center lg:items-stretch lg:justify-between flex-col lg:flex-row w-full bg-cover bg-no-repeat bg-right lg:bg-center py-6 pb-24 rounded-t-lg" style={{ backgroundImage: `url(${background.src})` }}>
                            <div className="sm:h-72 lg:h-auto w-full lg:w-1/2 ml-4">
                                <iframe
                                    src="https://player.vimeo.com/video/586889339?h=21bde86413&title=0&byline=0&portrait=0"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                            <div className="w-full md:w-10/12 lg:w-1/2">
                                <h2 className='text-white text-3xl xl:text-4xl m-3 text-center font-light'>Architecture, Engineering & Construction</h2>
                                <p className='text-white mb-4 mx-4 font-light'>Architecture, engineering, and construction are being transformed through VR/AR technology. Now, homes can be marketed before construction begins and incorporate homeowners' design preferences from the ground-up. Homeowners can visualize the exterior and interior of the home in VR/AR, allowing architects and engineers to accommodate design and functionality requirements while cutting down on rework costs before ground is even broken.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner__container bg-white border-y-4 border-gray-200">
                        <div className="features">
                            <div className="grid-features-container flex flex-col lg:flex-row justify-around">
                                <div className="box text-left lg:text-right lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Showcase Realistic Models</h3>
                                        <p>Instead of passively describing designs and capabilities, use AR to showcase models of previous and future builds to clients.</p>
                                    </div>
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Cut Down on Rework Costs</h3>
                                        <p>Rework costs are{" "}
                                        <Link href="https://www.12dsynergy.com/blog/reducing-rework-engineering/#:~:text=In%20the%20Architecture%2C%20Engineering%20and,on%20a%20%2410%20million%20project" target="_blank">
                                        especially costly
                                        </Link>{" "}
                                        in the AEC industry, but design proposals realized in VR/AR allow
                                        progress to be made without ground being broken.</p>
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 flex items-center justify-center p-3">
                                    <div className="img-box">
                                        <img src={HConstruction.src} alt="Architecture, Engineering & Construction" />
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Interior Decor Previews</h3>
                                        <p>Enable users to preview a wide variety of furniture, lighting, and interior design options with AR simulations.</p>
                                    </div>
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Review Construction Options</h3>
                                        <p>AEC professionals can use VR/AR platforms to visualize an area's potential construction options to regulatory bodies and potential investors alike.</p>
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

export default architectureEngineeringConstruction
