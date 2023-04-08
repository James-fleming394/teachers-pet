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
        },
        {
            title: 'Projects',
            url: '/projects',
        },
        {
            title: 'Homework',
            url: '/homework',
        },
        {
            title: 'Rewards',
            url: '/rewards',
        },
        {
            title: 'Technology',
            url: '/technology',
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
                                        {menu.dropdownItems.map((item, index) => {
                                            <li className="dropdown-menu" key={index}>
                                                <Link className="dropdown-menu-link" to={item.url}>{item.title}</Link>
                                            </li>
                                        })}
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