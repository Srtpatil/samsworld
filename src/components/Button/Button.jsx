import React from 'react';
import "./Button.scss";

const Button = ({ children, variant, onClick}) => {
    let buttonClass = "button-outlined";
    if (variant) {
        buttonClass = `button-${variant}`;
    }

    return (
        <button className={buttonClass} onClick={onClick}>{children}</button>
    )
}

export default Button;
