import React from 'react'
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
import FooterSite from "../components/FooterSite";
import HeaderSite from '../components/HeaderSite';

import GlimpsePyramid from "../assets/images/about/GlimpsePyramidLandscape.png";
import Time from "../assets/images/about/time.png";
import Customers from "../assets/images/about/customers.png";
import Companies from "../assets/images/about/companies.png";
import Developers from "../assets/images/about/developers.png";
import Bentovim from "../assets/images/about/bentovim.png";
import Charles from "../assets/images/about/charles.png";
import Amen from "../assets/images/about/amen.png";
import Enslin from "../assets/images/about/enslin.png";
import Rowlands from "../assets/images/about/rowlands.png";
import Ruckdaeschel from "../assets/images/about/ruckdaeschel.png";
import Smith from "../assets/images/about/smith.jpeg";
import Rothblum from "../assets/images/about/rothblum.png";
import Meisner from "../assets/images/about/meisner.png";
import James from "../assets/images/about/james.png";
import Counter from "../components/Counter";

function aboutGlimpse() {
    return (
        <div>
            <Helmet>
                <title>A diverse VR and AR ecosystem | Enterprise solutions | The Glimpse Group</title>
                <meta
                name="description"
                content="The Glimpse Group operates multiple subsidiary companies developing VR and AR solutions for a variety of industries."
                />
            </Helmet>
            <HeaderSite />
            <div className="py-12 px-3 mt-16">
                <span className="scroll-offset" id="by-the-numbers"></span>
                <div className="container-text__width text-center w-full">
                    <div className='flex justify-center my-4 w-full'>
                    <h2 className=" w-full font-light text-gray-600 text-center text-3xl md:text-4xl py-4" style={{ fontFamily: 'Montserrat' }}>Glimpse is a Diversified VR and AR Platform Company</h2>
                    </div>
                    {/* <h1>Glimpse at a Glance</h1> */}
                    <div className='flex justify-center'>
                    <p className=" w-full md:w-2/3 text-lg font-light text-gray-600" style={{ fontFamily: 'Montserrat' }}>
                        Founded in 2016, Glimpse owns and operates 13 subsidiary companies, employing
                        over 200 software developers, 3D artists, and VR/AR professionals.
                    </p>
                    </div>
                    
                </div>
                <div className="countup-card-container flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                    <div className='rounded-xl card'>
                        <div className="corner-img absolute">
                            <img src={Time.src} alt="Years" className="rounded-tl-xl rounded-br-xl w-14 sm:w-16" />
                        </div>
                        <div className="card-content text-center font-bold h-32 flex flex-col justify-center">
                            <div className="counter-value text-5xl">
                                <Counter countNumber={6} duration={.6} />
                            </div>
                            <p className="sub-content">Years in Operation</p>
                        </div>
                    </div>
                    <div className='rounded-xl card'>
                        <div className="corner-img absolute">
                            <img src={Customers.src} alt="Customers" className="rounded-tl-xl rounded-br-xl w-14 sm:w-16" />
                        </div>
                        <div className="card-content text-center font-bold h-32 flex flex-col justify-center">
                            <div className="counter-value text-5xl">
                                <Counter countNumber={100} duration={1} />
                            </div>
                            <p className="sub-content">Customers Served</p>
                        </div>
                    </div>
                    <div className='rounded-xl card'>
                        <div className="corner-img absolute">
                            <img src={Companies.src} alt="Companies" className="rounded-tl-xl rounded-br-xl w-14 sm:w-16" />
                        </div>
                        <div className="card-content text-center font-bold h-32 flex flex-col justify-center">
                            <div className="counter-value text-5xl">
                                <Counter countNumber={13} duration={.8} />
                            </div>
                            <p className="sub-content">Subsidiary Companies</p>
                        </div>
                    </div>
                    <div className="card rounded-xl">
                        <div className="corner-img absolute">
                            <img src={Developers.src} alt="Developers" className="rounded-tl-xl rounded-br-xl w-14 sm:w-16" />
                        </div>
                        <div className="card-content text-center font-bold h-32 flex flex-col justify-center">
                            <div className="counter-value text-5xl">
                                <Counter countNumber={200} duration={1.5} />
                            </div>
                            <p className="sub-content">Developers & 3D Artists</p>
                        </div>
                    </div>
                </div>
                <span className="scroll-offset" id="glimpse-at-a-glance"></span>
                <div className="container-text__width text-center m__top">
                    <div className='flex justify-center'>
                    <p className='text-xl w-full md:w-2/3 p-2 font-light text-gray-600' style={{ fontFamily: 'Montserrat' }}>
                        Our unique model is specifically designed to meet the challenges of an
                        emerging industry, diversifying risk and fostering innovation,
                        collaboration, and the development of a robust VR/AR ecosystem.
                    </p>
                    </div>
                    
                    <br />
                </div>
                <div className="img__container flex justify-center">
                    <img src={GlimpsePyramid.src} alt="Glimpse Strategy" className='rounded-lg' />
                </div>
                <div className='flex justify-center my-2'>
                    <p className="container-text__width text-center text-xl w-full md:w-2/3 p-2 font-light text-gray-600" style={{ fontFamily: 'Montserrat' }}>
                    Glimpse aims to become the premiere VR/AR Software and Services company
                    with a global footprint.
                    </p>
                </div>
                
                <br />

                <span className="scroll-offset" id="leadership"></span>
                <div className="container-text__width text-center m__top flex flex-col items-center">
                    <h2 className="container-text__width text-center w-full md:w-2/3 p-2 font-light text-gray-600 text-4xl" style={{ fontFamily: 'Montserrat' }}>Our Leadership Team</h2>
                    <div className='flex justify-center'>
                    <p className='text-xl w-full md:w-2/3 p-2 font-light text-gray-600' style={{ fontFamily: 'Montserrat' }}>
                        Our Management Team leverages their extensive business, operations,
                        and technology experiences to drive value, mentor, and work closely
                        with our entrepreneurs.
                    </p>
                    </div>
                    
                </div>
                <h3 className="leader-title text-gray-600 font-light text-center text-3xl m-3" style={{ fontFamily: 'Montserrat' }}>Executives</h3>
                <div className="card-grid-responsive text-center gap-4 flex flex-wrap justify-center">
                    <div className="flip-card">
                        <div className="card__content">
                            <div
                            className="card__front"
                            style={{
                                backgroundImage: "url(" + Bentovim.src + ")",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                filter: "grayscale(100%)",
                            }}
                            ></div>
                            <div className="card__back">
                            <p className="card__body">
                                25 years of executive leadership experience
                                <br />
                                Led numerous tech start-ups and public companies Yale, MBA
                            </p>
                            <div className="leader-social">
                                <a href="https://www.linkedin.com/in/lyronbentovim" target="_blank">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                                {/* <a href="mailto:maydan@theglimpsegroup.com">
                                <i className="far fa-envelope"></i>
                                </a> */}
                            </div>
                            </div>
                        </div>
                        <h3 className="pb-clr">Lyron Bentovim</h3>
                        <h4>PRESIDENT & CEO</h4>
                    </div>
                    <div className="flip-card">
                        <div className="card__content">
                            <div
                            className="card__front"
                            style={{
                                backgroundImage: "url(" + Rothblum.src + ")",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                            }}
                            ></div>
                            <div className="card__back">
                            <p className="card__body">
                                20 years of finance and operations experience
                                <br />
                                Managing Director and COO of a tech focused private equity fund
                                <br />
                                Columbia, MBA
                            </p>
                            <div className="leader-social">
                                <a href="https://www.linkedin.com/in/maydan-rothblum-9954a/" target="_blank">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                                <a className="email" href="mailto:maydan@theglimpsegroup.com">
                                <i className="far fa-envelope"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        <h3 className="pb-clr">Maydan Rothblum</h3>
                        <h4>CFO & COO</h4>
                    </div>
                    <div className="flip-card">
                        <div className="card__content">
                            <div
                            className="card__front"
                            style={{
                                backgroundImage: "url(" + Smith.src + ")",
                                backgroundColor: "rgba(0, 0, 0, 0.13)",
                                filter: "grayscale(100%)",
                            }}
                            ></div>
                            <div className="card__back">
                            <p className="card__body">
                                VR/AR Expert
                                <br />
                                Founder and Organizer of NYVR Meetup
                                <br />
                                Penn State, BS Civil Eng.
                            </p>
                            <div className="leader-social">
                                <a href="https://www.linkedin.com/in/dj-smith-034b0ba/" target="_blank">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        <h3 className="pb-clr">DJ Smith</h3>
                        <h4>CCO</h4>
                    </div>
                    <div className="flip-card">
                        <div className="card__content">
                            <div
                            className="card__front"
                            style={{
                                backgroundImage: "url(" + Meisner.src + ")",
                                backgroundColor: "rgba(0, 0, 0, 0.13)",
                                filter: "grayscale(100%)",
                            }}
                            ></div>
                            <div className="card__back">
                            <p className="card__body">
                                20+ years of executive leadership experience in the tech
                                industry
                                <br />
                                Founder and General Manager of Sector 5 Digital
                            </p>
                            <div className="leader-social">
                                <a href="https://www.linkedin.com/in/jeffmeisner/" target="_blank">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        <h3 className="pb-clr">Jeff Meisner</h3>
                        <h4>CRO</h4>
                    </div>
                    <div className="flip-card">
                        <div className="card__content">
                            <div
                            className="card__front"
                            style={{
                                backgroundImage: "url(" + James.src + ")",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                            }}
                            ></div>
                            <div className="card__back">
                            <p className="card__body">
                                20+ years of marketing leadership experience with over a decade
                                focusing on immersive technology <br /> Founder of XRTech
                                Marketing <br /> Co-chair of VR AR Association{" "}
                            </p>
                            <div className="leader-social">
                                <a href="https://www.linkedin.com/in/jamescwatson/?originalSubdomain=uk" target="_blank">
                                <i className="fa fa-linkedin-square"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        <h3 className="pb-clr">James Watson</h3>
                        <h4>CMO</h4>
                    </div>
                </div>
                <br />
                <h3 className="leader-title text-gray-600 font-light text-center text-3xl m-3" style={{ fontFamily: 'Montserrat' }}>Board Members</h3>
                <div className="card-grid-responsive text-center gap-4 flex flex-wrap justify-center">
                    <div className="flip-card">
                        <div className="card__content">
                            <div
                            className="card__front"
                            style={{
                                backgroundImage: "url(" + Rowlands.src + ")",
                                backgroundColor: "rgba(0, 0, 0, 0.13)",
                                filter: "grayscale(100%)",
                            }}
                            ></div>
                            <div className="card__back">
                            <p className="card__body">
                                20+ years of experience leading multi-billion-dollar private &
                                public companies
                                <br />
                                CEO of Web.com
                                <br />
                                Director exp: Constant Contact, PegaSystems, & Automatic Data
                                Processing
                            </p>
                            <div className="leader-social">
                                <a href="https://www.linkedin.com/in/sharon-rowlands-29985692/" target="_blank">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        <h3 className="pb-clr">Sharon Rowlands</h3>
                        <h4>BOARD MEMBER</h4>
                    </div>
                    <div className="flip-card">
                        <div className="card__content">
                            <div
                            className="card__front"
                            style={{
                                backgroundImage: "url(" + Enslin.src + ")",
                                backgroundColor: "rgba(0, 0, 0, 0.13)",
                                filter: "grayscale(100%)",
                            }}
                            ></div>
                            <div className="card__back">
                            <p className="card__body">
                                20+ years of experience as Partner, Senior Executive, and
                                Portfolio Manager at global investment fund
                                <br />
                                Director of several early stage technology companies
                                <br />
                                NYU, MBA
                            </p>
                            <div className="leader-social">
                                <a href="https://www.linkedin.com/in/jeff-enslin-735b9481/" target="_blank">
                                <i className="fa fa-linkedin-square"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        <h3 className="pb-clr">Jeff Enslin</h3>
                        <h4>BOARD MEMBER</h4>
                    </div>
                    <div className="flip-card">
                        <div className="card__content">
                            <div
                            className="card__front"
                            style={{
                                backgroundImage: "url(" + Amen.src + ")",
                                backgroundColor: "rgba(0, 0, 0, 0.15)",
                                filter: "grayscale(100%)",
                            }}
                            ></div>
                            <div className="card__back">
                            <p className="card__body">
                                25+ years as senior operating & investment executive
                                <br />
                                Led global business units at multinational companies, Director
                                of several companies
                                <br />
                                Northwestern University, MS Engineering
                            </p>
                            <div className="leader-social">
                                <a href="https://www.linkedin.com/in/lemamen/" target='_blank'>
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        <h3 className="pb-clr">Lemuel Amen</h3>
                        <h4>BOARD MEMBER</h4>
                    </div>
                    <div className="flip-card">
                        <div className="card__content">
                            <div
                            className="card__front"
                            style={{
                                backgroundImage: "url(" + Ruckdaeschel.src + ")",
                                backgroundColor: "rgba(0, 0, 0, 0.13)",
                                filter: "grayscale(100%)",
                            }}
                            ></div>
                            <div className="card__back">
                            <p className="card__body">
                                20+ years of international experience in the financial,
                                investment and technology industries as a co-founder, partner
                                and senior executive
                                <br />
                                Formerly a long-term Director at Vuzix (Nadaq: VUZI)
                                <br />
                                Significant experience in technology company operations
                            </p>
                            <div className="leader-social">
                                <a href="https://www.linkedin.com/in/alexander-ruckdaeschel-21a8151a7/" target='_blank'>
                                <i className="fa fa-linkedin-square"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        <h3 className="pb-clr">Alexander Ruckdaeschel</h3>
                        <h4>BOARD MEMBER</h4>
                    </div>
                    <div className="flip-card">
                        <div className="card__content">
                            <div
                            className="card__front"
                            style={{
                                backgroundImage: "url(" + Charles.src + ")",
                                backgroundColor: "rgba(0, 0, 0, 0.13)",
                                filter: "grayscale(100%)",
                            }}
                            ></div>
                            <div className="card__back">
                            <p className="card__body">
                                25+ years executive leadership in tech, operations, finance, and
                                acquisitions; CFO of numerous SaaS, tech finance, and digital
                                media companies
                            </p>
                            <div className="leader-social">
                                <a href="https://www.linkedin.com/in/ian-charles-0271489/" target="_blank">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        <h3 className="pb-clr">Ian Charles</h3>
                        <h4>BOARD MEMBER</h4>
                    </div>
                </div>
            </div>
            <ContactForm />
            <FooterSite />
        </div>
    )
}

export default aboutGlimpse

