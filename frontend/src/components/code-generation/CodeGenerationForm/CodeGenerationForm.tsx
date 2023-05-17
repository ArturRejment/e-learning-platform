import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  CodeGenerationDto,
  codeGenerationDtoSchema,
} from '../../../types/dtos';
import StyledInput from '../../common/StyledInput';
import { Spinner } from '../../utils';

type Props = {
  submit: (postData: CodeGenerationDto, reset: () => void) => void;
  error: string;
  isLoading: boolean;
};

const CodeGenerationForm = ({ submit, error, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CodeGenerationDto>({
    resolver: zodResolver(codeGenerationDtoSchema),
  });

  const resetForm = () => {
    reset();
  };

  const onSubmit: SubmitHandler<CodeGenerationDto> = (postData) => {
    submit(postData, resetForm);
  };

  return (
    <div className="form">
      <h1 className="form__header">Generate codes</h1>
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

export default CodeGenerationForm;
