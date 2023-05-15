import React from "react";
import './Footer.css';
import logo from '../assets/logo-small.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import { useState } from "react";

const Footer = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Thank you for joining our community!');
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="footer">
            <div className="footer-join">
                <h1 className="footer-h1">Join our global community <br></br>of passionate educators today.</h1>
                <form className="email-form">
                    <div className="form-group">
                        <input className="footer-input" 
                        type="email" 
                        placeholder="Enter Your Email Here" 
                        value={email}
                        onChange={handleEmailChange} />
                        <button className="footer-btn" onClick={handleSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="menu">
                            <img className="footer-img" src={logo} alt="footer"/>
                            <ul className="footer-menu">
                                <li className="footer-li">About Us</li>
                                <li className="footer-li">Who We Are</li>
                                <li className="footer-li">Press</li>
                                <li className="footer-li">Support</li>
                                <li className="footer-li">FAQs</li>
                                <li className="footer-li">Terms of Service</li>
                            </ul>
                        </div>
                        <div className="menu-social">
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/james--fleming/"><img className="icon-image" src={linkedin} alt="footer icon"/></a>
                                <a href="https://twitter.com/jflem394"><img className="icon-image" src={twitter} alt="footer icon"/></a>
                                <a href="https://github.com/James-fleming394"><img className="icon-image" src={github} alt="footer icon"/></a>
                                <a href="https://www.instagram.com/jimmy__fleming/"><img className="icon-image" src={instagram} alt="footer icon"/></a>
                            </div>
                        </div>
                        <div className="footer-last">
                            <p className="footer-p-btm">Contact me Here:</p>
                            <p className="footer-p-btm"><a href="mailto:James.Fleming394@gmail.com">James.Fleming394@gmail.com</a></p>
                            <p className="footer-p-btm">Copyright (C) 2023 James Fleming - All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;