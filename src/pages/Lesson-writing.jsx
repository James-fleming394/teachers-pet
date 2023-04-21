import React from "react";
import RatingLogo from '../assets/star.png';
import './Tests.css';

const WritingLesson = () => {
    
    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">English Lessons</h1>
                    <p className="testing-p">
                        Lesson plans help students and teachers understand the goals of the instructional module.  
                        <br></br>
                        Lesson planning gives teachers the chance to translate cirriculum into exciting and meaningful activites and instruction.
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
                <h1 className="assess-all">ELA Lessons</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Reading-Test-Prep-101-Mini-Unit-for-Grades-3-5-1675280570/original-576688-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Reading Test Prep Lessons</h4>
                        <p className="author">Ms. Boyle</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Emergency-Sub-Lesson-Plans-for-Middle-School-2340227-1678272650/original-2340227-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">ELA Emergency Substitute Lessons</h4>
                        <p className="author">Mr. Nappi</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/4th-Grade-ELA-Reading-Writing-Language-Curriculum-ELA-Common-Core-Standards-3235542-1679053232/original-3235542-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">All Year ELA Fourth Grade Lessons</h4>
                        <p className="author">Ms. Norey</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/5-Doodle-Notes-and-Learning-Activities-Mini-Units-Reading-Comprehension-Skills-2942284-1657531389/original-2942284-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Reading Skills Unit Lesson</h4>
                        <p className="author">Ms. Abinakad</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Grammar-Curriculum-Growing-Bundle-FULL-YEAR-of-Editable-Lessons-for-ELA-3281038-1657532707/original-3281038-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">ELA Grammar Bundle</h4>
                        <p className="author">Mr. Fleming</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/The-Novel-a-unit-for-any-novel-secondary-English-1657527093/original-1944538-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Novel Unit Lessons</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Language-Arts-Leveled-Daily-Curriculum-BUNDLE--2001081-1665074585/original-2001081-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Bundle: ELA Leveled Reading Lessons</h4>
                        <p className="author">Mr. Lopez</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Doodle-and-Do-ELA-Skills-Bundle-6-Units-Vocabulary-Writing-Reading-3956308-1657535566/original-3956308-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">ELA Reading Skills Bundle</h4>
                        <p className="author">Ms. Cola</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>5.0</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/3rd-Grade-ELA-Reading-and-Writing-Bundle-4947681-1657540698/original-4947681-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">ELA 3rd Grade Resource Bundle</h4>
                        <p className="author">Ms. Olivera</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/On-the-Go-ELA-Routines-4750203-1657578632/original-4750203-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">On the Go ELA Routine Lessons</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/RACE-Strategy-BUNDLE-12-Teaching-Slides-6-Practice-Activities-ELA-Test-Prep-6483014-1679651648/original-6483014-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">R.A.C.E.S Lessons Bundle</h4>
                        <p className="author">Ms. Manca</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Independent-and-Dependent-Clauses-2144125-1657646962/original-2144125-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Grammar: Clauses Unit Lessons</h4>
                        <p className="author">Ms. Taylor</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.3</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default WritingLesson;