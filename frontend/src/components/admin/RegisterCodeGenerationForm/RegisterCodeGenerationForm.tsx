import '../shared/formStyles.scss';

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
  const { control, handleSubmit, reset } = useForm<RegisterCodeGenerationDto>({
    defaultValues: { count: 1 },
    resolver: zodResolver(registerCodeGenerationDtoSchema),
  });

  const onSubmit: SubmitHandler<RegisterCodeGenerationDto> = (postData) =>
    submit(postData, reset);

  return (
    <div className="admin-form">
      <h1 className="admin-form__header">Generate registration codes</h1>
      {error && <h2 className="admin-form__error-msg">{error}</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          label="Amount"
          name="count"
          type="number"
          control={control}
        />

        <button className="admin-form__button" type="submit">
          {isLoading ? <Spinner /> : 'Generate'}
        </button>
      </form>
    </div>
  );
};

export default RegisterCodeGenerationForm;
