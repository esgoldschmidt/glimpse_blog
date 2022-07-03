
import React, { useState } from 'react'
import HeaderSite from '../components/HeaderSite';
import HeaderSiteNew from '../components/HeaderSiteNew';
import FooterSite from '../components/FooterSite';
import ContactForm from '../components/ContactForm'
import { Helmet } from "react-helmet";
import { useMediaQuery, Box } from "@mui/material";
import glimpseCompanies from "../components/data/allcompanies";
import VideoJS from "../components/VideoJS";
import Clients from "../components/Clients";
import Solutions from "../components/Solutions";
import Companies from "../components/Companies";

export default function Home({ posts }) {
  const [companyItems] = useState(glimpseCompanies);
    const b830 = useMediaQuery('(max-width:830px)')
    return (
        <div className='HomePage'>
            <Helmet>
                <title>The Glimpse Group | VR and AR Enterprise Solutions</title>
                <meta
                name="description"
                content="The Glimpse Group is a Virtual Reality ( VR ) & Augmented Reality ( AR ) Platform Company comprised of multiple subsidiary companies offering VR and AR Solutions for enterprise"
                />
            </Helmet>
            <HeaderSite />
        
            <div className='home-content mt-28'>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top='110px'
                zIndex={40}
                height="91.45vh"
                minHeight='600px'
                width="100%"
                color="white"
                >
                <div align="center" className='p-4 text-2xl md:text-4xl lg:text-5xl md:w-11/12 ' style={{ fontFamily: 'Montserrat'}}>
                    <h1 className='font-medium'>
                    Unlocking the Benefits of <br /> Virtual Reality & Augmented Reality
                    </h1>
                    
                </div>      
                <div align="center" className='w-full'>
                    <h2 className='p-2 font-light text-xl lg:text-2xl w-10/12' style={{ fontFamily: 'Montserrat'}}>
                    The Glimpse Group <a href='https://ir.theglimpsegroup.com/' target='_blank' rel="noreferrer" className='transform duration-700 hover:ease hover:text-glimpse-blue'>
                    (Nasdaq: VRAR)</a> is an immersive technology 
                    { !b830 ? <br /> : " " }
                    platform company, comprised of a diverse ecosystem of companies 
                    { !b830 ? <br /> : " " } 
                    providing enterprise-focused AR and VR software 
                    { !b830 ? <br /> : " " } 
                    and services across sectors
                    </h2>
                </div>
                </Box>
                <VideoJS />
            </div>
            <Clients />

            <section className="p__y">
                <div className="max__width m__y">
                <div className="container-text__width flex text-4xl flex-col items-center">
                    <h2 className='font-light text-gray-600 m-6' style={{ fontFamily: 'Montserrat' }}>Our Business Software & Solutions</h2>
                    <div className='flex justify-center'>
                    <p className="m__bottom text-lg w-10/12 md:w-1/2 font-light text-gray-600 text-center" style={{ fontFamily: 'Montserrat' }}>
                        Within The Glimpse Group, we have extensive experience across a
                        wide range of sectors, from Education to Corporate Training,
                        Marketing to Healthcare.
                    </p>
                    </div>
                </div>
                <Solutions />
                </div>
            </section>
            <div className="max__width m__top m-4 flex flex-col items-center" id="companies">
                <div className="container-text__width text__center flex flex-col items-center">
                    <h2 className='pb-2 font-light text-gray-600 text-4xl' style={{ fontFamily: 'Montserrat' }}>Our Companies</h2>
                    <div className='flex justify-center'>
                        <p className="m__bottom w-10/12 md:w-2/3 text-lg font-light text-gray-600 text-center mt-4 mb-6" style={{ fontFamily: 'Montserrat' }}>
                        As part of the Glimpse ecosystem, our companies focus on their
                        core competencies while benefiting from one another's industry
                        connections, IP, resources and expertise. Together, we develop
                        innovative VR/AR solutions for a variety of sectors, creating the
                        products and software services that will form the metaverse.
                        </p>
                    </div>
                
                </div>
                <Companies companyItem={companyItems} />
            </div>
            <div className='m-8'>
                <ContactForm />
            </div>
            
            <FooterSite />
        </div>
    )
}