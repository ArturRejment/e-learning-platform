import '../shared/formStyles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { routerPaths } from '../../../assets';
import { RegisterDto, registerDtoSchema } from '../../../types';
import StyledInput from '../StyledInput';

type Props = {
  submit: (data: RegisterDto, reset: () => void) => void;
  error: string;
};

const RegisterForm = ({ submit, error }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterDto>({
    resolver: zodResolver(registerDtoSchema),
  });

  const onSubmit: SubmitHandler<RegisterDto> = (data) => {
    submit(data, reset);
  };

  return (
    <div className="form">
      <h1 className="form__header">Register</h1>
      {error && <h2 className="form__error-msg">{error}</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput<'firstName'>
          label="First Name"
          name="firstName"
          type="text"
          register={register('firstName')}
          error={errors.firstName?.message}
        />

        <StyledInput<'lastName'>
          label="Last Name"
          name="lastName"
          type="text"
          register={register('lastName')}
          error={errors.lastName?.message}
        />

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

        <StyledInput<'confirmPassword'>
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          register={register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />

        <StyledInput<'registrationToken'>
          label="Registration Token"
          name="registrationToken"
          type="text"
          register={register('registrationToken')}
          error={errors.registrationToken?.message}
        />

        <button className="form__button" type="submit">
          Register
        </button>

        <p className="form__note">
          Already have an account?
          <Link className="form__accent-button" to={routerPaths.login}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
