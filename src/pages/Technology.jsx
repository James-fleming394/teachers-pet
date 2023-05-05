import React from "react";
import './Lesson.css';
import { useNavigate } from "react-router";

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
        <div>

        </div>
    )
}

export default Technology;