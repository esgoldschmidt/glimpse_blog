import React from 'react'
import { Helmet } from "react-helmet";
import { Box, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";
import FooterSite from "../components/FooterSite";
import HeaderSite from '../components/HeaderSite';

import companies from "../components/data/allcompanies";

function ourCompanies() {
    return (
        <div>
            <Helmet>
                <title>The Glimpse Group subsidiary companies | Diverse sectors and industries </title>
                <meta
                name="description"
                content="Learn which subsidiary company best suits your needs. Our diverse roster of VR and AR companies cover a wide range of sectors."
                />
            </Helmet>
            <HeaderSite />
            <div className='py-8 px-3 mt-16'>
                <div className="m__bottom m__top flex justify-center">
                    <h1 className="text-gray-600 font-light text-4xl sm:text-5xl my-5" style={{ fontFamily: 'Montserrat' }}>Our Companies</h1>
                </div>
                <div className="card-grid-responsive text-center gap-4 flex flex-wrap justify-center">
                    {companies
                    .filter(comp => comp.id !== 7 && comp.id !== 15)
                    .map(comp => {
                        return (
                        <div className="card w-80 rounded-lg pb-4" key={comp.id}>
                            <Box height={160} className='flex justify-center'>
                            { comp.id !== 12 ? 
                                <img
                                src={comp.image.src}
                                alt={comp.alt}
                                style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                filter: comp.invert ? "invert(1)" : "invert(0)",
                                }}
                            /> 
                            : 
                            <img
                                src={comp.image2.src}
                                alt={comp.alt}
                                style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                filter: comp.invert ? "invert(1)" : "invert(0)",
                                }}
                            />
                            }
                            
                            </Box>
                            <Box p={2}>
                            
                            <Typography variant="subtitle2" className='text-gray-500' style={{ height: "4rem" }}>
                                {comp.description}
                            </Typography>
                            </Box>

                            {/* <div className="card-content">
                            <h4>{comp.alt}</h4>
                            <div className="card-content-date">
                                <i className="far fa-calendar-alt"></i>
                                <span> {comp.date}</span>
                            </div>
                            </div> */}
                            <div >

                            <a href={comp.link} className="cta" target="_blank">
                                <span className='text-gray-500'>
                                Visit Site <i className="fas fa-arrow-right"></i>
                                </span>
                            </a>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
            <ContactForm />
            <FooterSite />
        </div>
    )
}

export default ourCompanies;
