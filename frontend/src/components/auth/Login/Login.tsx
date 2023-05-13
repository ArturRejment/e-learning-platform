import '../shared/wrapperStyles.scss';

import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { RouterPath } from '../../../assets';
import { useAppSelector } from '../../../hooks';
import { useLoginMutation } from '../../../services';
import { FormError, LoginDto } from '../../../types';
import LoginForm from '../LoginForm';

const Login = () => {
  const [error, setError] = useState<string>('');
  const [backendErrors, setBackendErrors] = useState<Partial<LoginDto>>({});
  const [login, { isLoading }] = useLoginMutation();
  const isAuthenticated: boolean = useAppSelector(
    ({ auth }) => auth.isAuthenticated,
  );

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

  return isAuthenticated ? (
    <Navigate to={RouterPath.Home} />
  ) : (
    <div className="wrapper">
      <Link className="wrapper__back-button" to={RouterPath.Home}>
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
