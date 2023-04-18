import React from "react";
import RatingLogo from '../assets/star.png';

const Quizzes = () => {

    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Quizzes</h1>
                    <p className="testing-p">
                        Quizzing students is a crucial piece of the educational picture.  Quizzes give teachers a quick glance at what students understand 
                        and what students need more support with in an environment that is not as stressful as a test or exam.  Quizzes breakdown subject material
                        into smaller pieces, allowing teachers to give a few quizzes before a unit test.  This gives teachers the chance to fill in any gaps or 
                        misconceptions before the big testing day.
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Quiz Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" src="https://media.istockphoto.com/id/1282532423/vector/quiz-game-show-retro-background-vintage-trivia-night-poster-in-pub-marketing-design-vector.jpg?s=612x612&w=0&k=20&c=bpwkvagVfjnSGYxolgdwSu3uPOPga7fXFzCVrB5dJwQ=" alt="quizzes" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">Quiz Resources</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src=""
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Second Grade Math Assessment Bundle</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src=""
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Teacher Test Prep Motivations</h4>
                        <p className="author">Mr. Fleming</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src=""
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Test-Time Sunshine for Teachers!</h4>
                        <p className="author">Ms. Cavataio</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src=""
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Fifth Grade Math Crunch Time Test Prep</h4>
                        <p className="author">Ms. Spina</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>5.0</p>
                    </div>
                    <div className="feature">
                        <img src=""
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Np Prep Test Prep: Grade 3 Math</h4>
                        <p className="author">Mr. Chaitin</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src=""
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">6th Grade Math Test Prep Review</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src=""
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
                        <img src=""
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Testing Desk Treats: <br></br>35 Encouraging Notes</h4>
                        <p className="author">Ms. Russo</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src=""
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Do Not Disturb Testing Signs</h4>
                        <p className="author">Ms. Katz</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src=""
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Text Structure: Game Show</h4>
                        <p className="author">Ms. Garcia</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.3</p>
                    </div>
                    <div className="feature">
                        <img src=""
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

export default Quizzes;