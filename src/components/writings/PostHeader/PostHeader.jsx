import React from 'react'
import "./PostHeader.scss"

const PostHeader = ({title, secondary}) => {
    return (
        <div className='post-container-header'>
            <h1>{title}<span>.</span></h1>
            <div>
                <p>{secondary}</p>
            </div>
            <div style={{ backgroundColor: "var(--lightest-navy)", height: "2px", width: "100%", marginTop: "2rem" }}></div>
        </div>
    )
}

export default PostHeader
