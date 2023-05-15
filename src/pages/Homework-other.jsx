import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';
import DownloadButton from "../components/Download";

const OtherHomework = () => {

    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Other Homework</h1>
                    <p className="testing-p">
                        Homework teaches students how to set priorities and deisplay their independent understanding.
                        <br></br>
                        Homework helps teachers determine how well the lessons and activites are being understood in the classroom so they may play appropriately moving forward.
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" 
                    src="https://thumbs.dreamstime.com/b/cartoon-cute-doodle-back-to-school-phrase-colorful-illustration-background-lots-objects-funny-works-art-vector-hand-drawn-175794199.jpg" 
                    alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">Other Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Take-Home-Folder-Learning-Folder-Print-Digital-for-Google-5709060-1660638286/original-5709060-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Take Home Folders</h4>
                        <p className="author">Ms. Margolis</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Build-A-Water-Park-Project-Based-Learning-Design-Plan-Create-1983666-1584982033/original-1983666-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Build a Waterpark Homework</h4>
                        <p className="author">Ms. Strum</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Door-Decor-or-Bulletin-Board-Amazing-Things-PRINT-ASSEMBLE--4044594-1656584116/original-4044594-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Amazing Bulletin Board Homework</h4>
                        <p className="author">Ms. Poole</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Common-Core-Weekly-Reading-Homework-Review-Complete-Set-36-Texts-001071600-1370999740-1664912187/original-725857-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Reading Homework</h4>
                        <p className="author">Ms. Posada</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Paper-Chair-Engineering-Challenge-Project-Great-STEM-Activity-1066424-1656583748/original-1066424-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Paper Chair Engineering Homework</h4>
                        <p className="author">Mr. Kafka</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Growth-Mindset-Craftivity-2359819-1656583944/original-2359819-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Growth Mindset Take Home</h4>
                        <p className="author">Ms. Gandalf</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Spider-Web-Engineering-Challenge-Project-Great-STEM-Activity-075855500-1379780354-1656583732/original-882908-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Spider Web Engineering Take Home</h4>
                        <p className="author">Mr. Francois</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/First-Grade-Homework-for-the-Entire-Year--2597360-1636569825/original-2597360-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">First Grade Homework Custom</h4>
                        <p className="author">Ms. Marti</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Homework-Pack-Life-Skills-Based-Homework-for-the-Entire-Year-2037414-1565000734/original-2037414-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Life Skills Homework</h4>
                        <p className="author">Ms. Barrett</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Genius-Hour-Primary-Friendly--2084380-1532375763/original-2084380-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Passion Homework</h4>
                        <p className="author">Ms. Aldon</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Create-a-Goal-Board-SMART-Goals-1681405167/original-626107-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">SMART Goal Board Homework</h4>
                        <p className="author">Ms. Spina</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Project-Based-Learning-Lemonade-Stand-Common-Core-5th-Grade-1208623-1653768070/original-1208623-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Lemonade Stand Homework</h4>
                        <p className="author">Ms. Margolis</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default OtherHomework;