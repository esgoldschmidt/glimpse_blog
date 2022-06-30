import React from 'react'
import { Helmet } from "react-helmet";
import Link from "next/link"
import HeaderSite from '../../components/HeaderSite';
import Solutions from "../../components/Solutions";
import ContactForm from "../../components/ContactForm";
import FooterSite from "../../components/FooterSite";
import ClientIndustrySolutions from "../../components/ClientsIndustrySolutions"
import background from "../../assets/images/solutions/wave.png"

import financeImage from "../../assets/images/solutions/finance-alt.jpg";

import Glu from "../../assets/images/clients/glu.png";
import Unreal from "../../assets/images/clients/unreal.png";
import Verizon from "../../assets/images/clients/verizon.png";
import Samsung from "../../assets/images/clients/samsung.png";

function financeDataVisualization() {
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
                <title>Visualize data in 3D | Bring data to life using VR | The Glimpse Group</title>
                <meta
                    name="description"
                    content="Unlock new insights by visualizing and analyzing data using VR. Revolutionize your workflow by collaborating and presenting in VR. "
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
                                    src="https://www.youtube.com/embed/hZBN1t2Ott4"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                            <div className="w-full md:w-10/12 lg:w-1/2">
                                <h2 className='text-white text-3xl xl:text-4xl m-3 text-center font-light'>Data Visualization</h2>
                                <p className='text-white mb-4 mx-4 font-light text-justify'>Visualize, present, and share data in 3D space for more insightful data analysis. Customize your own VR workstation to revolutionize workflow and connect with clients remotely in VR to simplify complex concepts with 3D presentation tools. Collaborate with colleagues and accelerate team-based objectives in a comprehensive, intuitive virtual workspace. Telling your data story in 3D not only makes for more memorable presentations, but unlocks a level of clarity impossible for conventional 2D charts, graphs, and presentation tools.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner__container bg-white border-y-4 border-gray-200">
                        <div className="features">
                            <div className="grid-features-container flex flex-col lg:flex-row justify-around">
                                <div className="box text-left lg:text-right lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Coworking Environment</h3>
                                        <p>Enhance projects with coworkers by collaborating in an immersive virtual workspace. Accelerate joint efforts by communicating in real time and visualizing ideas in 3D.</p>
                                    </div>
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Wealth Management Consultation</h3>
                                        <p>Exceed the standards of in-person consultation by connecting with your clients and colleagues around the globe in a 360° virtual environment. Clearly communicate complex concepts with 3D visualization and presentation tools.</p>
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 flex items-center justify-center p-3">
                                    <div className="img-box">
                                        <img src={financeImage.src} alt="Data Visualization" />
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Customizable Workstation</h3>
                                        <p>Your highly customizable VR workspace enhances and accelerates investment research and data analysis. Utilize up to 18 monitors and a variety of intuitive configurations to personally suit your workflow.</p>
                                    </div>
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Present Financial Research</h3>
                                        <p>Create immersive presentations in Virtual Reality which impress and inspire. Visualizing data in VR allows for engaging presentations which outperform ordinary presentations.</p>
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

export default financeDataVisualization
