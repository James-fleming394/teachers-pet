import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';
import DownloadButton from "../components/Download";

const WritingTechnology = () => {

    return(
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Writing Technologies</h1>
                    <p className="testing-p">
                        Technology is a useful tool for educators and students to continue to challenge their own limits. 
                        <br></br>
                        Technology leads to increased student engagement, collaboration, inclusion and creativity in the classroom and in student work.  
                        
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" 
                    src="https://img.freepik.com/free-vector/hand-holding-pen-writing-blank-book_1308-123379.jpg?w=2000" 
                    alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">Writing Technologies</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/50-OFF-1ST-24-HOURS-Animal-Report-Pennant-Banners-3835396-1681292111/original-3835396-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Animal Report Digital Writing Project</h4>
                        <p className="author">Ms. Galphon</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Class-Pet-Writing-Journal-1667212280/original-298932-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Class Pet Digital Writing Journal</h4>
                        <p className="author">Ms. Triolo</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Complete-Sentence-Buddy-1656583706/original-353326-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Sentence Buddy Digital Writing Project</h4>
                        <p className="author">Ms. Besio</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Cereal-Box-Book-Report-Project-Book-Report-Template-Rubric-1226068-1674531960/original-1226068-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Cereal Box Digital Book Report</h4>
                        <p className="author">Ms. Wright</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/All-About-Me-Back-to-School-Activities-for-the-Beginning-of-the-Year-2059166-1671799792/original-2059166-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">All About Me Digital Writing Project</h4>
                        <p className="author">Mr. Schultz</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/The-Island-Project-Based-Learning-for-Writing-Math-Reading-Science-SS-1110087-1601477305/original-1110087-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">The Island Adventure Writing Digital Project</h4>
                        <p className="author">Ms. Beyond</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Biography-Project-Grades-2-5-1620567-1651303117/original-1620567-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Biography Digital Project</h4>
                        <p className="author">Mr. Lobos</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/End-of-Year-Memory-Book-Digital-and-Printable-5495906-1682338466/original-5495906-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">End of Year: Digital Memory Book</h4>
                        <p className="author">Ms. Riley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Winter-Olympic-Games-2018-Activities-Printables-Reading-Passages-STEM-More-3520249-1676241503/original-3520249-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Country Report Digital Writing Project</h4>
                        <p className="author">Ms. Mitchell</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.4</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Mother-s-Day-Card-Craftivity-Father-s-Day-card-file-is-included-too--1200681-1682931282/original-1200681-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Digital Mother's Day Card Craft</h4>
                        <p className="author">Ms. Ribon</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/iPoetry-A-Poetry-Unit-1500873671/original-237046-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Digital iPoetry Project</h4>
                        <p className="author">Ms. Hangred</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/All-About-Me-Back-to-School-Activity-First-Day-Getting-to-Know-You-Flipbook-1248796-1663929027/original-1248796-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Let Me Introduce Myself Digital Project</h4>
                        <p className="author">Ms. Fleming</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default WritingTechnology;