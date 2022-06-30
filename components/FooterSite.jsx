import React from 'react';
import Logo from '../assets/images/glimpsewhite-alt.png'
import Link from "next/link";
// import { ExternalLink } from 'react-external-link';

function FooterSite () {
    return (
        <footer className='text-gray-100 p-4' style={{ backgroundColor: '#3c9cd4' }}>
        <div className="footer-container flex flex-col lg:flex-row justify-around items-center">
            <a className=" footer-logo w-36 lg:w-40" href="#">
                <img src={ Logo.src }  alt="The Glimpse Group" />
            </a>

            <div className="footer-contact">
                <div className="footer-grid grid sm:grid-cols-2 flex items-center h-full">
                    <div className="text-sm lg:text-base m-2">
                        <a href="mailto:info@glimpsegroup.io" className='flex items-center transform text-white duration-300 hover:ease hover:-translate-y-1'>
                            <i className="far fa-envelope"></i> 
                            <p>info@glimpsegroup.io</p>
                        </a>
                    </div>
                    <div className="info__container flex items-center text-sm lg:text-base m-2">
                        <i className="fas fa-map-marked-alt"></i>
                        <p className='m-2'>
                            15 West 38th Street, Floor 9<br />
                            New York, New York 10018
                        </p>
                    </div>
                    <div className="info__container whitespace-nowrap flex text-sm lg:text-base m-2">
                        <a href="tel:6092566622" className='flex items-center transform text-white duration-300 hover:ease hover:-translate-y-1'>
                            <i className="fas fa-phone mr-2"></i>
                            <p className='whitespace-nowrap'>General Inquiries: (609) 256-6622</p>
                        </a>
                    </div>
                    <div className="info__container whitespace-nowrap flex text-sm lg:text-base m-2">
                        <a href="tel:6094548030" className='flex items-center transform text-white duration-300 hover:ease hover:-translate-y-1'>
                            <i className="fas fa-phone mr-2"></i>
                            <p className='whitespace-nowrap'>Customer Support: (609) 454-8030</p>
                        </a>
                    </div>

                </div>
            </div>

            <div className="footer-social flex flex-col justify-center">
                <div className="social-menu flex justify-around">
                    <div className='w-9 h-9 bg-gray-200 flex items-center justify-center m-3 rounded-full transform duration-300 text-gray-600 hover:text-blue-500 hover:ease hover:-translate-y-1' style={{ boxShadow: '0 5px 4px rgb(15 15 15 / 50%)' }}>
                        <a href="https://www.facebook.com/glimpsegroup/" target="blank"><i className="fa-brands fa-facebook text-lg hover:text-blue-500" /></a>
                    </div>

                    <div className='w-9 h-9 bg-gray-200 flex items-center justify-center m-3 rounded-full transform duration-300 text-gray-600 hover:text-sky-400 hover:ease hover:-translate-y-1' style={{ boxShadow: '0 5px 4px rgb(15 15 15 / 50%)' }}>
                        <a href="https://twitter.com/GlimpseGroup" target="blank"><i className="fab fa-twitter text-lg hover:text-sky-400" /></a>
                    </div>

                    <div className='w-9 h-9 bg-gray-200 flex items-center justify-center m-3 rounded-full transform duration-300 text-gray-600 hover:text-blue-700 hover:ease hover:-translate-y-1' style={{ boxShadow: '0 5px 4px rgb(15 15 15 / 50%)' }}>
                        <a href="https://www.linkedin.com/company/the-glimpse-group" target="blank"><i className="fab fa-linkedin-in text-lg" /></a>
                    </div>
                    
                </div>
                <div className='info-links w-full'>
                    <div className='flex justify-around w-full'>
                        <Link href='/faq'>
                            <a className='transform duration-300 hover:ease text-white hover:-translate-y-1'>FAQ</a> 
                        </Link>
                        <Link href="/privacy">
                            <a className='transform duration-300 hover:ease text-white hover:-translate-y-1'>Privacy</a> 
                        </Link>
                    </div>
                    <span className='whitespace-nowrap text-xs'>© 2022 by The Glimpse Group.</span>
                </div>
            </div>
        </div>
        </footer>
        
    )
};

export default FooterSite;