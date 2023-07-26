import React from 'react';
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>Developed with <FontAwesomeIcon icon={faHeart} /> by Samarth</p>
        </footer>
    )
}

export default Footer;
