import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';
import './Navbar.css';

const Navbar = ({ cartCount, onCartClick }) => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/home" className="navbar__logo"> Tienda de libros Relatos de Papel Grupo 33 </Link>
                <div className="navbar__actions">
                    <button className="navbar__cart-btn" onClick={onCartClick}>
                        <span role="img" aria-label="cart">🛒</span>
                        <Badge count={cartCount} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
