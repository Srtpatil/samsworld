import React from 'react'
import "./PageLoading.scss"
import cn from 'classnames';

const PageLoading = ({ loading }) => {
    return (
        <div className={cn("loading", {
            "loading-visible": loading,
            "loading-in": loading,
            "loading-out": !loading
        })}>
            <div className={cn("loading-mask", {
                // "loading-mask-in": loading,
                // "loading-mask-out": !loading
            })}>
            </div>
            <div className={cn("loading-quote", {
                
            })}>
                <div className='loading-quote-container'>
                    <span className='loading-quote-container-mask'>
                        <h1>It's weird not to be <span className='loading-quote-highlight'>weird.</span></h1>
                        <h2>- John Lennon</h2>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PageLoading
