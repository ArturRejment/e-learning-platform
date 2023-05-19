import '../shared/wrapperStyles.scss';

import { Link, Navigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import { useAppSelector } from '../../../hooks';
import { useLoginMutation } from '../../../services';
import LoginForm from '../LoginForm';

const Login = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const isAuthenticated: boolean = useAppSelector(
    ({ auth }) => auth.isAuthenticated,
  );

  return isAuthenticated ? (
    <Navigate to={ROUTER_PATH.HOME} />
  ) : (
    <div className="wrapper">
      <Link className="wrapper__back-button" to={ROUTER_PATH.HOME}>
        Back
      </Link>
      <LoginForm
        submit={(data) => login(data)}
        error={error ? 'Login Unsuccessful!' : ''}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Login;
