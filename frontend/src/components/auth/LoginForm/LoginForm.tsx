import '../shared/formStyles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import { LoginRequestDto, loginRequestDtoSchema } from '../../../types/dtos';
import StyledInput from '../../common/StyledInput';
import { Spinner } from '../../utils';

type Props = {
  submit: (data: LoginRequestDto, reset: () => void) => void;
  error: string;
  isLoading: boolean;
};

const LoginForm = ({ submit, error, isLoading }: Props) => {
  const { control, handleSubmit, reset } = useForm<LoginRequestDto>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginRequestDtoSchema),
  });

  const onSubmit: SubmitHandler<LoginRequestDto> = (data) =>
    submit(data, reset);

  return (
    <div className="form">
      <h1 className="form__header">Login</h1>
      {error && <h2 className="form__error-msg">{error}</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          label="E-mail"
          name="email"
          type="text"
          control={control}
        />

        <StyledInput
          label="Password"
          name="password"
          type="password"
          control={control}
        />

        <button className="form__button" type="submit">
          {isLoading ? <Spinner /> : 'Login'}
        </button>

        <p className="form__note">
          Don't have an account?
          <Link className="form__accent-button" to={ROUTER_PATH.REGISTER}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
