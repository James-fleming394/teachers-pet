import React from "react";
import './Lesson.css';
import RatingLogo from '../assets/star.png';
import { useNavigate } from "react-router";

const Homework = () => {

    let navigate = useNavigate();

    const mathClick = () => {
        navigate('/homework/math');
    }

    const englishClick = () => {
        navigate('/homework/english');
    }

    const writingClick = () => {
        navigate('/homework/writing');
    }

    const scienceClick = () => {
        navigate('/homework/science');
    }

    const ssClick = () => {
        navigate('/homework/social-studies');
    }

    const otherClick = () => {
        navigate('/homework/other');
    }

    return (
        <div className="lesson-home">
            <div className="lesson-options">
                <div className="lessons-section" onClick={mathClick}>
                    <h1 className="h1-lesson">Math Homework</h1>
                    <img 
                    className="lesson-img" 
                    src="https://www.creativefabrica.com/wp-content/uploads/2022/09/28/Cartoon-maths-elements-background-educa-Graphics-39463579-1.png"
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={englishClick}>
                    <h1 className="h1-lesson">English Homework</h1>
                    <img 
                    className="lesson-img" 
                    src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/35436022_995091660649239_5010228248710217728_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VHUwcHF6IecAX99LuHh&_nc_ht=scontent-lga3-2.xx&oh=00_AfA8WPMsDEQTin9rXXHKEQNS3mAIlZGrD0g2AjgI4K8MwQ&oe=6467A4B3"
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={writingClick}>
                    <h1 className="h1-lesson">Writing Homework</h1>
                    <img 
                    className="lesson-img" 
                    src="https://media.istockphoto.com/id/1227423935/vector/happy-cute-cartoon-school-children.jpg?s=612x612&w=0&k=20&c=Ksg_tbxlIkvOZpsGrVzWd78WoX1vETcgpDDtZjr5eog="
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={scienceClick}>
                    <h1 className="h1-lesson">Science Homework</h1>
                    <img 
                    className="lesson-img" 
                    src="https://img.freepik.com/premium-vector/science-book-about-space-vector-illustration-cartoon-education-concept-with-rocket-planet-star-hand-drawn-satellite-creative-design-about-school-chemical-biology-elements_109722-3341.jpg?w=2000"
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={ssClick}>
                    <h1 className="h1-lesson">Social Studies Homework</h1>
                    <img 
                    className="lesson-img" 
                    src="https://media.istockphoto.com/id/1178800730/vector/children-having-fun-with-earth.jpg?s=612x612&w=0&k=20&c=jx-BSJg312kHJ3J-BSzQXM2oW7ZAKjU4Xr0aYNgFDX8="
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={otherClick}>
                    <h1 className="h1-lesson">Other Homework</h1>
                    <img 
                    className="lesson-img" 
                    src="https://static.vecteezy.com/system/resources/previews/014/005/417/original/boys-are-writing-kids-doing-homework-maths-at-home-cartoon-cute-little-boy-in-red-shirt-siting-on-the-desk-the-concept-of-learning-age-illustrations-isolated-on-white-background-vector.jpg"
                    alt="lessons" />
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Math Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/3rd-Grade-Math-Review-Packet-Summer-Math-Test-Prep-Homework-Assessments-2546436-1665754121/original-2546436-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Summer Practice 3rd Grade Math Homework</h4>
                        <p className="author">Ms. Grant</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/5th-Grade-Math-and-English-Language-Daily-Morning-Work-Common-Core-1451932-1675687482/original-1451932-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Math and ELA Homework Activites</h4>
                        <p className="author">Mr. Swingley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Kindergarten-Homework-Weekly-Family-Games-Editable-One-Year-Bundle-2779372-1677702295/original-2779372-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Kindergarten Math Homework Full Year Bundle</h4>
                        <p className="author">Ms. Fagan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured English Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/5th-Grade-Math-and-English-Language-Daily-Morning-Work-Common-Core-1451932-1675687482/original-1451932-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Math and ELA Homework Activites</h4>
                        <p className="author">Ms. Cavatiao</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/3rd-Grade-Language-Spiral-Review-Morning-Work-Daily-Grammar-Review-Homework-1650829-1679160726/original-1650829-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Grammar Homework Review</h4>
                        <p className="author">Ms. Brennan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Language-Bell-Work-for-4th-Grade-013212100-1369878907-1674313513/original-712155-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Language Spiral Review 4th Grade</h4>
                        <p className="author">Ms. Trust</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Writing Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Sight-Word-Practice-Pages-Editable-Worksheets-for-Homework-or-No-Prep-Review-4125747-1672432492/original-4125747-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Sight Word Writing Homework</h4>
                        <p className="author">Ms. Piget</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Writing-Center-Printables-Interactive-Learning-Display-853834-1678980824/original-853834-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Interactive Writing Homework Activites</h4>
                        <p className="author">Ms. Bryant</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/2nd-Grade-Spring-Break-Homework-Packet-5279455-1678309881/original-5279455-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Spring Break Writing Homework Packet</h4>
                        <p className="author">Ms. Lopez</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Science Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/5th-Grade-TEKS-Science-Weekly-Spiral-Review-Warmups-or-Homework-Worksheets-3918995-1666111622/original-3918995-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Science Spiral Review/Homework</h4>
                        <p className="author">Mr. Hoult</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Apple-Science-Interactive-Activities-1444752-1681123182/original-1444752-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Apple Science Homeowrk Activity</h4>
                        <p className="author">Ms. Reginoe</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Scientific-Method-Homework-Study-Guide-Science-Skills-Worksheet-1682520443/original-144083-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Scientific Method Take Home Worksheet</h4>
                        <p className="author">Ms. Levis</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Social Studies Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Lets-Learn-About-Veterans-Day-PowerPoint-Lesson-wWorksheets-Homework-1657511865/original-406887-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Veteran's Day Homework</h4>
                        <p className="author">Ms. Valor</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/CIVIL-WAR-Sectionalism-Map-HomeworkActivityPrintable-1136649-1491248581/original-1136649-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Sectionalism Map Homework</h4>
                        <p className="author">Ms. Cayne</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/US-History-13-Colonies-Colonial-Crossword-WorksheetPrintableHomework-1095241-1656583751/original-1095241-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Colonial Crossword Homework Worksheet</h4>
                        <p className="author">Ms. Reveir</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Other Homework</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/First-Grade-Back-to-School-Activities-First-Week-Beginning-of-the-Year-BUNDLE-139226-1664282753/original-139226-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Back to School Homework 1st Grade</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Back-to-School-Math-Activities-for-the-First-Week-of-School-297895-1661609294/original-297895-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Back to School Homework Kindergarten</h4>
                        <p className="author">Ms. Spina</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Speech-Therapy-Homework-YEAR-LONG-BUNDLE-Articulation-Language-Pragmatics-4623213-1682682798/original-4623213-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Speech Therapy Homework</h4>
                        <p className="author">Ms. Canter</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homework;