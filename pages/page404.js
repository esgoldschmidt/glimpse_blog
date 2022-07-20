import React from 'react'
import HeaderSite from '../components/HeaderSite';
import { Helmet } from "react-helmet";

function page404() {
    return (
        <div>
            <Helmet>
                <title>404 Page Not Found | The Glimpse Group | VR and AR Enterprise Solutions</title>
                <meta
                name="description"
                content="This page is unavailable to view"
                />
            </Helmet>
            <HeaderSite />
            404!
        </div>
    )
}

export default page404 
