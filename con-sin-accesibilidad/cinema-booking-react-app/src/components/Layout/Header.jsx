import React from 'react';
import './Layout.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Cinema Booking App</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#movies">Movies</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;