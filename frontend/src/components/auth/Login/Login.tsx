import '../shared/wrapperStyles.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { routerPaths } from '../../../assets';
import { useLoginMutation } from '../../../services';
import { FormError, LoginDto } from '../../../types';
import LoginForm from '../LoginForm';

const Login = () => {
  const [error, setError] = useState<string>('');
  const [backendErrors, setBackendErrors] = useState<Partial<LoginDto>>({});
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (data: LoginDto, reset: () => void) => {
    try {
      await login(data).unwrap();
      reset();
    } catch (err) {
      setError('Login Unsuccessful!');
      const typedError: FormError = err as FormError;
      setBackendErrors(typedError.data as Partial<LoginDto>);
    }
  };

  return (
    <div className="wrapper">
      <Link className="wrapper__back-button" to={routerPaths.home}>
        Back
      </Link>
      <LoginForm
        submit={handleLogin}
        error={error}
        backendErrors={backendErrors}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Login;
