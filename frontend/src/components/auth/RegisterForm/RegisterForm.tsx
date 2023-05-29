import '../shared/formStyles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import {
  RegisterRequestDto,
  registerRequestDtoSchema,
} from '../../../types/dtos';
import StyledInput from '../../common/StyledInput';
import { Spinner } from '../../utils';

type Props = {
  submit: (data: RegisterRequestDto, reset: () => void) => void;
  error: string;
  backendErrors: Partial<RegisterRequestDto>;
  isLoading: boolean;
};

const RegisterForm = ({ submit, error, backendErrors, isLoading }: Props) => {
  const { control, handleSubmit, reset } = useForm<RegisterRequestDto>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: '',
      registrationToken: '',
    },
    resolver: zodResolver(registerRequestDtoSchema),
  });

  const onSubmit: SubmitHandler<RegisterRequestDto> = (data) =>
    submit(data, reset);

  return (
    <div className="form">
      <h1 className="form__header">Register</h1>
      {error && <h2 className="form__error-msg">{error}</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          label="First Name"
          name="firstName"
          type="text"
          control={control}
          externalError={backendErrors?.firstName}
        />

        <StyledInput
          label="Last Name"
          name="lastName"
          type="text"
          control={control}
          externalError={backendErrors?.lastName}
        />

        <StyledInput
          label="E-mail"
          name="email"
          type="text"
          control={control}
          externalError={backendErrors?.email}
        />

        <StyledInput
          label="Password"
          name="password"
          type="password"
          control={control}
          externalError={backendErrors?.password}
        />

        <StyledInput
          label="Confirm Password"
          name="rePassword"
          type="password"
          control={control}
          externalError={backendErrors?.rePassword}
        />

        <StyledInput
          label="Registration Token"
          name="registrationToken"
          type="text"
          control={control}
          externalError={backendErrors?.registrationToken}
        />

        <button className="form__button" type="submit">
          {isLoading ? <Spinner /> : 'Register'}
        </button>

        <p className="form__note">
          Already have an account?
          <Link className="form__accent-button" to={ROUTER_PATH.LOGIN}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
