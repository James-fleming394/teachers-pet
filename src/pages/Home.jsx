import React from "react";
import './Home.css';
import HomeLogo from '../assets/logo-big.png';
import RatingLogo from '../assets/star.png'
import { useNavigate } from "react-router";

const Home = () => {

    const navigate = useNavigate();

    const navResources = () => {
        navigate("/assessments")
    }

    return (
        <div className="homepage">
            <div className="header">
                <div className="header1">
                    <h3 className="header-h3">Teacher's Pet</h3>
                    <h1 className="header-h1">Teacher's Pet is a One Stop <br></br>Shop for Every Teacher's Needs</h1>
                    <button className="discover" onClick={navResources}>Start Searching</button>
                </div>
                <img className="logo-image-home"
                src= {HomeLogo}
                alt="homepagelogo"
                />
            </div>

            <div className="features">
                <h3 className="features-h3">Explore Our Resources</h3>
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
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/3rd-Grade-Lesson-Plans-3233810-1657532532/original-3233810-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Literacy Lesson Plans for 3rd Grade Bundle</h4>
                        <p className="author">Ms. Brennan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/GEOMETROCITY-Create-Build-a-City-Made-of-Math-Using-Geometry-1339693-1645475556/original-1339693-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Geometrocity: Project Bundle</h4>
                        <p className="author">Ms. Cavataio</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Homework-Pass-EDITABLE-4698780-1666478226/original-4698780-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Homework Passes Made Easy</h4>
                        <p className="author">Ms. Spina</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>5.0</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Technology-Then-and-now-7862049-1647931781/original-7862049-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Technology: Then and Now</h4>
                        <p className="author">Mr. Chaitin</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Whole-Class-Reward-Chart-Donut-EDITABLE-REWARDS-5207958-1656585353/original-5207958-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Reward System for Whole Class</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                </div>
                <div className="print-digital">
                    <h1 className="digital-h1">Teacher-Tested Solutions</h1>
                    <h2 className="digital-h2">Resources for busy teachers who need an extra hand in their classrooms</h2>
                    <div className="users">
                    <div className="users1">
                        <h2 className="users-h2">100+</h2>
                        <p className="users-p"> teachers actively online</p>
                    </div>
                    <div className="users1">
                        <h2 className="users-h2">1000+</h2>
                        <p className="users-p"> teacher-created lessons</p>
                    </div>
                    <div className="users1">
                        <h2 className="users-h2">10,000+</h2>
                        <p className="users-p"> resources downloaded</p>
                    </div>
                </div>
                    <button className="user-button" onClick={navResources}>
                        Discover Resources
                    </button>
                    <img className="resources-img" src="https://www.elmhurst.edu/wp-content/uploads/2021/02/articles-on-teacher-leadership-illustration.jpg" alt="resources" />
                </div>
            </div>
        </div>
    )

}

export default Home;