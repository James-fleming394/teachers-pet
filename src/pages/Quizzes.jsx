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
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Morning-Work-4th-Grade-1992301-1676381474/original-1992301-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Morning Work: Quiz Bundle</h4>
                        <p className="author">Mr. DeSimone</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/5th-Grade-Math-and-English-Language-Daily-Morning-Work-Common-Core-1451932-1675687482/original-1451932-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Morning Work: Spiral Reviews</h4>
                        <p className="author">Mr. Fleming</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Algebra-Endof-Year-Review-Packets-Quizzes-1657111926/original-679354-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Algebra I: End of Year Review</h4>
                        <p className="author">Ms. Dinuzzio</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Geometry-End-of-Year-Review-Packets-Quizzes-1818585-1657119439/original-1818585-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Geometry: End of Year Review</h4>
                        <p className="author">Ms. Dinuzzio</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>5.0</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/The-Great-Gatsby-240-page-EDITABLE-MEGA-UNIT-Rigor-for-AP-LIT-HONORS--5272851-1680350528/original-5272851-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">The Great Gatsby: Mega Quiz Bundle</h4>
                        <p className="author">Mr. Chaitin</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.3</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Spanish-Speaking-Countries-Map-Labeling-2390714-1657270156/original-2390714-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Spanish: Countries & Capitals Quiz</h4>
                        <p className="author">Ms. Bautista</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/My-Seven-Continents-Book-1258956-1669581534/original-1258956-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Continents & Oceans Quiz Bundle</h4>
                        <p className="author">Mr. Bautista</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Hunger-Games-Unit-Lessons-QA-Tests-Activities-Quiz-Vocab-Maps-Key-1657623927/original-59190-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Hunger Games Book Quiz</h4>
                        <p className="author">Ms. Hall</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Understanding-Logical-Fallacies-CCSS-aligned-1665937719/original-1316320-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Logical Fallacies: Unit & Quizzes</h4>
                        <p className="author">Ms. Russo</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.3</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Phonics-Assessments-Decoding--260125-1681297813/original-260125-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Phonics:  Assessments & Quizzes</h4>
                        <p className="author">Ms. Katz</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/A-Resource-Guide-to-Use-with-Hatchet-1669681420/original-274317-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Hatchet: Book Unit and Quiz</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Patterns-and-the-Coordinate-Plane-Lesson-Packet-Quiz-5-OA-3-3481884-1668097758/original-3481884-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Patterns and Shapes Quiz Unit</h4>
                        <p className="author">Ms. Wiley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default Quizzes;