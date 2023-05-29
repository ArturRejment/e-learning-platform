import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { JoinCourseDto, joinCourseDtoSchema } from '../../../types/dtos';
import StyledInput from '../../common/StyledInput';
import { Spinner } from '../../utils';

type Props = {
  submit: (data: JoinCourseDto, reset: () => void) => void;
  error: string;
  backendErrors: Partial<JoinCourseDto>;
  isLoading: boolean;
};

const JoinCourseForm = ({ submit, error, backendErrors, isLoading }: Props) => {
  const { control, handleSubmit, reset } = useForm<JoinCourseDto>({
    defaultValues: { code: '' },
    resolver: zodResolver(joinCourseDtoSchema),
  });

  const onSubmit: SubmitHandler<JoinCourseDto> = (data) => submit(data, reset);

  return (
    <div className="form">
      <h1 className="form__header">Enroll for course</h1>
      {error && <h2 className="form__error-msg">{error}</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          label="Code"
          name="code"
          type="text"
          control={control}
          externalError={backendErrors?.code}
        />

        <button className="form__button" type="submit">
          {isLoading ? <Spinner /> : 'Enroll'}
        </button>
      </form>
    </div>
  );
};

export default JoinCourseForm;
