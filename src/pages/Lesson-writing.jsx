import React from "react";
import RatingLogo from '../assets/star.png';
import './Tests.css';

const WritingLesson = () => {
    
    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Writing Lessons</h1>
                    <p className="testing-p">
                        Lesson plans help students and teachers understand the goals of the instructional module.  
                        <br></br>
                        Lesson planning gives teachers the chance to translate cirriculum into exciting and meaningful activites and instruction.
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
                <h1 className="assess-all">Writing Lessons</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Writing-Bundle-Personal-Narrative-Informational-Opinion-Fiction-3RD-GRADE-3603451-1676033245/original-3603451-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">3rd Grade: Writing Unit Bundle</h4>
                        <p className="author">Ms. Brennan</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Paragraph-Writing-Aligned-to-Common-Core-1678180211/original-795838-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Sentence & Paragraph Lessons</h4>
                        <p className="author">Mr. Covert</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/The-Day-the-Crayons-Quit-Opinion-Writing-2495386-1657522048/original-2495386-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Opinion Letter: Starting Lessons</h4>
                        <p className="author">Ms. Bloom</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/KinderWriting-Kindergarten-Writing-Curriculum-BUNDLED-Homeschool-Compatible--3349340-1679276122/original-3349340-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Kindergarten Writing Lessons Bundle</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Grammar-Curriculum-Growing-Bundle-FULL-YEAR-of-Editable-Lessons-for-ELA-3281038-1657532707/original-3281038-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Writing Grammar Bundle</h4>
                        <p className="author">Mr. Fleming</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Poetry-Unit-Poetry-Writing-Bundle-642237-1676655504/original-642237-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Poetry Writing Unit Bundle</h4>
                        <p className="author">Ms. Boyle</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Personal-Narrative-Writing-Unit-Small-Moments-1657568404/original-247799-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Personal Naratives Lessons: 1st Grade</h4>
                        <p className="author">Mr. Roth</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Informational-Report-Writing-Unit-THIRD-GRADE-3237698-1678132961/original-3237698-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">3rd Grade: Informational Report Unit</h4>
                        <p className="author">Ms. Derasmo</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>5.0</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Kindergarten-Morning-Work-Kindergarten-Writing-Prompts-For-the-Entire-Year-2695332-1659401100/original-2695332-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Paperless Writing Prompts</h4>
                        <p className="author">Ms. Cavataio</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Argumentative-Writing-Unit-Grades-7-12-2374879-1662294417/original-2374879-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Middle School Argumentative Writing Lessons</h4>
                        <p className="author">Ms. Fagan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Opinion-Writing-Unit-My-Opinion-Matters-1681245973/original-229475-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Opinion Writing Unit Lessons</h4>
                        <p className="author">Ms. Manca</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Write-the-Room-Kindergarten-Year-Long-BUNDLE-42-Themes-Included-3511983-1675948222/original-3511983-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Year Long Write the Room Wiritng Bundle</h4>
                        <p className="author">Ms. Adler</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default WritingLesson;