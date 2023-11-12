import React from 'react'
import "./Page.scss"

const Page = ({ children }) => {
    return (
        <div className='site-container'>
            {children}
        </div>
    )
}

export default Page
