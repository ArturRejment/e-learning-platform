import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  RegisterCodeGenerationDto,
  registerCodeGenerationDtoSchema,
} from '../../../types/dtos';
import StyledInput from '../../common/StyledInput';
import { Spinner } from '../../utils';

type Props = {
  submit: (postData: RegisterCodeGenerationDto, reset: () => void) => void;
  error: string;
  isLoading: boolean;
};

const RegisterCodeGenerationForm = ({ submit, error, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterCodeGenerationDto>({
    resolver: zodResolver(registerCodeGenerationDtoSchema),
  });

  const onSubmit: SubmitHandler<RegisterCodeGenerationDto> = (postData) =>
    submit(postData, reset);

  return (
    <div className="form">
      <h1 className="form__header">Generate registration codes</h1>
      {error && <h2 className="form__error-msg">{error}</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput<'count'>
          label="Amount"
          name="count"
          type="number"
          register={register('count', { valueAsNumber: true })}
          error={errors.count?.message}
        />

        <button className="form__button" type="submit">
          {isLoading ? <Spinner /> : 'Generate'}
        </button>
      </form>
    </div>
  );
};

export default RegisterCodeGenerationForm;
