
import React from 'react';
import './header.css'
import logo from './images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            {/* <h2>This is Header Section</h2> */}
           <div>
           <img src={logo} alt=""    />
           </div>
           


            <div className='t'>
            <a href="#">Home</a>
            <a href="#">Order Review</a>
            <a href="#">Manage</a>
            <a target='blanck' href='https://6547d69362a9b27478df6195--starlit-kringle-89c02d.netlify.app/'>Login</a>
            
            </div>
            
        </nav>
    );
};

export default Header;