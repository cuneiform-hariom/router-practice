import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location = useLocation()
    const currentLink = ""
    const crumb = location.pathname.split('/')
        // .filter(crumb => crumb !== '')
        // .map(crumb => {
        //     currentLink = + `/${crumb}`
        //     return (
        //         <div className="crumb" key={crumb}>
        //             <Link to={currentLink}>{crumb}</Link>
        //         </div>
        //     )
        // })

    return (
        <div className='breadcrumbs'>
            {crumb}

        </div>
    )
}

export default Breadcrumb
