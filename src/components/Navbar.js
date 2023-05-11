import React from 'react';
import '../App.css';
import logo from '../logo.svg';

function NavBar(props){
    return (

            <nav className="navMenu">
            <a><img src={logo} /></a>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Work</a>
            <a href="#">About</a>
            <div class="dot"></div>
            </nav>

    );
}

export default NavBar;