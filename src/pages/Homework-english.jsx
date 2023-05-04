import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';

const EnglishHomework = () => {

    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">English Homework</h1>
                    <p className="testing-p">
                        Homework teaches students how to set priorities and deisplay their independent understanding.   
                        <br></br>
                        Homework helps teachers determine how well the lessons and activites are being understood in the classroom so they may play appropriately moving forward.
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" 
                    src="https://psenglish.co.uk/wp-content/uploads/2022/08/clases-de-ingles_0-720x400.jpg" 
                    alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">English Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Bundle-Kindergarten-Morning-Work-or-Homework-for-the-Entire-Year-Common-Core-1259664-1668079724/original-1259664-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Morning Work/Homework Bundle</h4>
                        <p className="author">Ms. Cherry</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/5th-Grade-Language-Spiral-Review-Morning-Work-Daily-Grammar-Review-Homework-1726724-1679161263/original-1726724-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Grammar Review Homework/Activites</h4>
                        <p className="author">Ms. Pisanno</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Language-Bell-Work-for-4th-Grade-013212100-1369878907-1683204995/original-712155-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Language Review Spiral Homework</h4>
                        <p className="author">Ms. Kay</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Rhetorical-Mode-Project-for-AP-English-Language-Composition-1682341073/original-448520-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Rhetorical Mode Take Home Work</h4>
                        <p className="author">Ms. Jacaruso</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Review-Project-for-English-Language-Arts-Literary-Quote-Book-6860744-1683105129/original-6860744-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Literary Quote Book ELA Homework</h4>
                        <p className="author">Mr. Bauery</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Reading-Rocks-Technology-Projects-for-High-School-English-Middle-School-ELA-1013495-1678736366/original-1013495-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Creating Music Videos: Take Home Project</h4>
                        <p className="author">Ms. Allkind</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Year-Long-Kindergarten-Homework-Bundle-English-Only-1277750-1657755368/original-1277750-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Kindergarten Homework Year Long Bundle</h4>
                        <p className="author">Mr. Custard</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/My-Family-History-Project-ENGLISH-Edition-5930795-1597774083/original-5930795-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">My Family History: ELA Homework</h4>
                        <p className="author">Ms. Helen</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/2nd-Grade-Math-ELA-Spiral-Review-Homework-Fast-Finishers-Exit-Tickets-263873-1682442204/original-263873-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Sprial Review Homework 2nd Grade</h4>
                        <p className="author">Ms. Russo</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Book-Report-Projects-for-Any-Book-Student-Instructions-Rubrics-Digital-Options-79049-1682592300/original-79049-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">15 Creative Book Activies/Homework Bundle</h4>
                        <p className="author">Ms. Katz</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Biography-Report-Informational-Writing-Black-History-Month-Biography-Project-1564455-1682425689/original-1564455-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Biography LapBook Homework</h4>
                        <p className="author">Ms. Hanley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Daily-Language-Review-1232094-1674313085/original-1232094-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">3rd Grade Spiral Language Reivew Homework</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default EnglishHomework;