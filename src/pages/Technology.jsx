import React from "react";
import './Lesson.css';
import RatingLogo from '../assets/star.png';
import { useNavigate } from "react-router";
import DownloadButton from "../components/Download";

const Technology = () => { 

    let navigate = useNavigate();

    const mathClick = () => {
        navigate('/technology/math');
    }

    const englishClick = () => {
        navigate('/technology/english');
    }

    const writingClick = () => {
        navigate('/technology/writing');
    }

    const scienceClick = () => {
        navigate('/technology/science');
    }

    const ssClick = () => {
        navigate('/technology/social-studies');
    }

    const otherClick = () => {
        navigate('/technology/other');
    }


    return(
        <div className="lesson-home">
            <div className="lesson-options">
                <div className="lessons-section" onClick={mathClick}>
                    <h1 className="h1-lesson">Math Technologies</h1>
                    <img 
                    className="lesson-img" 
                    src="https://www.creativefabrica.com/wp-content/uploads/2022/09/28/Cartoon-maths-elements-background-educa-Graphics-39463579-1.png"
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={englishClick}>
                    <h1 className="h1-lesson">English Technologies</h1>
                    <img 
                    className="lesson-img" 
                    src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/35436022_995091660649239_5010228248710217728_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VHUwcHF6IecAX99LuHh&_nc_ht=scontent-lga3-2.xx&oh=00_AfA8WPMsDEQTin9rXXHKEQNS3mAIlZGrD0g2AjgI4K8MwQ&oe=6467A4B3"
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={writingClick}>
                    <h1 className="h1-lesson">Writing Technologies</h1>
                    <img 
                    className="lesson-img" 
                    src="https://media.istockphoto.com/id/1227423935/vector/happy-cute-cartoon-school-children.jpg?s=612x612&w=0&k=20&c=Ksg_tbxlIkvOZpsGrVzWd78WoX1vETcgpDDtZjr5eog="
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={scienceClick}>
                    <h1 className="h1-lesson">Science Technologies</h1>
                    <img 
                    className="lesson-img" 
                    src="https://img.freepik.com/premium-vector/science-book-about-space-vector-illustration-cartoon-education-concept-with-rocket-planet-star-hand-drawn-satellite-creative-design-about-school-chemical-biology-elements_109722-3341.jpg?w=2000"
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={ssClick}>
                    <h1 className="h1-lesson">Social Studies Technologies</h1>
                    <img 
                    className="lesson-img" 
                    src="https://media.istockphoto.com/id/1178800730/vector/children-having-fun-with-earth.jpg?s=612x612&w=0&k=20&c=jx-BSJg312kHJ3J-BSzQXM2oW7ZAKjU4Xr0aYNgFDX8="
                    alt="lessons" />
                </div>
                <div className="lessons-section" onClick={otherClick}>
                    <h1 className="h1-lesson">Other Technologies</h1>
                    <img 
                    className="lesson-img" 
                    src="https://static.vecteezy.com/system/resources/previews/014/005/417/original/boys-are-writing-kids-doing-homework-maths-at-home-cartoon-cute-little-boy-in-red-shirt-siting-on-the-desk-the-concept-of-learning-age-illustrations-isolated-on-white-background-vector.jpg"
                    alt="lessons" />
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Math Technologies</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Digital-Math-Game-Mystery-Multiplication-CSI-Escape-Room-Math-Differentiated-4221187-1665795220/original-4221187-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">CSI Math Game: Digital</h4>
                        <p className="author">Ms. Smith</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Place-Value-Game-3rd-Grade-CSI-Math-Mystery-Activity-2139030-1658705782/original-2139030-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Math Mystery: Digital Review</h4>
                        <p className="author">Mr. Omega</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Multiplication-Math-Mystery-Game-Multiplying-with-Larger-Numbers-4th-Grade--2354979-1658684401/original-2354979-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Monster Mix Up: Digital</h4>
                        <p className="author">Ms. Fagan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured English Technologies</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Cause-and-Effect-GAME-SHOW-2nd-4th-Grade-w-Contestants-interactive-ppt-1240213-1589837401/original-1240213-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Cause and Effect Game Show</h4>
                        <p className="author">Ms. Strong</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Letter-Fluency-Fitness-Bundle-1657218847/original-1386463-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Fluency & Fitness Brain Breaks</h4>
                        <p className="author">Ms. Kelly</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Low-Prep-Classroom-Escape-Room-End-of-Year-Reading-Review-3759516-1657145829/original-3759516-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Reading Review: Digital</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Writing Technologies</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Easter-Craft-Activities-Writing-Prompt-Art-Project-Easter-Bunny-House-for-Sale-158880-1681213614/original-158880-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">End of Year Classroom Activity</h4>
                        <p className="author">Ms. Sandler</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Action-Verb-Unit-1652097689/original-131310-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Action Verbs Digital Activity</h4>
                        <p className="author">Ms. O'Hare</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/EARTH-DAY-ACTIVITIES-craft-writing-prompt-lesson-flip-book-coloring-art-project-105282-1682428128/original-105282-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">How To Build a Taco: Digital Activity</h4>
                        <p className="author">Ms. Gould</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Science Technologies</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Animal-Adaptations-l-Science-Writing-and-Art-Create-a-Creature-Project--1826571-1669198904/original-1826571-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Create a Creature: Science Digital</h4>
                        <p className="author">Mr. Chaitin</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Human-Body-Organ-System-Poster-Project-1615196-1664360986/original-1615196-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Human Body: Organ System Digital Activity</h4>
                        <p className="author">Ms. Chdyl</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Solar-System-Craft-ivity-1658604854/original-589657-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Solar System & Planets Digital Project</h4>
                        <p className="author">Ms. Brown</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            <div className="featured">
                <h1 className="assess-all">Featured Social Studies Technologies</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Ancient-India-Interactive-Notebook-2173287-1645377586/original-2173287-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Interactive Online Project: Ancient India</h4>
                        <p className="author">Ms. Cornell</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Land-Acknowledgement-Poster-Announcement-Project-Grade-5-Social-Studies--5831198-1658779900/original-5831198-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Land Acknowledgement Digital Action Project</h4>
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
                <h1 className="assess-all">Featured Other Technologies</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Would-You-Rather-Questions-204-Cards-Print-Digital-Google-Slides-or-Easel-52805-1678808432/original-52805-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Would you Rather Tech Game</h4>
                        <p className="author">Ms. O'Neill</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Create-a-Board-Game-Project-Based-Learning-Unit-Templates-Rubrics-EDITABLE-3108396-1670631850/original-3108396-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Create a Boardgame: Digital Math Project</h4>
                        <p className="author">Ms. Norris</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/The-Game-of-Life-Financial-Literacy-Project-1639002404/original-627444-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Game of Life: Digital Financial Project</h4>
                        <p className="author">Ms. DeSimone</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology;