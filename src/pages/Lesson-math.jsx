import React from "react";
import RatingLogo from '../assets/star.png';
import './Tests.css';
import DownloadButton from "../components/Download";

const MathLesson = () => {

    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Math Lessons</h1>
                    <p className="testing-p">
                        Lesson plans help students and teachers understand the goals of the instructional module.  
                        <br></br>
                        Lesson planning gives teachers the chance to translate cirriculum into exciting and meaningful activites and instruction.
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
                <h1 className="assess-all">Math Lessons</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/2nd-Grade-Magic-of-Math-Lesson-Plans-for-Shapes-Geometry-and-Fractions-2795672-1657530780/original-2795672-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Magic of Math: Shapes & Fractions Lesson</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/2nd-Grade-Magic-of-Math-Lesson-Plans-for-Place-Value-2550454-1657270117/original-2550454-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Magic of Math: Place Value Lessons</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/1st-and-2nd-Grade-Math-Games-Centers-Stations-Review-Toothy-Bundle-3037141-1679907233/original-3037141-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Math Lessons & Games</h4>
                        <p className="author">Ms. Cavataio</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/FirstieMath-Intervention-Curriculum-3220934-1676391898/original-3220934-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Math Intervention Lessons</h4>
                        <p className="author">Ms. Spina</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.4</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/3rd-Grade-Magic-of-Math-Lesson-Plans-for-Geometry-Area-and-Perimeter-2989347-1657531563/original-2989347-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Magic of Math: Area & Perimeter</h4>
                        <p className="author">Mr. Chaitin</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/2nd-Grade-Magic-of-Math-Lesson-Plans-for-Addition-and-Subtraction-Regrouping-2851279-1675258869/original-2851279-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Magic of Math: Regrouping</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Digital-Math-Warm-Ups-First-Grade-3660036-1667312280/original-3660036-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Math Warm-Up Lessons</h4>
                        <p className="author">Mr. Bautista</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/2nd-Grade-Magic-of-Math-Lesson-Plans-for-the-ENTIRE-YEAR-3118532-1680686367/original-3118532-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Magic of Math: Year Bundle</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>5.0</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Math-Curriculum-Growing-Bundle-THIRD-GRADE-7100872-1673395705/original-7100872-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Math Curriculum: Full Year Bundle</h4>
                        <p className="author">Ms. Russo</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/2nd-Grade-Math-Math-Made-Fun-Curriculum-3859970-1672536906/original-3859970-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Second Grade Math Curriculum Bundle</h4>
                        <p className="author">Ms. Katz</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/-2nd-Grade-Magic-of-Math-Lesson-Plans-for-Data-and-Graphs-3043341-1678703502/original-3043341-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Magic of Math: Graphing</h4>
                        <p className="author">Ms. Brennan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/3rd-Grade-Magic-of-Math-Lesson-Plans-for-Multiplication-2808290-1657530860/original-2808290-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Magic of Math: Multiplication</h4>
                        <p className="author">Ms. Hall</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default MathLesson;