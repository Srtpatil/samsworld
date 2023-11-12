import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import Button from '../Button/Button'
import cn from 'classnames';
import ResumeButton from '../ResumeButton';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavItem = ({ title, path, onClick, showSidebar }) => {
    const removeSidebar = () => {
        if(showSidebar) {
            onClick();
        }
    }

    return (
        <li className='nav-link' onClick={removeSidebar}>
            <HashLink style={{ textDecoration: "none", color: "inherit" }} to={path}>{title}</HashLink>
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
        if (showSidebar) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [showSidebar])


    return (
        <>
            <Backdrop showSidebar={showSidebar} onClick={toggleSidebar} />
            <nav className='nav-container'>
                <div className='nav-logo'>
                    <Link to='/'><Logo /></Link>
                </div>

                <ul className={cn("nav-links-container", {
                    "nav-show-sidebar": showSidebar
                })}>
                    <NavItem title="About" path="/#about" onClick={toggleSidebar} showSidebar={showSidebar}/>
                    <NavItem title="Experience" path="/#experience" onClick={toggleSidebar} showSidebar={showSidebar}/>
                    <NavItem title="Projects" path="/#projects" onClick={toggleSidebar} showSidebar={showSidebar}/>
                    <NavItem title="Contact" path="/#contact" onClick={toggleSidebar} showSidebar={showSidebar}/>
                    <NavItem title="Writings" path="/writings" onClick={toggleSidebar} showSidebar={showSidebar}/>
                    <ResumeButton />
                </ul>

                <Burger onClick={toggleSidebar} showSidebar={showSidebar} />

            </nav>
        </>
    )
}

export default Navbar
