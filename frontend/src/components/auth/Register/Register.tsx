import '../shared/wrapperStyles.scss';

import { useEffect, useState } from 'react';

import { useRegisterMutation } from '../../../services';
import { RegisterRequestDto } from '../../../types/dtos';
import RegisterForm from '../RegisterForm';

const Register = () => {
  const [backendErrors, setBackendErrors] = useState<
    Partial<RegisterRequestDto>
  >({});
  const [register, { isLoading, error }] = useRegisterMutation();

  useEffect(() => {
    if (error && 'data' in error) {
      setBackendErrors(error.data as Partial<RegisterRequestDto>);
    }
  }, [error]);

  return (
    <div className="wrapper">
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
