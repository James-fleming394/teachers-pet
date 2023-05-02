import React from "react";
import RatingLogo from '../assets/star.png';
import './Tests.css';

const OtherLesson = () => {

    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Other Lessons</h1>
                    <p className="testing-p">
                        Lesson plans help students and teachers understand the goals of the instructional module.  
                        <br></br>
                        Lesson planning gives teachers the chance to translate cirriculum into exciting and meaningful activites and instruction.
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
                <h1 className="assess-all">Other Lessons</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/KinderSocialSkills-3207227-1657569474/original-3207227-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Kindergarten: Social Skills Lessons</h4>
                        <p className="author">Ms. Spina</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Monster-Fun-Teaching-Manners-and-Expectations-1657520613/original-144484-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Monster Manners Lesson</h4>
                        <p className="author">Mr. Lopez</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/RtI-Response-to-Intervention-If-Then-Reading-Interventions-Menu-1657552231/original-290392-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Reading Interventions Lessons</h4>
                        <p className="author">Ms. Book</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Greek-Mythology-Unit-Based-on-Common-Core-Standards-1657519958/original-222084-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Greek Mythology Lessons</h4>
                        <p className="author">Ms. Ares</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Back-to-School-for-First-Graders-Friends-in-First-1657520789/original-268495-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Back to School Activites</h4>
                        <p className="author">Mr. Braun</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/The-ULTIMATE-Teaching-Survival-Binder-Bright-Colors-and-Buttons-Theme-1259527-1657524169/original-1259527-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Bright Colors and Buttons Lesson</h4>
                        <p className="author">Ms. Boyle</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Feelings-Emotions-Unit-SEL-for-Preschool-Pre-K-and-Kindergarten-2691715-1658859215/original-2691715-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Feelings and Emotions Lessons</h4>
                        <p className="author">Mr. Garent</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/3D-Shape-Activity-My-3D-Shapes-Mini-Book-Common-Core-Aligned-3D-Shape-Fun-1657512623/original-567221-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">3d Shapes Book and Lesson</h4>
                        <p className="author">Ms. Garfield</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>5.0</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Reading-Strategies-Super-Bundle-6-Decoding-Strategies-1059204-1657523129/original-1059204-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Phonics Lesson: Reading Strategies</h4>
                        <p className="author">Ms. Brennan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Blasting-Off-with-Readers-Workshop-Unit-1-by-Kim-Adsit-and-Michele-Scannell-1657550094/original-261292-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Blasting Off!  Readers Lessons</h4>
                        <p className="author">Ms. Garcia</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Point-of-View-Perspective-Read-Aloud-261793-1676306510/original-261793-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Read Aloud Lessons: Point of View</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/NO-PREP-Build-A-Sentence-Activities-2315236-1682171261/original-2315236-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Build-a-Sentence: Grammar Lessons</h4>
                        <p className="author">Ms. Bills</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default OtherLesson;