import React from 'react'
import { HeaderSite } from '.'
import ConsentPopUp from './ConsentPopUp.js'
import NewsLetter from './NewsLetter.js'
import ToastItem from './ToastItem'


const Layout = ( { children } ) => {
    return (
        <div>
            <NewsLetter />
            { children }
            <ConsentPopUp />
        </div>
    )
}

export default Layout
