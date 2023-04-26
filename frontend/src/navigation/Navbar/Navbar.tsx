import './Navbar.scss';

import { Link, Navigate } from 'react-router-dom';

import logo from '../../img/logo.png';
/* 
 * TODO
 * log out
 */
const Navbar = () => {
    return (

        <div className="mainNavbar">
            <div className="NavbarLogo">
                <img src={logo} />
            </div>
            <div className="NavbarButtons">
                <div className="NavbarButton"> <Link to="home">Home</Link></div>
                <div className="NavbarButton">
                    <div className="dropdown">
                        <button className="dropbtn">My Courses
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to="course">Default course name 1</Link>
                            <Link to="course">Sample course </Link>
                            <Link to="course">Sample name with different lenght</Link>

                        </div>
                    </div>
                </div>
                <div className="NavbarButton"> <Link to="contact">Contact</Link> </div>
                <div className="NavbarButton"> <Link to="about">About</Link> </div>
            </div>
        </div>
    )
};

export default Navbar;
