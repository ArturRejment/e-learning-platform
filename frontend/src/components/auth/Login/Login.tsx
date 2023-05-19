import '../shared/wrapperStyles.scss';

import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import { useLoginMutation } from '../../../services';
import LoginForm from '../LoginForm';

const Login = () => {
  const [login, { isLoading, error }] = useLoginMutation();

  return (
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
