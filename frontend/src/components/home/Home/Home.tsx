import './Home.scss';

import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logout } from '../../auth/auth.actions';
import CourseList from '../../course/CourseList';

const Home = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated: boolean = useAppSelector(
    ({ auth }) => auth.isAuthenticated,
  );
  return (
    <div>
      Home
      {!isAuthenticated ? (
        <Link to={ROUTER_PATH.LOGIN}>Login</Link>
      ) : (
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      )}
      <CourseList />
    </div>
  );
};

export default Home;
