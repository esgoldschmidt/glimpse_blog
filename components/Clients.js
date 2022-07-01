import Slider from "react-slick";
import { ExternalLink } from "react-external-link"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import allclients from "./data/allclients";
import React, { useState } from 'react'
import Carousel from 'react-grid-carousel'
import { useMediaQuery } from "@mui/material";

function Clients() {
    const items5 = useMediaQuery('(max-width:830px)')
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
    };
    
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
            </div>
        );
    };

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        autoplay: 1000
      };
    

    return (
        <React.Fragment>
            <div className='bg-white p-4 mb-8'>
                <div className="flex w-full justify-center mt-10 mb-6">
                    <h2 className="text-4xl text-gray-600 font-light" style={{ fontFamily: 'Montserrat' }}>Our Clients & Partners</h2>
                </div>
                <Carousel 
                    cols={5} 
                    rows={2} 
                    gap={10} 
                    loop
                    autoplay={5000}
                    responsiveLayout={[
                        {
                        breakpoint: 1300,
                        cols: 4
                        },
                        {
                        breakpoint: 1025,
                        cols: 3
                        },
                        {
                        breakpoint: 725,
                        cols: 2
                        },
                    ]}
                    mobileBreakpoint={670}
                    >
                    {
                        allclients.map((item, index) => (
                            <Carousel.Item key={index}>
                                <div style={{ width: '150px', height: '150px', padding: '0.5rem', margin: '0 auto' }}>
                                    <ExternalLink href={item.link}>
                                        <img src={item.image.src} alt={item.alt} />
                                    </ExternalLink>
                                </div> 
                            </Carousel.Item> 
                        ))
                    }
                </Carousel>
            </div>
            
        </React.Fragment>
    )
}

export default Clients
