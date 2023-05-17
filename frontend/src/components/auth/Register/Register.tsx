import '../shared/wrapperStyles.scss';

import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import { useAppSelector } from '../../../hooks';
import { useRegisterMutation } from '../../../services';
import { FormError } from '../../../types';
import { RegisterRequestDto } from '../../../types/dtos';
import RegisterForm from '../RegisterForm';

const Register = () => {
  const [error, setError] = useState<string>('');
  const [backendErrors, setBackendErrors] = useState<
    Partial<RegisterRequestDto>
  >({});
  const [register, { isLoading }] = useRegisterMutation();
  const isAuthenticated: boolean = useAppSelector(
    ({ auth }) => auth.isAuthenticated,
  );

  const handleRegister = async (
    data: RegisterRequestDto,
    reset: () => void,
  ) => {
    try {
      await register(data).unwrap();
      reset();
    } catch (err) {
      setError('Registration Unsuccessful!');
      const typedError: FormError = err as FormError;
      setBackendErrors(typedError.data as Partial<RegisterRequestDto>);
    }
  };

  return isAuthenticated ? (
    <Navigate to={ROUTER_PATH.HOME} />
  ) : (
    <div className="wrapper">
      <Link className="wrapper__back-button" to={ROUTER_PATH.HOME}>
        Back
      </Link>
      <RegisterForm
        submit={handleRegister}
        error={error}
        backendErrors={backendErrors}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Register;
