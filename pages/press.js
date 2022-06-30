import React, { useState, useEffect } from 'react'
import HeaderSite from '../components/HeaderSite';
import FooterSite from '../components/FooterSite';
import ContactForm from '../components/ContactForm'
import { Helmet } from "react-helmet";
import { useMediaQuery, Box } from "@mui/material";
import glimpseCompanies from "../components/data/allcompanies";
import VideoJS from "../components/VideoJS";
import Clients from "../components/Clients";
import Solutions from "../components/Solutions";
import Companies from "../components/Companies";
import Loader from "../components/Loader"
import PDF from "../components/pdfViewer"
import { useRouter } from 'next/router'
import allreleases from '../components/data/Releases/allreleases'

function press() {
    const [companyItems] = useState(glimpseCompanies);
    const [isLoading, setIsLoading]=useState(true)
    const [pdfRef, setPdfRef] = useState()
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const b830 = useMediaQuery('(max-width:830px)')
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            // Code using query
            allreleases.filter(item => item.slug === router.query.release).map((item, index) => (
                setPdfRef(item.pdfPage),
                setTitle(item.title),
                setDate(item.date)

            ))
            setIsLoading(false)
        }
        }, [router.isReady]);

    if (isLoading) return <div className='w-screen h-screen flex justify-center items-center'><Loader /></div> 
    return (
        <div className='HomePage flex flex-col justify-center'>
            <Helmet>
                <title>{title}</title>
                <meta
                name="description"
                content="The Glimpse Group is a Virtual Reality ( VR ) & Augmented Reality ( AR ) Platform Company comprised of multiple subsidiary companies offering VR and AR Solutions for enterprise"
                />
            </Helmet>
            <HeaderSite />
            <div className='py-8 px-3 mt-24 flex flex-col items-center'>
                <h1 className='text-center text-2xl m-4 w-11/12 lg:w-3/4'>{title}</h1>
                <h3 className='text-center m-2'>{ date }</h3>
                <div className='home-content flex justify-center'>
                    <PDF pdf={ pdfRef } />
                </div>
            </div>
            <div className='m-8'>
                <ContactForm />
            </div>
            <FooterSite />
        </div>
    )
}

export default press


