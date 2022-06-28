import React from 'react'
import { Helmet } from "react-helmet";
import Link from 'next/link'
import ContactForm from "../Components/ContactForm";
import FooterSite from "../Components/FooterSite";
import HeaderSite from '../components/HeaderSite';

import ourwork from "../Components/data/allourwork";

function ourWork() {
    return (
        <div>
            <Helmet>
                <title>The Glimpse Group client case studies | VR and AR solutions</title>
                <meta
                name="description"
                content="See what we’ve accomplished and what we can do for you. Explore our past projects, read client endorsements, and watch highlight reels. "
                />
            </Helmet>
            <HeaderSite />
            <div className='py-8 px-3 mt-16'>
                <div className='m__bottom m__top flex justify-center'>
                    <h1 className="text-gray-600 font-light text-4xl sm:text-5xl my-5" style={{ fontFamily: 'Montserrat' }}>Our Work</h1>
                </div>
                <div className='card-grid-responsive text-center gap-4 flex flex-wrap justify-center pb-4'>
                    {
                    ourwork.map((item)=>{
                        return <div className='card w-80 rounded-lg bg-zinc-200 flex flex-col items-center' key={item.id}>
                            <div className='top-img border-t-lg'>
                                <img src={ item.image }  alt={item.title} className="rounded-t-lg" />
                            </div>
                            <div className='card-content px-4 pt-4'>
                                <div className='h-14 text-xl flex items-center font-medium'>
                                    <h4>{item.title}</h4>
                                </div>
                                <div className='card-content-date pt-4'>
                                    <i className="far fa-calendar-alt"></i>
                                    <span> { item.date }</span>
                                </div>
                            </div>
                            <a href={`/our-work/${item.title}`} className="cta w-40">
                                <span className='text-gray-600'>
                                    View <i className="fas fa-arrow-right"></i>
                                </span>
                            </a>
                        </div>
                    })
                    }
                </div>
            </div>
            <ContactForm />
            <FooterSite />
        </div>
    )
}

export default ourWork;
