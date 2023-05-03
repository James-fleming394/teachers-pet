import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';

const OtherProject = () => {

    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Other Projects</h1>
                    <p className="testing-p">
                        Projects give students the opportunity to dive deeper and challenge themselves.  
                        <br></br>
                        Projects allows for deeper learning, meaningful connections and for students to display their knowledge through hands-on and creative opportunites
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
                <h1 className="assess-all">Other Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Pop-Art-3D-Christmas-Ornaments-A-Unique-Christmas-Activity-or-Christmas-Craft--974714-1674216376/original-974714-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Pop Art: 3D Ornaments</h4>
                        <p className="author">Ms. Kringle</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Build-A-Water-Park-Project-Based-Learning-Design-Plan-Create-1983666-1584982033/original-1983666-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Build a Waterpark Project</h4>
                        <p className="author">Ms. Herote</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Door-Decor-or-Bulletin-Board-Amazing-Things-PRINT-ASSEMBLE--4044594-1656584116/original-4044594-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Amazing Bulletin Board Project</h4>
                        <p className="author">Ms. Spool</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Book-Talk-1645211873/original-132645-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Book Talk Project</h4>
                        <p className="author">Ms. Williams</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Paper-Chair-Engineering-Challenge-Project-Great-STEM-Activity-1066424-1656583748/original-1066424-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Paper Chair Engineering Project</h4>
                        <p className="author">Mr. Martindale</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Growth-Mindset-Craftivity-2359819-1656583944/original-2359819-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Growth Mindset Project</h4>
                        <p className="author">Ms. Kingsly</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Spider-Web-Engineering-Challenge-Project-Great-STEM-Activity-075855500-1379780354-1656583732/original-882908-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Spider Web Engineering Project</h4>
                        <p className="author">Mr. Geller</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/St-Patricks-Day-Craftivityart-activity-Celtic-Knot-Paper-Project-1662043441/original-1137796-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Celtic Knot Paper Art Project</h4>
                        <p className="author">Ms. Martinez</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Mission-Possible-Building-Community-Spreading-Kindness-One-Mission-at-a-Time-014521700-1387158055-1681258865/original-1023019-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Secret Agent Acts of Kindness Project</h4>
                        <p className="author">Ms. Barrett</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Genius-Hour-Primary-Friendly--2084380-1532375763/original-2084380-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Passion projects</h4>
                        <p className="author">Ms. Aldon</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Create-a-Goal-Board-SMART-Goals-1681405167/original-626107-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">SMART Goal Board Project</h4>
                        <p className="author">Ms. Spina</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Project-Based-Learning-Lemonade-Stand-Common-Core-5th-Grade-1208623-1653768070/original-1208623-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Lemonade Stand Project</h4>
                        <p className="author">Ms. Margolis</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default OtherProject;