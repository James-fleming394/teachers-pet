import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';

const ScienceProject = () => {

    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Science Projects</h1>
                    <p className="testing-p">
                        Projects give students the opportunity to dive deeper and challenge themselves.  
                        <br></br>
                        Projects allows for deeper learning, meaningful connections and for students to display their knowledge through hands-on and creative opportunites
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" 
                    src="https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg?w=2000" 
                    alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">Science Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Water-Bottle-Flip-STEM-Challenge-2813151-1665146327/original-2813151-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">STEM Challenge: Bottle Flip</h4>
                        <p className="author">Ms. Kane</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Human-Body-Systems-Flip-Book-1210733-1586185574/original-1210733-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Human Body Flip Book Project</h4>
                        <p className="author">Ms. Vivaldi</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Earth-Day-Agamographs-Unique-Earth-Day-Activity-or-Earth-Day-Craft--1810664-1682101152/original-1810664-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Earth Day Agamograph Project</h4>
                        <p className="author">Ms. Chialini</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/STEM-Family-Projects-for-Elementary-Students-1665394261/original-1807502-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">STEM At Home Projects Bundle</h4>
                        <p className="author">Ms. Winfield</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/STEM-Activities-for-the-Entire-Year-includes-Easter-STEM-Activities-3042818-1680978579/original-3042818-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">STEM Entire Year Project Bundle</h4>
                        <p className="author">Mr. Daboll</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Fidget-Spinner-Activities-and-STEM-Challenge-3097680-1663856237/original-3097680-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Fidget Spinner STEM Project</h4>
                        <p className="author">Ms. Beyonder</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Genius-Hour-Pack-for-Elementary-2739053-1658854875/original-2739053-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Genius Hour Science Projects</h4>
                        <p className="author">Mr. Laguerre</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/STEM-Activity-Index-Card-Tower-Challenge-1217602-1682365753/original-1217602-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Index Card Towers: STEM Challenge</h4>
                        <p className="author">Ms. Rowan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Spider-Math-and-Literacy-Activities-1682338146/original-100854-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Spiders: Nonfiction Science Project</h4>
                        <p className="author">Ms. Mitchell</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.4</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Rocks-Minerals-Lapbook-Interactive-Kit-1167610-1642063574/original-1167610-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Rocks & Minerals Lapbook Project</h4>
                        <p className="author">Ms. David</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Bat-Facts-Fold-and-Learn-1656583695/original-336735-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Bats: Fold & Learn Project</h4>
                        <p className="author">Ms. Potter</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Discovery-in-the-Rainforest-A-Project-Based-Learning-Activity-1659290-1588933772/original-1659290-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Science Project: PBL Rainforest</h4>
                        <p className="author">Ms. Okun</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default ScienceProject;