import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';


const Rewards = () => {

    return(
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Rewards</h1>
                    <p className="testing-p">
                        Reward systems build a positive learning habit
                        <br></br>
                        The more a student seeks a reward, the more they develop positive learning habits and gain more interest in a topic!
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" src="https://media.istockphoto.com/id/1270957112/vector/set-of-teacher-reward-stickers-school-award-signs.jpg?s=612x612&w=0&k=20&c=tyehdl7ZIZxz_2JORzxvRvR-jsoi0AMFT_ctE6J69TE=" alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">Reward Resources</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Behavior-Survival-Kit-Data-Tracking-Interventions-Reward-Charts-and-More--3350000-1657575940/original-3350000-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Behavior and Rewards Survival Kit</h4>
                        <p className="author">Ms. Tracey</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Reward-Coupons-for-Positive-Classroom-Management-Editable--1099807-1662013227/original-1099807-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Reward Coupons Multi-Age</h4>
                        <p className="author">Mr. Chaitin</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Whole-Class-Rewards-System-4626267-1670538660/original-4626267-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Whole Class Rewards System</h4>
                        <p className="author">Ms. Cavataio</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Class-Coupons-1989309-1681464471/original-1989309-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Reward Coupons: Editable Choices</h4>
                        <p className="author">Ms. Jacaruso</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>5.0</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Classroom-Economy-System-Reward-Coupons-Class-Cash-EDITABLE-Coupons-4671604-1683559887/original-4671604-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Classroom Economy Cash System</h4>
                        <p className="author">Mr. Clark</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Whole-Class-Reward-System-Build-a-Reward-Classroom-Behavior-Management-Bundle-7513520-1683636602/original-7513520-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Build A Reward System</h4>
                        <p className="author">Ms. Abinakad</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Visual-Reward-Charts-2556180-1657567749/original-2556180-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Token Board: Whole Class Reward System</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Sticker-Charts-Blank-and-Goal-Sticker-Charts-Editable--3716950-1683122355/original-3716950-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Behavior Goal Reward Charts</h4>
                        <p className="author">Ms. Christen</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Classroom-Reward-Coupons-Positive-Behavior-Management-Classroom-Incentives-257110-1675248933/original-257110-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Back to School: Class Coupons</h4>
                        <p className="author">Ms. Russo</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Secret-Reward-Puzzle-Classroom-Management-Tool-Classroom-Reward-Tool-3522745-1673096314/original-3522745-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Secret Reward Puzzle</h4>
                        <p className="author">Ms. Katz</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Incentive-Behavior-Reward-Sticker-Charts-2103185-1675729918/original-2103185-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Incentive Sticker Charts</h4>
                        <p className="author">Ms. Rupp</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Reward-Tag-BUNDLE-2615821-1656583971/original-2615821-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Reward Tags Huge Bundle</h4>
                        <p className="author">Ms. Chase</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default Rewards;