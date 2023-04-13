import React from "react";
import './Assessments.css';

const Assessments = () => {
    
    return (
        <div className="assessments">
            <h1 className="assess-title">Assessments</h1>
            <div className="test-quiz">
                <div className="assess-tests">
                    <h1 className="h1-test">Tests</h1>
                    <img 
                    className="test-img" 
                    src="https://media.istockphoto.com/id/1253525938/vector/students-work-on-computers-in-a-beautiful-classroom.jpg?s=612x612&w=0&k=20&c=41g7DjnIXzxBnzbuS8Zw6rVLnFYn6PFCrbMNyZ_uuDc="
                    alt="test taking" />
                </div>
                <div className="assess-quizzes">
                    <h1 className="h1-quiz">Quizzes</h1>
                    <img 
                    className="test-img" 
                    src="https://media.istockphoto.com/id/1253525938/vector/students-work-on-computers-in-a-beautiful-classroom.jpg?s=612x612&w=0&k=20&c=41g7DjnIXzxBnzbuS8Zw6rVLnFYn6PFCrbMNyZ_uuDc="
                    alt="quiz taking" />
                </div>
            </div>
            <div className="all-assessment-resources">
                <h1 className="assess-all">View All Assessment Resources</h1>
                {/* Similar to home page resources layout */}
            </div>
        </div>
    )

}

export default Assessments;