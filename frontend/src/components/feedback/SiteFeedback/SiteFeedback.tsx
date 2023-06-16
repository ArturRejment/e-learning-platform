import { Spinner } from '@react-pdf-viewer/core';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useSubmitSiteFeedbackMutation } from '../../../services/contact';
import { SiteFeedbackDto } from '../../../types/dtos/contact.dto';

const SiteFeedback = () => {
  const [submit, { isLoading }] = useSubmitSiteFeedbackMutation();

  const { handleSubmit } = useForm<SiteFeedbackDto>({
    defaultValues: { siteFeedback: '' },
  });

  const onSubmit: SubmitHandler<SiteFeedbackDto> = (data) => submit(data);

  return (
    <div className="site-feedback">
      <h1 className="site-feedback__header">
        Share your thoughts about the site!
      </h1>
      <form className="site-feedback__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="site-feedback__feedback"
          name="feedback"
          type="text"
          placeholder="Site Feedback"
        />
        <button className="site-feedback__submit" type="submit">
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default SiteFeedback;
