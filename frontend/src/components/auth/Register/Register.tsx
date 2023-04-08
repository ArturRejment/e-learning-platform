import '../shared/wrapperStyles.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { routerPaths } from '../../../assets';
import { RegisterDto } from '../../../types';
import RegisterForm from '../RegisterForm';

const Register = () => {
  const [error, setError] = useState<string>('');

  const handleRegister = async (data: RegisterDto, reset: () => void) => {
    // eslint-disable-next-line no-console
    console.log('DATA', data);
    setError('Something went wrong!');
    reset();
  };

  return (
    <div className="wrapper">
      <Link className="wrapper__back-button" to={routerPaths.home}>
        Back
      </Link>
      <RegisterForm submit={handleRegister} error={error} />
    </div>
  );
};

export default Register;
