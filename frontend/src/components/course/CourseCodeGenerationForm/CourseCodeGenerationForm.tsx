import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useController, useForm } from 'react-hook-form';
import Select from 'react-select';

import {
  CourseCodeGenerationDto,
  courseCodeGenerationDtoSchema,
} from '../../../types/course-code-generation.dto';
import StyledInput from '../../auth/StyledInput';
import { Spinner } from '../../utils';

type Option = {
  value: string;
  label: string;
};

type Props = {
  submit: (postData: CourseCodeGenerationDto, reset: () => void) => void;
  error: string;
  isLoading: boolean;
  options: Option[];
};

const CourseCodeGenerationForm = ({
  submit,
  error,
  isLoading,
  options,
}: Props) => {
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

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const onSelectChange = (option: Option | null) => {
    const val = option?.value ?? null;
    setSelectedCourseId(val);
    onChange(val);
  };

  const resetForm = () => {
    reset();
    setSelectedCourseId(null);
  };

  const onSubmit: SubmitHandler<CourseCodeGenerationDto> = (postData) => {
    submit(postData, resetForm);
  };

  const selectedOption = selectedCourseId
    ? options.find((option) => option.value === selectedCourseId)
    : undefined;

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
          value={selectedOption}
          onChange={onSelectChange}
          {...restCourseIdField}
        />

        <button className="form__button" type="submit">
          {isLoading ? <Spinner /> : 'Generate'}
        </button>
      </form>
    </div>
  );
};

export default CourseCodeGenerationForm;
