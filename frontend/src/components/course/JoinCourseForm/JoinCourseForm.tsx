import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { JoinCourseDto, joinCourseDtoSchema } from '../../../types';
import StyledInput from '../../common/StyledInput';
import { Spinner } from '../../utils';

type Props = {
  submit: (data: JoinCourseDto, reset: () => void) => void;
  error: string;
  backendErrors: Partial<JoinCourseDto>;
  isLoading: boolean;
};

const JoinCourseForm = ({ submit, error, backendErrors, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JoinCourseDto>({
    resolver: zodResolver(joinCourseDtoSchema),
  });

  const onSubmit: SubmitHandler<JoinCourseDto> = (data) => {
    submit(data, reset);
  };

  return (
    <div className="form">
      <h1 className="form__header">Enroll for course</h1>
      {error && <h2 className="form__error-msg">{error}</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput<'code'>
          label="Code"
          name="code"
          type="text"
          register={register('code')}
          error={errors.code?.message || backendErrors?.code}
        />

        <button className="form__button" type="submit">
          {isLoading ? <Spinner /> : 'Enroll'}
        </button>
      </form>
    </div>
  );
};

export default JoinCourseForm;
