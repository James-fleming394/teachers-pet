import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';

const Tests = () => {

    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Tests</h1>
                    <p className="testing-p">
                        Testing is a critical piece of the educational picture.  Strong tests give students the ease of mind to put forth
                        high effort and show what they know.  Strong tests can be the difference in a student's development and an important 
                        piece of shaping students for the future.
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Test Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" src="https://res.cloudinary.com/teepublic/image/private/s--Zi78NcGO--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1630566782/production/designs/24055931_0.jpg" alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">Testing Resources</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Grade-2-Math-Tests-Package-Based-on-the-Ontario-Curriculum-1670415055/original-689458-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Second Grade Math Assessment Bundle</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Test-Prep-Motivational-Testing-Notes-FREEBIE-2337294-1657122536/original-2337294-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Teacher Test Prep Motivations</h4>
                        <p className="author">Mr. Fleming</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Test-Time-Sunshine-for-Teachers-Treat-Tags-for-Your-Colleagues-2495820-1657123923/original-2495820-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Test-Time Sunshine for Teachers!</h4>
                        <p className="author">Ms. Cavataio</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/MATH-TEST-PREP-5TH-GRADE-2217349-1657121845/original-2217349-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Fifth Grade Math Crunch Time Test Prep</h4>
                        <p className="author">Ms. Spina</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>5.0</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/New-York-State-Math-Practice-Tests-for-3rd-Grade-No-Prep--2455415-1661676477/original-2455415-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Np Prep Test Prep: Grade 3 Math</h4>
                        <p className="author">Mr. Chaitin</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/6th-Grade-Math-Test-Prep-End-of-Year-Review-4383768-1679912361/original-4383768-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">6th Grade Math Test Prep Review</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Standardized-Test-Key-Word-Posters-1657111731/original-531458-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Test Terms: <br></br>Posters & Reference Pages</h4>
                        <p className="author">Mr. Bautista</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Standardized-Test-Prep-UNIT-Testing-as-A-Genre-Daily-Mini-Lessons-BUNDLE-5257202-1657589445/original-5257202-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Standardized Test Prep Unit: <br></br>Stratgies, Lesson Plans and Activities</h4>
                        <p className="author">Ms. Hall</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.4</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Motivational-Testing-Notes-for-Student-Encouragement-State-Testing-Motivation-696615-1678795406/original-696615-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Testing Desk Treats: <br></br>35 Encouraging Notes</h4>
                        <p className="author">Ms. Russo</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Do-Not-Disturb-Testing-Signs-5046654-1657142584/original-5046654-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Do Not Disturb Testing Signs</h4>
                        <p className="author">Ms. Katz</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Text-Structure-Game-Show-Test-Prep-Reading-Review-Game-Digital-3003374-1678869086/original-3003374-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Text Structure: Game Show</h4>
                        <p className="author">Ms. Garcia</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.3</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Reading-Test-Prep-Task-Cards-Printable-Google-Forms-and-Slides-3671113-1673027655/original-3671113-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Test Prep: Reading Task Cards</h4>
                        <p className="author">Ms. Wiley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>3.9</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default Tests;