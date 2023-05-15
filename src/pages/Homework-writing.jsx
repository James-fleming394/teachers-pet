import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';
import DownloadButton from "../components/Download";

const WritingHomework = () => {
    
    return(
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Writing Homework</h1>
                    <p className="testing-p">
                        Homework teaches students how to set priorities and deisplay their independent understanding.
                        <br></br>
                        Homework helps teachers determine how well the lessons and activites are being understood in the classroom so they may play appropriately moving forward.
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" 
                    src="https://img.freepik.com/free-vector/hand-holding-pen-writing-blank-book_1308-123379.jpg?w=2000" 
                    alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">Writing Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/50-OFF-1ST-24-HOURS-Animal-Report-Pennant-Banners-3835396-1681292111/original-3835396-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Animal Report Writing Homework</h4>
                        <p className="author">Ms. Riley</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Class-Pet-Writing-Journal-1667212280/original-298932-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Class Pet Writing Homework Journal</h4>
                        <p className="author">Ms. Hanely</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/3rd-Grade-PRE-SALE-Homework-Bundle-3307631-1659307153/original-3307631-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">3rd Grade Writing Homework Bundle</h4>
                        <p className="author">Ms. Celio</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/February-Seat-Work-CCSS-Aligned-I-Can-Posters-Homework-Self-Starters-2213089-1622412642/original-2213089-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Kindergarten Morning Work/Homework</h4>
                        <p className="author">Ms. Reyes</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/All-About-Me-Back-to-School-Activities-for-the-Beginning-of-the-Year-2059166-1671799792/original-2059166-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">All About Me Writing Take Home</h4>
                        <p className="author">Mr. Smith</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/March-SEAT-WORK-Kindergarten-Homework-Math-Literacy-CCSS-Aligned-2262607-1645196917/original-2262607-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Kindergarten Morning Work/Homework March</h4>
                        <p className="author">Ms. St. Patrick</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Biography-Project-Grades-2-5-1620567-1651303117/original-1620567-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Biography Take Home Work</h4>
                        <p className="author">Mr. Lobos</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/End-of-Year-Memory-Book-Digital-and-Printable-5495906-1682338466/original-5495906-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">End of Year: Memory Book Homework Assignment</h4>
                        <p className="author">Ms. Riley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Winter-Olympic-Games-2018-Activities-Printables-Reading-Passages-STEM-More-3520249-1676241503/original-3520249-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Country Report Writing Homework</h4>
                        <p className="author">Ms. Mitchell</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Homework-for-Second-Grade-First-QuarterNine-Weeks-1384826-1664287119/original-1384826-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Quarter 1 Homework</h4>
                        <p className="author">Ms. Ribotti</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Sight-Word-Practice-Pages-Editable-Worksheets-for-Homework-or-No-Prep-Review-4125747-1672432492/original-4125747-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Sight Word Writing Practice Homework</h4>
                        <p className="author">Ms. Granger</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Third-Grade-LANGUAGE-Homework-Morning-Work-WHOLE-Year-NO-PREP-SPIRAL-REVIEW-1874330-1657208527/original-1874330-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">The Bundle for all Year Homework</h4>
                        <p className="author">Ms. Fleming</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default WritingHomework;