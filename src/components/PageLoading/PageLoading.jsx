import React, { useState, useEffect } from 'react'
import "./PageLoading.scss"
import cn from 'classnames';
import Loader from '../Loader/Loader';

const PageLoading = ({ selfLoading, onlyLoad = false, defaultTimeout = 2500 }) => {

    const [loading, setLoading] = useState(selfLoading || true);

    useEffect(() => {
        if (selfLoading === undefined) {
            setTimeout(() => {
                setLoading(false);
            }, defaultTimeout);
        }
        else {
            setLoading(selfLoading)
        }
    }, [selfLoading]);

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
                {onlyLoad ? <Loader /> :
                    (<div className='loading-quote-container'>
                        <span className='loading-quote-container-mask'>
                            <h1>It's weird not to be <span className='loading-quote-highlight'>weird.</span></h1>
                            <h2>- John Lennon</h2>
                        </span>
                    </div>)}
            </div>
        </div>
    )
}

export default PageLoading
