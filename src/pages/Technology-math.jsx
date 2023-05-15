import React from "react";
import './Tests.css';
import RatingLogo from '../assets/star.png';
import DownloadButton from "../components/Download";

const MathTechnology = () => {

    return(
        <div className="test">
            <div className="testing-intro">
                <div className="testing-intro-left">
                    <h1 className="testing-h1">Math Technologies</h1>
                    <p className="testing-p">
                            Technology is a useful tool for educators and students to continue to challenge their own limits. 
                        <br></br>
                            Technology leads to increased student engagement, collaboration, inclusion and creativity in the classroom and in student work.
                    </p>
                    <button className="testing-button" onClick={() => document.getElementById("test-resources").scrollIntoView({ behavior: 'smooth' })}>View Resources</button>
                </div>
                <div className="testing-intro-right">
                    <img className="testing-intro-img" 
                    src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2022/04/math-education-illustration.jpg" 
                    alt="testing" />
                </div>
            </div>
            <div id="test-resources" className="test-resources">
            <div className="test-features">
                <h1 className="assess-all">Math Technologies</h1>
                <div className="features-container">
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Run-a-Pizza-Place-A-Fraction-Math-Project-3rd-and-4th-Grade-Fraction-Project-4426478-1658304577/original-4426478-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Fraction Digital Project: Run a Pizza Place</h4>
                        <p className="author">Ms. Munson</p>
                        <p className="star"><img className="star-" src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/GEOMETROCITY-Create-Build-a-City-Made-of-Math-Using-Geometry-1339693-1645475556/original-1339693-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Geometrocity Digital Project</h4>
                        <p className="author">Ms. Hanley</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Place-Value-Detective-A-Place-Value-Project-Enrichment-Centers-Small-Group-056730700-1375389930-1667869978/original-804151-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Place Value Detective Digital Project</h4>
                        <p className="author">Ms. Byrant</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/End-of-Year-Math-Project-Plan-a-Summer-Vacation-PBL-Math-Review-3752929-1683104893/original-3752929-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Plan Summer Break: Digital Math Project</h4>
                        <p className="author">Ms. Spina</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Quadrilateral-City-Geometry-Project-1134355-1658877999/original-1134355-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Quadrilateral City Digital Project</h4>
                        <p className="author">Mr. Bautista</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.6</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/PBL-Math-Enrichment-Project-Plan-a-Camping-Trip-PBL-2724598-1673620181/original-2724598-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Plan a Camping Tour: Digital Project</h4>
                        <p className="author">Ms. Abinakad</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Radial-Symmetry-Paper-Relief-Project-Art-and-Math-Fractions-and-Symmetry-1436727-1656583784/original-1436727-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Radial Paper Relief Structures Digital Project</h4>
                        <p className="author">Mr. Crown</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Multiplication-Project-Real-World-Math-with-Arrays-Equal-Groups-Fact-Families-4306628-1658304553/original-4306628-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Run a Pet Shelter Digital Project</h4>
                        <p className="author">Ms. Hall</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.4</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Project-Based-Learning-Open-a-Food-Truck-2561215-1683035622/original-2561215-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Run a Food Truck: Math Digital Project</h4>
                        <p className="author">Ms. Brennan</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.5</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Project-Based-Learning-for-4th-Grade-Math-Open-a-Donut-Shop-3055056-1677804932/original-3055056-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Open A Donut Shop: Digital Math Project</h4>
                        <p className="author">Ms. Kuntz</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.8</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Project-Based-Learning-Math-Area-Perimeter-Zoo-Assignment-Digital-Printable-4673680-1681286128/original-4673680-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Area & Perimeter Zoo Digital Project</h4>
                        <p className="author">Ms. Sandler</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.9</p>
                        <DownloadButton />
                    </div>
                    <div className="feature">
                        <img src="https://ecdn.teacherspayteachers.com/thumbitem/Volume-Area-Perimeter-Mining-Blocks-Math-Project-2344348-1674580583/original-2344348-1.jpg"
                        className="feature-image"
                        alt="feature" />
                        <h4 className="feature-title">Volume, A & P: Minecraft Digital Project</h4>
                        <p className="author">Ms. Crew</p>
                        <p className="star"><img src={RatingLogo} alt="rating"/>4.7</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default MathTechnology;