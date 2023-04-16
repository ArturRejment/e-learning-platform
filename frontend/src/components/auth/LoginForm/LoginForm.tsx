import '../shared/formStyles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { routerPaths } from '../../../assets';
import { LoginDto, loginDtoSchema } from '../../../types';
import StyledInput from '../StyledInput';

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
    <div className="form">
      <h1 className="form__header">Login</h1>
      {error && <h2 className="form__error-msg">{error}</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput<'email'>
          label="E-mail"
          name="email"
          type="text"
          register={register('email')}
          error={errors.email?.message}
        />

        <StyledInput<'password'>
          label="Password"
          name="password"
          type="password"
          register={register('password')}
          error={errors.password?.message}
        />

        <button className="form__button" type="submit">
          Login
        </button>

        <p className="form__note">
          Don't have an account?
          <Link className="form__accent-button" to={routerPaths.register}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;