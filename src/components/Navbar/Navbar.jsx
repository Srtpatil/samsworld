import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import Button from '../Button/Button'
import cn from 'classnames';
import ResumeButton from '../ResumeButton';

const NavItem = ({ title, path }) => {
    return (
        <li className='nav-link'>
            <a style={{ textDecoration: "none", color: "inherit" }} href={path}>{title}</a>
        </li>
    )
}

const Burger = ({ showSidebar, onClick }) => {
    return (
        <div className={cn("burger", {
            "sidebar-open": showSidebar
        })} onClick={onClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    );
}

const Backdrop = ({ showSidebar, onClick }) => {
    if (!showSidebar) {
        return null;
    }

    return (
        <div className='blur' onClick={onClick}>
        </div>
    )
}


const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(value => !value);
    }
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden")
    }, [showSidebar])


    return (
        <>
            <Backdrop showSidebar={showSidebar} onClick={toggleSidebar} />
            <nav className='nav-container'>
                <div className='nav-logo'>
                    <a href='#'><Logo /></a>
                </div>

                <ul className={cn("nav-links-container", {
                    "nav-show-sidebar": showSidebar
                })}>
                    <NavItem title="About" path="#about" />
                    <NavItem title="Experience" path="#experience" />
                    <NavItem title="Work" path="#projects" />
                    <NavItem title="Contact" path="#contact" />
                    <ResumeButton />
                </ul>

                <Burger onClick={toggleSidebar} showSidebar={showSidebar} />

            </nav>
        </>
    )
}

export default Navbar
