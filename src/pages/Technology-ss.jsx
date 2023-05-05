import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';

const SSTechnology = () => {

    return(
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Social Studies Technologies</h1>
                    <p className="testing-p">
                            Technology is a useful tool for educators and students to continue to challenge their own limits. 
                        <br></br>
                            Technology leads to increased student engagement, collaboration, inclusion and creativity in the classroom and in student work.
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" 
                    src="https://media.istockphoto.com/id/1178800730/vector/children-having-fun-with-earth.jpg?s=612x612&w=0&k=20&c=jx-BSJg312kHJ3J-BSzQXM2oW7ZAKjU4Xr0aYNgFDX8=" 
                    alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">Social Studies Technologies</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Patriotic-Agamographs-Unique-Veterans-Day-Activity-Remembrance-Day-Canada--1832327-1674216444/original-1832327-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Patriotic Agamographs Digital Project</h4>
                        <p className="author">Ms. Krider</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Social-Studies-Interactive-Notebook-Activities-1354379-1675087246/original-1354379-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Social Studies Digital Interactive Notebook</h4>
                        <p className="author">Ms. Hero</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Me-on-the-Map-Circle-Book-1613079392/original-464938-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Me on the Map Social Studies Digital Project</h4>
                        <p className="author">Ms. Spagretti</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Geography-Lapbook-Interactive-Kit-031719800-1376552895-1625737314/original-828960-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Geography Lapbook Digital Project</h4>
                        <p className="author">Ms. Jeter</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.2</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Colony-Unit-filled-with-Informational-Text-Quiz-Test-Project-1668958073/original-510660-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Colonial Social Studies Digital Resources</h4>
                        <p className="author">Mr. Schoen</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Biography-Project-Grades-2-5-1620567-1651303117/original-1620567-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Biography Social Studies Digital Project</h4>
                        <p className="author">Ms. King</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/The-World-A-Globe-Craftivity-for-Social-Studies-1450798-1672650961/original-1450798-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">3D World Map Social Studies Digital Project</h4>
                        <p className="author">Mr. Settler</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Geography-Balloon-Globes-1555615245/original-1511648-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Balloon Globes Digital Resources</h4>
                        <p className="author">Ms. Hart</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/My-Community-Scrapbook-1625056167/original-318795-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">My Community Digital Project SS</h4>
                        <p className="author">Ms. Brunson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Island-Treasure-Map-Project-and-Assessment-1297611-1679067122/original-1297611-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Digital Project: SS Treasure Map</h4>
                        <p className="author">Ms. Smith</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Black-History-Month-Art-activity-grid-projects-BUNDLE-1078213-1682344837/original-1078213-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Black History Month Digital Project</h4>
                        <p className="author">Ms. Ruth</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Constitution-Lapbook-002439800-1378576043-1664825699/original-863814-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Constitution Lapbook Digital Activity</h4>
                        <p className="author">Ms. DeMinno</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default SSTechnology;