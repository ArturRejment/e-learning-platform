import '../shared/feedbackStyles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useSubmitCourseFeedbackMutation } from '../../../services/contact';
import {
  CourseFeedbackDto,
  courseFeedbackDtoSchema,
} from '../../../types/dtos/contact.dto';
import StyledInput from '../../common/StyledInput';
import { Spinner } from '../../utils';

const CourseFeedback = () => {
  const [submit, { isLoading, error }] = useSubmitCourseFeedbackMutation();

  const { control, handleSubmit, reset } = useForm<CourseFeedbackDto>({
    defaultValues: { courseName: '', courseFeedback: '' },
    resolver: zodResolver(courseFeedbackDtoSchema),
  });

  const onSubmit: SubmitHandler<CourseFeedbackDto> = async (data) => {
    try {
      await submit(data).unwrap();
      reset();
    } catch {}
  };

  return (
    <div className="feedback">
      <h1 className="feedback__header">
        Share your thoughts about the course!
      </h1>
      {error && <h2 className="feedback__error-msg">Error. Try again!</h2>}
      <form className="feedback__form" onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          label="Course Name"
          name="courseName"
          type="text"
          control={control}
        />
        <StyledInput
          label="Course Feedback"
          name="courseFeedback"
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

export default CourseFeedback;
