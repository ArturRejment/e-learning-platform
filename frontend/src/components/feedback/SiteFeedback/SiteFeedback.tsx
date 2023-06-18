import '../shared/feedbackStyles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useSubmitSiteFeedbackMutation } from '../../../services/contact';
import {
  SiteFeedbackDto,
  siteFeedbackDtoSchema,
} from '../../../types/dtos/contact.dto';
import StyledInput from '../../common/StyledInput';
import { Spinner } from '../../utils';

const SiteFeedback = () => {
  const [submit, { isLoading, error }] = useSubmitSiteFeedbackMutation();

  const { control, handleSubmit, reset } = useForm<SiteFeedbackDto>({
    defaultValues: { siteFeedback: '' },
    resolver: zodResolver(siteFeedbackDtoSchema),
  });

  const onSubmit: SubmitHandler<SiteFeedbackDto> = async (data) => {
    try {
      await submit(data).unwrap();
      reset();
    } catch {}
  };

  return (
    <div className="feedback">
      <h1 className="feedback__header">Share your thoughts about the site!</h1>
      {error && <h2 className="feedback__error-msg">Error. Try again!</h2>}
      <form className="feedback__form" onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          label="Site Feedback"
          name="siteFeedback"
          type="text"
          control={control}
        />
        <button className="feedback__button" type="submit">
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default SiteFeedback;
