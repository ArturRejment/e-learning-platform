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
  const { handleSubmit, reset, control } = useForm<CourseCodeGenerationDto>({
    defaultValues: { amount: 1, courseId: undefined },
    resolver: zodResolver(courseCodeGenerationDtoSchema),
  });

  const {
    field: { value, onChange, ...restCourseIdField },
    fieldState: { error: courseIdError },
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
        <StyledInput
          label="Amount"
          name="amount"
          type="number"
          control={control}
        />

        <Select
          options={options}
          isClearable
          value={selected}
          onChange={onSelectChange}
          {...restCourseIdField}
        />
        {courseIdError && (
          <p className="styled-input__error">{courseIdError.message}</p>
        )}

        <button className="form__button" type="submit">
          {isLoading ? <Spinner /> : 'Generate'}
        </button>
      </form>
    </div>
  );
};

export default CourseCodeGenerationForm;
