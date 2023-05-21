import './Navbar.scss';

import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logout } from '../../auth/auth.actions';

type Props = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: Props) => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector(({ auth }) => auth);

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <Link className="navbar__item" to={ROUTER_PATH.HOME}>
          Home
        </Link>

        <div className="navbar__container">
          {user?.isSuperuser && (
            <Link className="navbar__item" to={ROUTER_PATH.ADMIN}>
              Admin
            </Link>
          )}
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

        <button
          type="button"
          className="navbar__icon"
          onClick={toggleSidebar}
          onKeyDown={toggleSidebar}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
