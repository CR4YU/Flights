import React from 'react';
import './Header.css';
import logo from './plane.svg';
import title from './title.svg';


function Header() {
    return (
        <header className="Header">
            <div className="Header-title">
                <img src={logo} className="Logo" alt="logo" />
                <img src={title} className="Title" alt="title" />
            </div>
            <div className="Header-functions">
                <a href="/register">Register</a>
                <div className="Header-function-separator"/>
                <a href="/login">Login</a>
            </div>
        </header>
    );
}

export default Header;
