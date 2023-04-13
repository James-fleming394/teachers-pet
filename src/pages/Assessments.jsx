import React from "react";

const Assessments = () => {
    
    return (
        <div className="assessments">
            <div className="test-quiz">
                <div className="assess-tests">
                    <h1 className="h1-test">Tests</h1>
                    <img 
                    className="test-img" 
                    src="https://media.istockphoto.com/id/1253460188/vector/students-write-a-test-exam-in-a-beautiful-classroom.jpg?s=170667a&w=is&k=20&c=zfVwjfqf-4-ien4Ygl3wi_4WhaRpUPi6PZXk-sEfwzg="
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