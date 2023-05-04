import './Home.scss';

import { Link } from 'react-router-dom';

import { routerPaths } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logout } from '../../auth/auth.actions';

const Home = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated: boolean = useAppSelector(
    ({ auth }) => auth.isAuthenticated,
  );
  return (
    <div>
      Home
      {!isAuthenticated ? (
        <Link to={routerPaths.login}>Login</Link>
      ) : (
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
