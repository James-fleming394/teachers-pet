import React from "react";
import './Lesson.css';
import RatingLogo from '../assets/star.png';
import { useNavigate } from "react-router";
import DownloadButton from "../components/Download";

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
                    src="https://thumbs.dreamstime.com/b/language-school-adult-kids-english-courses-class-language-school-adult-kids-english-courses-class-141377378.jpg"
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
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/GEOMETROCITY-Create-Build-a-City-Made-of-Math-Using-Geometry-1339693-1645475556/original-1339693-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Geometrocity Project</h4>
                        <p className="author">Mr. Hanley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Multiplication-and-Division-Project-1949479-1682172914/original-1949479-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Video Game Truck: Math Project</h4>
                        <p className="author">Ms. Fagan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured English Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Afro-Latinos-Printable-Research-Poster-Project-SPANISH-AND-ENGLISH-4340086-1678206930/original-4340086-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Black History Month Research Project</h4>
                        <p className="author">Ms. Smith</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Animal-Research-Project-Spanish-English-BUNDLE-1852863-1665251409/original-1852863-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">My Animal Research Project</h4>
                        <p className="author">Ms. Kelly</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/English-Language-Arts-Choice-Board-Project-Based-Summer-or-Distance-Learning-5596185-1597422873/original-5596185-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Langauge Arts Choice Board</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Writing Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Easter-Craft-Activities-Writing-Prompt-Art-Project-Easter-Bunny-House-for-Sale-158880-1681213614/original-158880-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">End of Year Classroom Project</h4>
                        <p className="author">Ms. Sandler</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/-Animal-Reports-A-Lapbook-Animal-Research-Project-Informational-Writing-1771546-1676851428/original-1771546-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Animals Guided Research & Writing Project</h4>
                        <p className="author">Ms. O'Hare</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/EARTH-DAY-ACTIVITIES-craft-writing-prompt-lesson-flip-book-coloring-art-project-105282-1682428128/original-105282-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">How To Build a Taco: Writing Project</h4>
                        <p className="author">Ms. Gould</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Science Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Animal-Adaptations-l-Science-Writing-and-Art-Create-a-Creature-Project--1826571-1669198904/original-1826571-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Create a Creature: Science Project</h4>
                        <p className="author">Mr. Chaitin</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Human-Body-Organ-System-Poster-Project-1615196-1664360986/original-1615196-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Human Body: Organ System Project</h4>
                        <p className="author">Ms. Chdyl</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Solar-System-Craft-ivity-1658604854/original-589657-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Solar System & Planets Project</h4>
                        <p className="author">Ms. Brown</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Social Studies Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Ancient-India-Interactive-Notebook-2173287-1645377586/original-2173287-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Interactive Project: Ancient India</h4>
                        <p className="author">Ms. Cornell</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Land-Acknowledgement-Poster-Announcement-Project-Grade-5-Social-Studies--5831198-1658779900/original-5831198-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Land Acknowledgement Action Project</h4>
                        <p className="author">Ms. Sainz</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Country-Research-Project-A-Social-Studies-Report-4679661-1652175531/original-4679661-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">My Country: Research Project</h4>
                        <p className="author">Ms. Wiley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Other Projects</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Summer-Bucket-List-Craft-End-of-the-Year-Activities-May-Bulletin-Board-Project-1222474-1682884589/original-1222474-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Summer Bucket List Project</h4>
                        <p className="author">Ms. O'Neill</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Create-a-Board-Game-Project-Based-Learning-Unit-Templates-Rubrics-EDITABLE-3108396-1670631850/original-3108396-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Create a Boardgame: Math Project</h4>
                        <p className="author">Ms. Norris</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/The-Game-of-Life-Financial-Literacy-Project-1639002404/original-627444-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Game of Life: Financial Project</h4>
                        <p className="author">Ms. DeSimone</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;