import '../shared/wrapperStyles.scss';

import { useLoginMutation } from '../../../services';
import LoginForm from '../LoginForm';

const Login = () => {
  const [login, { isLoading, error }] = useLoginMutation();

  return (
    <div className="wrapper">
      <LoginForm
        submit={(data) => login(data)}
        error={error ? 'Login Unsuccessful!' : ''}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Login;
