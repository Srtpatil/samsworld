import React, { useEffect, useState } from 'react'
import "./Cat.css"
import { ReactComponent as CatSVG } from "../../assets/cat.svg"

function Cat() {

    // useEffect(() => {
    //     const handleWindowMouseMove = e => {
    //         const leftEye = document.querySelector('#Left-eye-pupil');
    //         const rightEye = document.querySelector('#Right-eye-pupil');
    //         const x = e.offsetX;
    //         const y = e.offsetY;
    //         const windowHeight = window.innerHeight;
    //         const windowWidth = window.innerWidth;
    //         const max = 3;

    //         // Eye movement
    //         // [leftEye, rightEye].forEach(eye => {
    //         //     if (!eye) {
    //         //         return
    //         //     }
    //         //     eye.style.transform = `translate(
    //         // 	${max / (windowWidth / x)}%,
    //         // 	${max / (windowHeight / y)}%
    //         // )`;
    //         // });
    //         // setCoords({
    //         //     x,
    //         //     y
    //         // });
    //     };
    //     window.addEventListener('mousemove', handleWindowMouseMove);

    //     return () => {
    //         window.removeEventListener(
    //             'mousemove',
    //             handleWindowMouseMove,
    //         );
    //     };
    // }, []);
    return (
        <div className='cat-container'>
            <CatSVG />
        </div>
    )
}

export default Cat
