import './LoginForm.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { routerPaths } from '../../../assets';
import { LoginDto, loginDtoSchema } from '../../../types';

type Props = {
  submit: (data: LoginDto, reset: () => void) => void;
  error: string;
};

const LoginForm = ({ submit, error }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginDto>({
    resolver: zodResolver(loginDtoSchema),
  });

  const onSubmit: SubmitHandler<LoginDto> = (data) => {
    submit(data, reset);
  };

  return (
    <div className="login-form">
      <h1 className="login-form__header">Login</h1>
      {error && <h2 className="login-form__error-msg">{error}</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form__group">
          <label htmlFor="email" className="login-form__label">
            E-mail
          </label>
          <input
            id="email"
            className="login-form__input"
            type="text"
            aria-label="email"
            {...register('email')}
          />
          <p className="login-form__error">{errors.email?.message}</p>
        </div>

        <div className="login-form__group">
          <label htmlFor="password" className="login-form__label">
            Password
          </label>
          <input
            id="password"
            className="login-form__input"
            type="password"
            aria-label="password"
            {...register('password')}
          />
          <p className="login-form__error">{errors.password?.message}</p>
        </div>

        <button className="login-form__button" type="submit">
          Login
        </button>

        <p className="login-form__note">
          Don't have an account?
          <Link
            className="login-form__register-button"
            to={routerPaths.register}
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
