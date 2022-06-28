import React from 'react'
import { HeaderSite } from './'

const LayoutSite = ( {children} ) => {
    return (
        <div>
            <HeaderSite />
            { children }
        </div>
    )
}

export default LayoutSite
