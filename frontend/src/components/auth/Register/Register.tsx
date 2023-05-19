import '../shared/wrapperStyles.scss';

import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import { useAppSelector } from '../../../hooks';
import { useRegisterMutation } from '../../../services';
import { RegisterRequestDto } from '../../../types/dtos';
import RegisterForm from '../RegisterForm';

const Register = () => {
  const [backendErrors, setBackendErrors] = useState<
    Partial<RegisterRequestDto>
  >({});
  const [register, { isLoading, error }] = useRegisterMutation();
  const isAuthenticated: boolean = useAppSelector(
    ({ auth }) => auth.isAuthenticated,
  );

  useEffect(() => {
    if (error && 'data' in error) {
      setBackendErrors(error.data as Partial<RegisterRequestDto>);
    }
  }, [error]);

  return isAuthenticated ? (
    <Navigate to={ROUTER_PATH.HOME} />
  ) : (
    <div className="wrapper">
      <Link className="wrapper__back-button" to={ROUTER_PATH.HOME}>
        Back
      </Link>
      <RegisterForm
        submit={(data) => register(data)}
        error={error ? 'Registration Unsuccessful!' : ''}
        backendErrors={backendErrors}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Register;
