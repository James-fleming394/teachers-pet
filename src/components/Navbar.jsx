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
                            </div>
                        )
                    })}
                </ul>
        </div>
    )
}

export default Navbar;