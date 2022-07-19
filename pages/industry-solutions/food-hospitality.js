import React from 'react'
import { Helmet } from "react-helmet";
import Link from "next/link"
import HeaderSite from '../../components/HeaderSite';
import Solutions from "../../components/Solutions";
import ContactForm from "../../components/ContactForm";
import FooterSite from "../../components/FooterSite";
import ClientIndustrySolutions from "../../components/ClientsIndustrySolutions"
import background from "../../assets/images/solutions/wave.png"

import foodImage from "../../assets/images/solutions/food-alt.jpg";

import Panera from "../../assets/images/clients/panera-bread.png";
import Magnolia from "../../assets/images/clients/magnolia.png";
import Dominos from "../../assets/images/clients/dominos.png";
import Swiss from "../../assets/images/clients/swiss.png";

function foodHospitality() {
    const image1 = Panera
    const image2 = Magnolia
    const image3 = Dominos
    const image4 = Swiss

    const linky1 = "https://www.panerabread.com/en-us/home.html"
    const linky2 = "https://www.magnoliabakery.com/"
    const linky3 = "https://dominos.com"
    const linky4 = "https://www.swisschalet.com/en.html"

    const alt1 = "Panera Bread"
    const alt2 = "Magnolia Bakery"
    const alt3 = "Dominos Pizza"
    const alt4 = "Swiss Chalet"

    return (
        <div>
            <Helmet>
                <title>Memorable customer experiences | Lifelike VR tours and travel destinations | The Glimpse Group</title>
                <meta
                    name="description"
                    content="Spotlight travel destinations with VR tourism experiences. Curate a showcase of your accommodations and amenities."
                />
            </Helmet>
            <HeaderSite />
            <div className="pt-12 sm:px-3 mt-16">
                <h1 className='text-center text-4xl lg:text-5xl font-light m-3 text-gray-500'>Solutions by Sector</h1>
                <section className="outer-container relative bg-sky-700 max-w-screen-2xl rounded-lg mx-1 my-4 sm:py-5 sm:px-2 md:px-4">
                    <div className="inner__container text-gray-700 rounded-lg">
                        <div className="grid-container flex items-center lg:justify-between flex-col lg:flex-row w-full bg-cover bg-no-repeat bg-right lg:bg-center py-6 pb-24 rounded-t-lg" style={{ backgroundImage: `url(${background.src})` }}>
                            <div className="h-72 lg:h-80 w-full lg:w-1/2 sm:ml-4">
                                <iframe
                                    src="https://player.vimeo.com/video/652203666?h=ede5af1784&byline=0&title=0&portrait=0"
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
                                <h2 className='text-white text-3xl xl:text-4xl m-3 text-center font-light'>Food & Hospitality</h2>
                                <p className='text-white mb-4 mx-4 font-light text-justify'>Enhance experiences for your customers with VR/AR technology. Outfit your menus with AR to share high-quality 3D models of your dishes, leading to well-informed and satisfied customers. Create branded VR/AR promotions for live events and travel opportunities, ensuring your guests have exciting and memorable experiences. Embed dynamic information into your products with interactive AR labeling.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner__container bg-white border-y-4 border-gray-200">
                        <div className="features">
                            <div className="grid-features-container flex flex-col lg:flex-row justify-around">
                                <div className="box text-left lg:text-right lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Host Live Events in VR</h3>
                                        <p>Reinvent traditional 2D live video events into groundbreaking 3D entertainment experiences with Virtual Reality.</p>
                                    </div>
                                    <div className="bullet-right">
                                        <h3 className='font-bold text-md py-2'>Visualize Dishes in AR</h3>
                                        <p>Increase Point of Sale and inform your customers by outfitting traditional menus with high-quality 3D models of your dishes. Embed AR visualizations in articles and promotions which reference your dishes to build customer interest.</p>
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 flex items-center justify-center p-3">
                                    <div className="img-box">
                                        <img src={foodImage.src} alt="Food & Hospitality" />
                                    </div>
                                </div>
                                <div className="box lg:w-1/3 p-3 flex flex-col justify-around gap-4">
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>Interactive Packaging</h3>
                                        <p>Add dynamic information to a product's packaging to encourage purchases and gamify product consumption. Inform your customers and make your products more memorable with VR/AR labeling.</p>
                                    </div>
                                    <div className="bullet">
                                        <h3 className='font-bold text-md py-2'>AR Promoting Tourism</h3>
                                        <p>Make the pictures you take on vacation even more memorable by adding AR features. Enliven landscapes, pair photos with AR-outfitted destinations, and share your travel experiences with other users.</p>
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

export default foodHospitality
