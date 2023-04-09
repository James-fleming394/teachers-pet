import React from "react";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import logo from '..//assets/logo-big.png';

const Navbar = () => {

    let navigate = useNavigate();

    const menuItems = [
        {
            title: 'Assessments',
            url: '/assessments',
            dropdownItems: [
                { title: 'Tests', url: '/assessments/tests' },
                { title: 'Quizzes', url: '/assessments/quizzes' },
            ]
        },
        {
            title: 'Lessons',
            url: '/lessons',
            dropdownItems: [
                { title: 'Math', url: '/lessons/math' },
                { title: 'English', url: '/lessons/english' },
                { title: 'Writing', url: '/lessons/writing' },
                { title: 'Science', url: '/lessons/science' },
                { title: 'Social Studies', url: '/lessons/social-studies' },
                { title: 'Other', url: '/lessons/other' },
            ]
        },
        {
            title: 'Projects',
            url: '/projects',
            dropdownItems: [
                { title: 'Math', url: '/lessons/math' },
                { title: 'English', url: '/lessons/english' },
                { title: 'Writing', url: '/lessons/writing' },
                { title: 'Science', url: '/lessons/science' },
                { title: 'Social Studies', url: '/lessons/social-studies' },
                { title: 'Other', url: '/lessons/other' },
            ]
        },
        {
            title: 'Homework',
            url: '/homework',
            dropdownItems: [
                { title: 'Math', url: '/homework/math' },
                { title: 'English', url: '/homework/english' },
                { title: 'Writing', url: '/homework/writing' },
                { title: 'Science', url: '/homework/science' },
                { title: 'Social Studies', url: '/homework/social-studies' },
                { title: 'Other', url: '/homework/other' },
            ]
        },
        {
            title: 'Technology',
            url: '/technology',
            dropdownItems: [
                { title: 'Math', url: '/technology/math' },
                { title: 'English', url: '/technology/english' },
                { title: 'Writing', url: '/technology/writing' },
                { title: 'Science', url: '/technology/science' },
                { title: 'Social Studies', url: '/technology/social-studies' },
                { title: 'Other', url: '/technology/other' },
            ]
        },
        {
            title: 'Rewards',
            url: '/rewards',
        },
        {
            title: 'About Us',
            url: '/about'
        }
    ]

    return (
        <div className="navbar">
            <div className="logo">
            <img className="logo-nav" onClick={() => navigate('/')} src={logo} alt="navlogo"/>
            </div>
                <ul className="menu">
                    {menuItems.map((menu, index) => {
                        return (
                            <div className="menu-items" key={index}>
                                <Link className="menu-items-link" to={menu.url}>{menu.title}</Link>
                                {menu.dropdownItems && (
                                <ul className="dropdown-menu">
                                    {menu.dropdownItems.map((item, idx) => (
                                        <li className="dropdown-menu-item" key={`${index}-${idx}`}>
                                            <Link className="dropdown-menu-link" to={item.url}>{item.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                                )}
                            </div>
                        )
                    })}
                </ul>
        </div>
    )
}

export default Navbar;