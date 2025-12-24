import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '' }) => {
    const buttonClass = `button button--${variant} ${className}`;

    return (
        <button type={type} className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
