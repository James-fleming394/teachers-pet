import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';

const EnglishTechnology = () => {

    return(
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">English Projects</h1>
                    <p className="testing-p">
                        Technology is a useful tool for educators and students to continue to challenge their own limits.  
                        <br></br>
                        Technology leads to increased student engagement, collaboration, inclusion and creativity in the classroom and in student work.
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" 
                    src="https://psenglish.co.uk/wp-content/uploads/2022/08/clases-de-ingles_0-720x400.jpg" 
                    alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">English Technologies</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Hispanic-Heritage-Month-Project-Hispanic-Americans-Research-Infographic-DIGITAL-2068485-1682435438/original-2068485-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Hispanic Heritage Month Digital Project</h4>
                        <p className="author">Ms. Garcia</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Multi-Genre-Project-for-Secondary-English-2523806-1657522156/original-2523806-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Multi-Genre Digital Projects</h4>
                        <p className="author">Ms. Nappi</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Mystery-Project-Middle-School-ELA-Distance-learning-1879941-1682873483/original-1879941-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">ELA Detective Digital Project</h4>
                        <p className="author">Ms. Kay</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Rhetorical-Mode-Project-for-AP-English-Language-Composition-1682341073/original-448520-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Rhetorical Mode Digital Project</h4>
                        <p className="author">Ms. Jacaruso</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.3</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Review-Project-for-English-Language-Arts-Literary-Quote-Book-6860744-1683105129/original-6860744-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Literary Quote Book ELA Digital Project</h4>
                        <p className="author">Mr. Bauer</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Reading-Rocks-Technology-Projects-for-High-School-English-Middle-School-ELA-1013495-1678736366/original-1013495-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Creating Music Videos: Digital ELA Project</h4>
                        <p className="author">Ms. Allkind</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Pablo-Picasso-Guernica-Project-Spanish-and-English-5535488-1666790278/original-5535488-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Pablo Picasso ELA and Art Digital Project</h4>
                        <p className="author">Mr. Leonidas</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/My-Family-History-Project-ENGLISH-Edition-5930795-1597774083/original-5930795-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">My Family History: ELA Digital Project</h4>
                        <p className="author">Ms. Helen</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Christmas-Area-and-Perimeter-Map-Project-UK-English-Version-2226411-1657300855/original-2226411-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Santa's Village Map and ELA Digital Project</h4>
                        <p className="author">Ms. Brown</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Book-Report-Projects-for-Any-Book-Student-Instructions-Rubrics-Digital-Options-79049-1682592300/original-79049-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">15 Creative Book Projects Digital Bundle</h4>
                        <p className="author">Ms. Katz</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Biography-Report-Informational-Writing-Black-History-Month-Biography-Project-1564455-1682425689/original-1564455-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Biography LapBook Digital Project</h4>
                        <p className="author">Ms. Hanley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/All-About-Book-A-research-based-informative-writing-project-1657101245/original-191570-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">All About Book Digital Project</h4>
                        <p className="author">Ms. Tarnopal</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default EnglishTechnology;