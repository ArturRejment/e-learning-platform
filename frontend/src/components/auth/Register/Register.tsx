import '../shared/wrapperStyles.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { routerPaths } from '../../../assets';
import { useRegisterMutation } from '../../../services';
import { FormError, RegisterDto } from '../../../types';
import RegisterForm from '../RegisterForm';

const Register = () => {
  const [error, setError] = useState<string>('');
  const [backendErrors, setBackendErrors] = useState<Partial<RegisterDto>>({});
  const [register, { isLoading }] = useRegisterMutation();

  const handleRegister = async (data: RegisterDto, reset: () => void) => {
    try {
      await register(data).unwrap();
      reset();
    } catch (err) {
      setError('Registration Unsuccessful!');
      const typedError: FormError = err as FormError;
      setBackendErrors(typedError.data as Partial<RegisterDto>);
    }
  };

  return (
    <div className="wrapper">
      <Link className="wrapper__back-button" to={routerPaths.home}>
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
