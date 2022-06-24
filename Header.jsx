import React from "react";
import Navbar from "./Navbar";

function Header(){
    return(
        <div id="main">
            <Navbar/>
            <div className="name">
                <h1>Saim's Flex On <span>React</span></h1>
                <p className="details"> This is a newer version of Saim's Flex Website and yes, this one flexes too!</p>
                <div className='header-btns'>
                <a href="#" className="cv-btn">Hire Me</a>
                <a href="#" className="cv-btn1">Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default Header;