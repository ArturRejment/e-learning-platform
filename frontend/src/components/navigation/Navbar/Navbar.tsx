import './Navbar.scss';

import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logout } from '../../auth/auth.actions';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated: boolean = useAppSelector(
    ({ auth }) => auth.isAuthenticated,
  );
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <Link className="navbar__item" to={ROUTER_PATH.HOME}>
          Home
        </Link>

        <div className="navbar__container">
          <Link className="navbar__item" to={ROUTER_PATH.CONTACT}>
            Contact
          </Link>
          <Link className="navbar__item" to={ROUTER_PATH.ABOUT}>
            About
          </Link>
          {!isAuthenticated ? (
            <Link
              className="navbar__item navbar__item--login"
              to={ROUTER_PATH.LOGIN}
            >
              Login
            </Link>
          ) : (
            <button
              type="button"
              className="navbar__item navbar__item--logout"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          )}
        </div>

        <div className="navbar__icon">
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
