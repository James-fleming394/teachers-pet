import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';

const MathHomework = () => {

    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Math Homework</h1>
                    <p className="testing-p">
                        Homework teaches students how to set priorities and deisplay their independent understanding. 
                        <br></br>
                        Homework helps teachers determine how well the lessons and activites are being understood in the classroom so they may play appropriately moving forward.
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" 
                    src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2022/04/math-education-illustration.jpg" 
                    alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">Math Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/3rd-Grade-Math-Review-Packet-Summer-Math-Test-Prep-Homework-Assessments-2546436-1665754121/original-2546436-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Summer Homework and Review</h4>
                        <p className="author">Ms. Munchie</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/First-Grade-Morning-Work-2499745-1653997790/original-2499745-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Second Grade Summer Packet/Homework</h4>
                        <p className="author">Ms. Fasilak</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/5th-Common-Core-Math-Homework-Printables-All-Standards-1662132706/original-269286-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">5th Grade Homework Printables</h4>
                        <p className="author">Ms. James</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Summer-Packet-1882126-1653997843/original-1882126-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Summer Packet/Homework First Grade</h4>
                        <p className="author">Ms. Gorman</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/2nd-Grade-Math-Spiral-Review-Back-to-School-Math-Morning-Work-Homework-2006757-1660214351/original-2006757-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Math Homework and Morning Review</h4>
                        <p className="author">Mr. Gorchus</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/MultiplicationDivision-Strategies-Bundle-Anchor-ChartWorksheetsQuick-Checks-1499708-1667512550/original-1499708-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Multiplications & Division Homework</h4>
                        <p className="author">Ms. Abinakad</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Radial-Symmetry-Paper-Relief-Project-Art-and-Math-Fractions-and-Symmetry-1436727-1656583784/original-1436727-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Radial Paper Relief Structures Homework</h4>
                        <p className="author">Mr. Crowns</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Multiplication-Project-Real-World-Math-with-Arrays-Equal-Groups-Fact-Families-4306628-1658304553/original-4306628-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Run a Pet Shelter Homework Activity</h4>
                        <p className="author">Ms. Hall</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Early-Finishers-Math-Early-Finishers-Activities-Math-Morning-Work-1st-2nd--3080290-1653997857/original-3080290-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Summer Packet/Homework 3rd Grade Math</h4>
                        <p className="author">Ms. Brennan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Project-Based-Learning-for-4th-Grade-Math-Open-a-Donut-Shop-3055056-1677804932/original-3055056-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Open A Donut Shop: Take Home</h4>
                        <p className="author">Ms. Kuntz</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/3rd-Grade-Math-Spiral-Review-Morning-Work-Homework-Bundle-323588-1657965837/original-323588-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">3rd Grade Math Review and Homework</h4>
                        <p className="author">Ms. Sandler</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/5th-Grade-Math-Spiral-Review-Quizzes-5th-Grade-Math-Homework-1st-QUARTER-786655-1679574917/original-786655-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Math Spiral Review and Homework</h4>
                        <p className="author">Ms. Crewert</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default MathHomework;