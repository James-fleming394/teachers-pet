import React from "react";
import RatingLogo from '../assets/star.png';
import './Tests.css';
import DownloadButton from "../components/Download";

const SSLesson = () => {

    return (
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Social Studies Lessons</h1>
                    <p className="testing-p">
                        Lesson plans help students and teachers understand the goals of the instructional module.  
                        <br></br>
                        Lesson planning gives teachers the chance to translate cirriculum into exciting and meaningful activites and instruction.
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" 
                    src="https://media.istockphoto.com/id/1178800730/vector/children-having-fun-with-earth.jpg?s=612x612&w=0&k=20&c=jx-BSJg312kHJ3J-BSzQXM2oW7ZAKjU4Xr0aYNgFDX8=" 
                    alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">Social Studies Lessons</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Little-1st-grade-Social-Studies-Thinkers-YEAR-LONG-CURRICULUM-3802194-1664966792/original-3802194-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Little Thinkers Social Studies Curriculum</h4>
                        <p className="author">Ms. Kane</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Colony-Unit-filled-with-Informational-Text-Quiz-Test-Project-1668958073/original-510660-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Colonial Unit Lesson Plans</h4>
                        <p className="author">Mr. Troba</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Introduction-PowerPoint-to-5-Regions-of-the-United-States-1677272916/original-154854-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Five Regions of the United States</h4>
                        <p className="author">Ms. Boots</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Washing-and-Lincoln-Timelines-for-Kindergarten-and-First-Grade-1102679-1675343008/original-1102679-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Presidential Timelines</h4>
                        <p className="author">Ms. Jackson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/American-Revolutionary-War-Bundle-Causes-People-Events-and-Battles-1672305316/original-1178750-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">American Revolution Lessons</h4>
                        <p className="author">Mr. Bauer</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Me-on-the-Map-A-Literature-Social-Studies-Mini-Unit-1657551164/original-480470-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Me on the Map Unit Lessons</h4>
                        <p className="author">Ms. Barkley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Map-Skills-Scavenger-Hunt-Free-BOOM-Cards-668908-1665336296/original-668908-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Map Skills: Scavenger Hunt Lesson</h4>
                        <p className="author">Mr. George</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Wants-and-Needs-Earning-and-Saving-A-Primary-Economics-Unit-1161506-1678190040/original-1161506-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Wants Vs. Needs: Economics Lesson</h4>
                        <p className="author">Ms. Buck</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.4</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Goods-and-Services-1739318-1679314592/original-1739318-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Goods & Services: Economics Lesson</h4>
                        <p className="author">Ms. Bank</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Where-I-Live-Social-Studies-Unit-Activity-1657526246/original-179091-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Where I Live Lessons</h4>
                        <p className="author">Ms. Grant</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Thanksgiving-Activities-All-About-Thanksgiving-Unit-969544-1667714679/original-969544-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Thanksgiving Lesson</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/French-and-Indian-War-Doodle-Notes-2616924-1662972325/original-2616924-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">French & Indian War Lessons</h4>
                        <p className="author">Ms. Temco</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default SSLesson;