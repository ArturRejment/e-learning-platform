import './Navbar.scss';

import { Link, Navigate } from 'react-router-dom';

import { routerPaths } from '../../../assets';
import logo from '../../../img/logo.png';

/*
 * TODO
 * log out
 */
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo import error" />
      </div>
      <div className="navbar__buttons">
        <div className="navbar__button">
          {' '}
          <Link to={routerPaths.home}>Home</Link>
        </div>
        <div className="navbar__button">
          <button className="navbar__button__dropbtn" type="button">
            My Courses
          </button>
          <div className="dropdown-content">
            <Link to={routerPaths.course}>Default course name 1</Link>
            <Link to={routerPaths.course}>Sample course </Link>
            <Link to={routerPaths.course}>
              Sample name with different lenght
            </Link>
          </div>
        </div>
        <div className="navbar__button">
          {' '}
          <Link to={routerPaths.contact}>Contact</Link>{' '}
        </div>
        <div className="navbar__button">
          {' '}
          <Link to={routerPaths.about}>About</Link>{' '}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
