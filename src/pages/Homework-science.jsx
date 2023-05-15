import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';
import DownloadButton from "../components/Download";

const ScienceHomework = () => {
    
    return(
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Science Homework</h1>
                    <p className="testing-p">
                        Homework teaches students how to set priorities and deisplay their independent understanding.
                        <br></br>
                        Homework helps teachers determine how well the lessons and activites are being understood in the classroom so they may play appropriately moving forward.
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
                <h1 className="assess-all">Science Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Ecology-Worksheets-Population-Growth-Homework-034597500-1384648950-1639934082/original-980261-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Ecology Population Growth Homework</h4>
                        <p className="author">Ms. Igor</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Human-Body-Systems-Flip-Book-1210733-1586185574/original-1210733-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Human Body Flip Book Homework</h4>
                        <p className="author">Ms. Vivaldi</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Earth-Day-Agamographs-Unique-Earth-Day-Activity-or-Earth-Day-Craft--1810664-1682101152/original-1810664-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Earth Day Agamograph Homework</h4>
                        <p className="author">Ms. Chialini</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/STEM-Family-Projects-for-Elementary-Students-1665394261/original-1807502-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">STEM At Home Take Home Bundle</h4>
                        <p className="author">Ms. Ruth</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/STEM-Activities-for-the-Entire-Year-includes-Easter-STEM-Activities-3042818-1680978579/original-3042818-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">STEM Entire Year Take Home Bundle</h4>
                        <p className="author">Mr. Daboll</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Scientific-Method-Homework-Study-Guide-Science-Skills-Worksheet-1682520443/original-144083-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Scientific Method Homework Project</h4>
                        <p className="author">Ms. Parker</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Scaffolded-Chemistry-Whole-Year-Homework-Bundle-Distance-Learning-3068112-1661185639/original-3068112-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Chemistry Year Long Homework Bundle</h4>
                        <p className="author">Mr. Riccardo</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Science-Warm-Up-and-Homework-Bundle-2513488-1657139077/original-2513488-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Warm-Up Science Homework</h4>
                        <p className="author">Ms. Brunson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Science-EOG-Review-Homework-3793648-1661426072/original-3793648-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">EOG Review Homework</h4>
                        <p className="author">Ms. Magilly</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Rocks-Minerals-Lapbook-Interactive-Kit-1167610-1642063574/original-1167610-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Rocks & Minerals Lapbook Homework</h4>
                        <p className="author">Ms. Davidson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Periodic-Table-Trends-Chemistry-Homework-Pages-3298995-1657525895/original-3298995-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Periodic Table Trends Homework</h4>
                        <p className="author">Ms. Dumbledore</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Matter-Bundle-Labs-Activities-Handouts-Notes-Homework-WORKBOOKS--1320878-1658842884/original-1320878-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Matter Activites and Homework Bundle</h4>
                        <p className="author">Ms. Settler</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default ScienceHomework;