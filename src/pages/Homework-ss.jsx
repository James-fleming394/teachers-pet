import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';

const SSHomework = () => {
    
    return(
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Social Studies Homework</h1>
                    <p className="testing-p">
                        Homework teaches students how to set priorities and deisplay their independent understanding.
                        <br></br>
                        Homework helps teachers determine how well the lessons and activites are being understood in the classroom so they may play appropriately moving forward.
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
                <h1 className="assess-all">Social Studies Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Patriotic-Agamographs-Unique-Veterans-Day-Activity-Remembrance-Day-Canada--1832327-1674216444/original-1832327-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Patriotic Agamographs Homework</h4>
                        <p className="author">Ms. Fox</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/My-Vacation-Journal-student-homework-while-away-531867-1661637187/original-531867-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Social Studies Vacation Homework</h4>
                        <p className="author">Ms. Hero</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Me-on-the-Map-Circle-Book-1613079392/original-464938-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Me on the Map Social Studies Homework</h4>
                        <p className="author">Ms. Linus</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Homework-for-Families-Includes-English-Spanish-Versions--2047665-1668934560/original-2047665-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Family Homework: Take Home Work</h4>
                        <p className="author">Ms. Jeter</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.4</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Forms-of-Government-1209254-1631047283/original-1209254-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Social Studies Forms of Government Homework</h4>
                        <p className="author">Mr. Jones</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Social-Studies-Bundle-Daily-Reviews-for-Morning-Work-Homework-or-Class-Work-2510570-1500875516/original-2510570-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Social Studies Homework Bundle</h4>
                        <p className="author">Ms. Parks</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/The-World-A-Globe-Craftivity-for-Social-Studies-1450798-1672650961/original-1450798-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">3D World Map Social Studies Take Home</h4>
                        <p className="author">Mr. Settler</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Geography-Balloon-Globes-1555615245/original-1511648-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Balloon Globes Take Home Work</h4>
                        <p className="author">Ms. Hart</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/AP-Psychology-Unit-Project-Packets-Recommended-Homework-Assignments--8013007-1650848566/original-8013007-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">AP Unit Homework</h4>
                        <p className="author">Ms. Brunson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Island-Treasure-Map-Project-and-Assessment-1297611-1679067122/original-1297611-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Homework: SS Treasure Map</h4>
                        <p className="author">Ms. Smith</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Year-6-Homework-Flip-Books-For-an-Entire-Year-Australian-Curriculum-aligned-4469668-1553554582/original-4469668-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Austrilain Curriculum Homework</h4>
                        <p className="author">Ms. Wiley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Civil-War-Reconstruction-Reading-Comprehension-Packet-homework-review--3914828-1600365536/original-3914828-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Civil War & Reconstruction Homework Passages</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default SSHomework;