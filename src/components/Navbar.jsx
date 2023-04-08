import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '..//assets/logo-small.png'

const Navbar = () => {

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
            <div className="navbar-logo">
                <Link className="tp-logo-small" to="/"><img className="logo-nav" src={logo} alt="navlogo" /></Link>
            </div>
            <div className="nav-links">
                <ul className="menu">
                    {menuItems.map((menu, index) => {
                        return (
                            <div className="menu-items" key={index}>
                                <Link to={menu.url}>{menu.title}</Link>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;