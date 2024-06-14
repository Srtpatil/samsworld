import React, { useEffect, useState } from 'react'
import "./Cat.css"
import { ReactComponent as CatSVG } from "../../assets/cat.svg"

function Cat() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleWindowMouseMove = e => {
            const leftEye = document.querySelector('#Left-eye-pupil');
            const rightEye = document.querySelector('#Right-eye-pupil');
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            const max = 3.5;
            const x = e.clientX
            const y = e.clientY
            setCoords({
                x,
                y
            });
            // Eye movement
            [leftEye, rightEye].forEach(eye => {
                if (!eye) {
                    return
                }
                eye.style.transform = `translate(
                    ${max / (windowWidth / x)}%,
                    ${max / (windowHeight / y)}%
                )`;
            });

        };

        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
            );
        };
    }, []);
    return (
        <div className='cat-container'>
            <CatSVG />
        </div>
    )
}

export default Cat
