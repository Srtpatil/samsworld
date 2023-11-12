import React from 'react'
import cn from 'classnames';
import "./SectionHeader.scss"

const SectionHeader = ({ title, align }) => {

    const classes = cn('section-header-container', {
        'flex-row-reverse': align == 'right',
        'bottom-align': align == "bottom"
    })

    return (
        <div className={classes}>
            {
                align == "center" ? <div></div> : null
            }
            <h2>{title}<span>.</span></h2>
            <div></div>
        </div>
    )
}

export default SectionHeader;
