import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useController, useForm } from 'react-hook-form';
import Select from 'react-select';

import { useGetCoursesQuery } from '../../../services';
import {
  CourseCodeGenerationDto,
  courseCodeGenerationDtoSchema,
  CourseDto,
} from '../../../types/dtos';
import StyledInput from '../../common/StyledInput';
import { Spinner } from '../../utils';

type Option = {
  value: string;
  label: string;
};

type Props = {
  submit: (postData: CourseCodeGenerationDto, reset: () => void) => void;
  error: string;
  isLoading: boolean;
};

const CourseCodeGenerationForm = ({ submit, error, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<CourseCodeGenerationDto>({
    resolver: zodResolver(courseCodeGenerationDtoSchema),
  });

  const {
    field: { value, onChange, ...restCourseIdField },
  } = useController({ name: 'courseId', control });

  const { data = [] } = useGetCoursesQuery();
  const options: Option[] = data?.map(({ name, id }: CourseDto) => ({
    label: name,
    value: id,
  }));

  const onSelectChange = (option: Option | null) =>
    onChange(option?.value ?? null);

  const onSubmit: SubmitHandler<CourseCodeGenerationDto> = (postData) =>
    submit(postData, reset);

  const selected = options?.find((option) => option.value === value) ?? null;

  return (
    <div className="form">
      <h1 className="form__header">Generate joining codes for course</h1>
      {error && <h2 className="form__error-msg">{error}</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput<'amount'>
          label="Amount"
          name="amount"
          type="number"
          register={register('amount', { valueAsNumber: true })}
          error={errors.amount?.message}
        />

        <Select
          options={options}
          isClearable
          value={selected}
          onChange={onSelectChange}
          {...restCourseIdField}
        />
        <p className="styled-input__error">{errors.courseId?.message}</p>

        <button className="form__button" type="submit">
          {isLoading ? <Spinner /> : 'Generate'}
        </button>
      </form>
    </div>
  );
};

export default CourseCodeGenerationForm;
