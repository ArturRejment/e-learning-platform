import './Login.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { routerPaths } from '../../../assets';
import { LoginDto } from '../../../types';
import LoginForm from '../LoginForm';

const Login = () => {
  const [error, setError] = useState<string>('');

  const handleLogin = async (data: LoginDto, reset: () => void) => {
    console.log('DATA', data);
    setError('Something went wrong!');
    reset();
  };

  return (
    <div className="login">
      <Link className="login__back-button" to={routerPaths.home}>
        Back
      </Link>
      <LoginForm submit={handleLogin} error={error} />
    </div>
  );
};

export default Login;
