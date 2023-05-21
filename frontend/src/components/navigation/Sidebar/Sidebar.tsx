import './Sidebar.scss';

import classNames from 'classnames';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logout } from '../../auth/auth.actions';

type Props = {
  toggle: () => void;
  isOpen: boolean;
};

const Sidebar = ({ toggle, isOpen }: Props) => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector(({ auth }) => auth);

  const sidebarClassName = classNames('sidebar', { open: isOpen });

  return (
    <div className={sidebarClassName}>
      <button
        type="button"
        className="sidebar__icon"
        onClick={toggle}
        onKeyDown={toggle}
      >
        <FaTimes />
      </button>
      <div className="sidebar__container">
        <Link className="sidebar__item" onClick={toggle} to={ROUTER_PATH.HOME}>
          Home
        </Link>
        {user?.isSuperuser && (
          <Link
            className="sidebar__item"
            onClick={toggle}
            to={ROUTER_PATH.ADMIN}
          >
            Admin
          </Link>
        )}
        <Link
          className="sidebar__item"
          onClick={toggle}
          to={ROUTER_PATH.JOIN_COURSE}
        >
          Join Course
        </Link>
        <Link
          className="sidebar__item"
          onClick={toggle}
          to={ROUTER_PATH.CONTACT}
        >
          Contact
        </Link>
        <Link className="sidebar__item" onClick={toggle} to={ROUTER_PATH.ABOUT}>
          About
        </Link>
        {!isAuthenticated ? (
          <Link
            className="sidebar__item sidebar__item--login"
            to={ROUTER_PATH.LOGIN}
          >
            Login
          </Link>
        ) : (
          <button
            type="button"
            className="sidebar__item sidebar__item--logout"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
