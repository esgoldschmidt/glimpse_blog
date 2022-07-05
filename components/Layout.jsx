import React from 'react'
import { HeaderSite} from '.'
import ConsentPopUp from './ConsentPopUp.js'


const Layout = ( { children } ) => {
    return (
        <div>
            { children }
            <ConsentPopUp />
        </div>
    )
}

export default Layout
