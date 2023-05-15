import React from "react";
import RatingLogo from '../assets/star.png';
import './Tests.css';
import DownloadButton from "../components/Download";

const ScienceLesson = () => {
    
    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Science Lessons</h1>
                    <p className="testing-p">
                        Lesson plans help students and teachers understand the goals of the instructional module.  
                        <br></br>
                        Lesson planning gives teachers the chance to translate cirriculum into exciting and meaningful activites and instruction.
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
                <h1 className="assess-all">Science Lessons</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Science-of-Reading-Guided-Curriculum-Phonics-Decodable-Readers-Lesson-Plans-6896126-1682365407/original-6896126-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Science Guided Curriculum</h4>
                        <p className="author">Ms. Trochek</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/KinderScience-Kindergarten-Science-Curriculum-Homeschool-Compatible--2739645-1676993479/original-2739645-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Kindergarten Science Curriculum</h4>
                        <p className="author">Mr. Covert</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/The-Great-Pumpkin-Investigation-Student-Journal-1657549774/original-163736-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Pumpking Unit</h4>
                        <p className="author">Ms. Boo</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Solar-System-Unit-for-Kindergarten-and-First-Grade-1198688-1657525886/original-1198688-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Space: 5 Day Unit Lessons</h4>
                        <p className="author">Ms. Garcia</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Weather-and-Climate-Interactive-Notebook-BUNDLE-by-Science-Doodles-1550560-1657525533/original-1550560-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Weather & Climate Science Lessons</h4>
                        <p className="author">Mr. Bautista</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/All-About-Weather-1217960-1680607368/original-1217960-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Science Unit: Weather</h4>
                        <p className="author">Ms. Byran</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Force-and-Motion-a-mini-unit-full-of-science-experiments-and-fun-1129147-1657523560/original-1129147-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Force & Motion: Science Unit</h4>
                        <p className="author">Mr. Garent</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Bat-Science-Interactive-Activities-1482271-1681123465/original-1482271-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Bat Science Lessons</h4>
                        <p className="author">Ms. Grady</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>5.0</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Matter-Solids-Liquids-and-Gases-Unit-Meets-Common-Core-Standards-1657519727/original-199436-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Matter and Energy: Science Lessons</h4>
                        <p className="author">Ms. Manca</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Continents-and-Oceans-1284389-1661340221/original-1284389-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Contients & Oceans Science Lessons</h4>
                        <p className="author">Ms. Garcia</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Energy-Unit-Flap-Books-Experiments-Visual-Aids-More-1657550614/original-416760-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">All About Energy: Science Lessons</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Living-and-Nonliving-Mini-Unit-1657518534/original-112201-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Living and Non-Living: Mini Unit</h4>
                        <p className="author">Ms. Rockower</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.4</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default ScienceLesson;