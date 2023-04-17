import React from "react";
import './About.css';
import Email from '../assets/email.png';
import Twitter from '../assets/twitter.png';
import Github from '../assets/github.png';
import Linkedin from '../assets/linkedin.png';

const About = () => {

    return (
        <div className="about">
            <div className="about-info">
                <h1 className="h1-info">About Us</h1>
                <p className="p-about">
                We are a team of dedicated professionals commited to providing high quality educational products and services.  
                Our company was created by former teachers and educators who are passionate about helping teachers and students reach their full potential.
                </p>
                <p className="p-about">
                Our mission is to provide innovative and effective teaching solutions that empower students to succeed. We believe that education 
                is the key to unlocking a brighter future, and we are committed to making it accessible to all.
                </p>
                <p className="p-about">
                If you have any questions or feedback, please don't hesitate to get in touch with us:
                </p>
            </div>
            <div className="links-about">
                <a className="a-links" href="mailto:james.fleming394@gmail.com"><img src={Email} alt="email"/></a>
                <a className="a-links" href="https://github.com/James-fleming394"><img src={Github} alt="github"/></a>
                <a className="a-links" href="https://www.linkedin.com/in/james--fleming/"><img src={Linkedin} alt="linkedin"/></a>
                <a className="a-links" href="https://twitter.com/jflem394"><img src={Twitter} alt="twitter"/></a>
            </div>
        </div>
    )
    
}

export default About;