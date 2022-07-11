import React from 'react'
import { HeaderSite } from '.'
import ConsentPopUp from './ConsentPopUp.js'
import NewsLetter from './NewsLetter.js'


const Layout = ( { children } ) => {
    return (
        <div>
            { children }
            <NewsLetter />
            <ConsentPopUp />
        </div>
    )
}

export default Layout
