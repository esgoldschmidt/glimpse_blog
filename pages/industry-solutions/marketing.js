import React from 'react'
import { Helmet } from "react-helmet";
import Link from "next/link"
import HeaderSite from '../../components/HeaderSite';
import Solutions from "../../components/Solutions";
import ContactForm from "../../components/ContactForm";
import FooterSite from "../../components/FooterSite";
import ClientIndustrySolutions from "../../components/ClientsIndustrySolutions"
import background from "../../assets/images/solutions/wave.png"

import marketingImage from "../../assets/images/solutions/marketing.png";

import Anomaly from "../../assets/images/clients/anomaly.png";
import RedFuse from "../../assets/images/clients/redfuse.jpeg";
import WPP from "../../assets/images/clients/wpp.png";
import IPG from "../../assets/images/clients/ipg.png";

function marketing() {

    const image1 = Anomaly
    const image2 = RedFuse
    const image3 = WPP
    const image4 = IPG

    const linky1 = "https://anomaly.com/"
    const linky2 = "https://www.wpp.com/companies/wpp-red-fuse"
    const linky3 = "https://www.wpp.com/"
    const linky4 = "https://www.interpublic.com/"

    const alt1 = "Anomaly"
    const alt2 = "Red Fuse Communications"
    const alt3 = "WPP"
    const alt4 = "The Interpublic Group of Companies"

    return (
        <div>
            <Helmet>
                <title>Enhance ecommerce | Immersive retail experiences | The Glimpse Group </title>
                <meta
                    name="description"
                    content="Enhance ecommerce sites and create brand engagement opportunities with VR and AR retail solutions."
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
                                    src="https://player.vimeo.com/video/673990931?h=386b1ccc5c&title=0&byline=0&portrait=0"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                            <div className="w-full md:w-10/12 lg:w-1/2">
                                <h2 className='text-white text-3xl xl:text-4xl m-3 text-center font-light'>Marketing</h2>
                                <p className='text-white mb-4 mx-4 font-light text-justify'>By utilizing VR/AR technology, retail companies can enhance their
                                ecommerce sites, reinforce brick-and-mortar locations, and create
                                engagement opportunities for consumers with activated VR/AR marketing.{" "}
                                </p>
                                <p className='text-white mb-4 mx-4 font-light text-justify'> Virtual showrooms and fitting rooms allow customers to try on
                                products from home using AR filters, reducing returns and boosting
                                consumer confidence. Conduct social media campaigns with branded AR
                                filters and games, increasing brand retention and gamifying
                                advertisements. Enliven print media with paired AR experiences,
                                displaying dynamic information and other marketing activations directly
                                on product packaging.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner__container bg-white border-y-4 border-gray-200">
                        <div className="features">
                            <div className="grid-features-container flex flex-col lg:flex-row justify-around">
                                <div className="box text-left lg:text-right lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>AR Social Media Promotions</h3>
                                        <p>Create engagement opportunities through customizable social media campaigns by integrating branded AR filters and games.</p>
                                    </div>
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>AR Packaging</h3>
                                        <p>Add dynamic information to product labels, gamifying product packaging to encourage purchases. Bring product images and other print media to life by pairing them with AR experiences.</p>
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 flex items-center justify-center p-3">
                                    <div className="img-box">
                                        <img src={marketingImage.src} alt="Marketing" />
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>AR Branding Experiences</h3>
                                        <p>Enhance a product or service with a paired AR experience to increase retention and equity in the brand.</p>
                                    </div>
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Virtual Fitting Rooms</h3>
                                        <p>Normally, online shoppers can't test or try on the products they're buying. Now customers can use AR filters to virtually try products on, bolstering consumer confidence and reducing return rates.</p>
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

export default marketing
