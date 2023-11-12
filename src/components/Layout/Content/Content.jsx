import React from 'react'
import "./Content.scss"
import cn from 'classnames';

const Content = ({ children, align }) => {
    const alignClass = `site-content-align-${align}`
    return (
        <main className={cn("site-content", alignClass)}>
            {children}
        </main>
    )
}

export default Content
