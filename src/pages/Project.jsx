import React from "react";
import './Lesson.css';
import RatingLogo from '../assets/star.png';
import { useNavigate } from "react-router";

const Projects = () => {

    let navigate = useNavigate();

    const mathClick = () => {
        navigate('/projects/math');
    }

    const englishClick = () => {
        navigate('/projects/english');
    }

    const writingClick = () => {
        navigate('/projects/writing');
    }

    const scienceClick = () => {
        navigate('/projects/science');
    }

    const ssClick = () => {
        navigate('/projects/social-studies');
    }

    const otherClick = () => {
        navigate('/projects/other');
    }

    return (
        <div className="lesson-home">
            <div className="lesson-options">
                <div className="lessons-section" onClick={mathClick}>
                    <h1 className="h1-lesson">Math Projects</h1>
                    <img 
                    className="lesson-img" 
                    src="https://www.creativefabrica.com/wp-content/uploads/2022/09/28/Cartoon-maths-elements-background-educa-Graphics-39463579-1.png"
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={englishClick}>
                    <h1 className="h1-lesson">English Projects</h1>
                    <img 
                    className="lesson-img" 
                    src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/35436022_995091660649239_5010228248710217728_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VHUwcHF6IecAX99LuHh&_nc_ht=scontent-lga3-2.xx&oh=00_AfA8WPMsDEQTin9rXXHKEQNS3mAIlZGrD0g2AjgI4K8MwQ&oe=6467A4B3"
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={writingClick}>
                    <h1 className="h1-lesson">Writing Projects</h1>
                    <img 
                    className="lesson-img" 
                    src="https://media.istockphoto.com/id/1227423935/vector/happy-cute-cartoon-school-children.jpg?s=612x612&w=0&k=20&c=Ksg_tbxlIkvOZpsGrVzWd78WoX1vETcgpDDtZjr5eog="
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={scienceClick}>
                    <h1 className="h1-lesson">Science Projects</h1>
                    <img 
                    className="lesson-img" 
                    src="https://img.freepik.com/premium-vector/science-book-about-space-vector-illustration-cartoon-education-concept-with-rocket-planet-star-hand-drawn-satellite-creative-design-about-school-chemical-biology-elements_109722-3341.jpg?w=2000"
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={ssClick}>
                    <h1 className="h1-lesson">Social Studies Projects</h1>
                    <img 
                    className="lesson-img" 
                    src="https://media.istockphoto.com/id/1178800730/vector/children-having-fun-with-earth.jpg?s=612x612&w=0&k=20&c=jx-BSJg312kHJ3J-BSzQXM2oW7ZAKjU4Xr0aYNgFDX8="
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={otherClick}>
                    <h1 className="h1-lesson">Other Projects</h1>
                    <img 
                    className="lesson-img" 
                    src="https://static.vecteezy.com/system/resources/previews/014/005/417/original/boys-are-writing-kids-doing-homework-maths-at-home-cartoon-cute-little-boy-in-red-shirt-siting-on-the-desk-the-concept-of-learning-age-illustrations-isolated-on-white-background-vector.jpg"
                    alt="lessons" />
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Math Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Place-Value-Detective-A-Place-Value-Project-Enrichment-Centers-Small-Group-056730700-1375389930-1667869978/original-804151-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Place Value Detective Project</h4>
                        <p className="author">Ms. Byrant</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/GEOMETROCITY-Create-Build-a-City-Made-of-Math-Using-Geometry-1339693-1645475556/original-1339693-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Geometrocity Project</h4>
                        <p className="author">Mr. Hanley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Multiplication-and-Division-Project-1949479-1682172914/original-1949479-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Video Game Truck: Math Project</h4>
                        <p className="author">Ms. Fagan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured English Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Interactive-Reading-Notebooks-Informational-Text-Nonfiction-for-Common-Core-4-8-1668076774/original-790642-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Interactive Reading: Non-Fiction Texts</h4>
                        <p className="author">Ms. Manca</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Phonics-Poetry-for-Grades-K-2-1475734-1674900096/original-1475734-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Phonics Poetry Lesson</h4>
                        <p className="author">Ms. Brennan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Interactive-Reading-Journal-Notebook-for-K-2-Common-Core-Aligned-073763000-1378165324-1681133125/original-858335-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Interactive Reading Notebook</h4>
                        <p className="author">Ms. Hall</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.4</p>
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Writing Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Common-Core-Writing-for-1st-Grade-Narratives-Informative-Opinion-Bundle-1657552962/original-487663-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">First Grade Writing Lessons</h4>
                        <p className="author">Ms. Pealone</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Writing-Center-Printables-Interactive-Learning-Display-853834-1678980824/original-853834-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Interactive Writing Lessons/Centers</h4>
                        <p className="author">Ms. Bryant</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/The-Day-the-Crayons-Quit-Opinion-Writing-2495386-1657522048/original-2495386-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Opinionated Writing Lessons: 10 Day Plan</h4>
                        <p className="author">Ms. Reagan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Science Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/KinderScience-Kindergarten-Science-Curriculum-Homeschool-Compatible--2739645-1676993479/original-2739645-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Kindergarten Science Curriculum</h4>
                        <p className="author">Mr. Fleming</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Apple-Science-Interactive-Activities-1444752-1681123182/original-1444752-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Apple Science Lessons</h4>
                        <p className="author">Ms. Reginoe</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Weather-and-Climate-Interactive-Notebook-BUNDLE-by-Science-Doodles-1550560-1657525533/original-1550560-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Weather & Climate Interactive Notebook Lessons</h4>
                        <p className="author">Ms. Wallace</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Social Studies Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Little-SOCIAL-STUDIES-Thinkers-UNIT-1-Citizenship-Kindergarten-Social-Studies--2689773-1664967206/original-2689773-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Social Studies: Citizenship Lessons</h4>
                        <p className="author">Ms. Scott</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Colony-Unit-filled-with-Informational-Text-Quiz-Test-Project-1668958073/original-510660-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Social Studies: Colonial Unit Lessons</h4>
                        <p className="author">Ms. Weinberg</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Holidays-and-Christmas-Around-the-World-Digital-and-Printable-2885336-1671833250/original-2885336-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Holidays Around the World Lesson</h4>
                        <p className="author">Ms. Cayne</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Other Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/First-Grade-Back-to-School-Activities-First-Week-Beginning-of-the-Year-BUNDLE-139226-1664282753/original-139226-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Back to School Activites 1st Grade</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Back-to-School-Math-Activities-for-the-First-Week-of-School-297895-1661609294/original-297895-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Back to School Activites Kindergarten</h4>
                        <p className="author">Ms. Spina</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Summer-Theme-Preschool-Lesson-Plan-and-Summer-Activities-BUNDLE-2-3750691-1657528143/original-3750691-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Summer Lessons Bundles</h4>
                        <p className="author">Ms. Lopez</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;