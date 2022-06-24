import React from "react";
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';

function Navbar(){
    return(
        <div id="main">
            <nav>
                <Link to="main" className="logo">
                    <img src={logo} alt = "logo"/> 
                </Link>
                <input className="menu-btn" type='checkbox' id='menu-btn'/>
                <label className = 'menu-icon' for = 'menu-btn'  >
                    <span className = 'nav -icon'></span>
                </label>
                <ul className="menu">
                    <li><Link to='main' className="active" smooth={true} duration={2000}>Home</Link></li>
                    <li><Link to='features' smooth={true} duration={1000} >Features</Link></li>
                    <li><Link to='subscribe' smooth={true} duration={1000} >Subscribe</Link></li>
                </ul>
                <Link to = '#' className="hey">To App</Link>

            </nav>
        </div>
    )
}

export default Navbar;