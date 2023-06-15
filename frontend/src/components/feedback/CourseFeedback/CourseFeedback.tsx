import { Spinner } from '@react-pdf-viewer/core';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useSubmitCourseFeedbackMutation } from '../../../services/contact';
import { CourseFeedbackDto } from '../../../types/dtos/contact.dto';

const CourseFeedback = () => {
  const [submit, { isLoading }] = useSubmitCourseFeedbackMutation();

  const { handleSubmit } = useForm<CourseFeedbackDto>({
    defaultValues: { courseName: '', courseFeedback: '' },
  });

  const onSubmit: SubmitHandler<CourseFeedbackDto> = (data) => submit(data);

  return (
    <div className="corse_feedback">
      <h1 className="course-feedback__header">
        Share your thoughts about the course!
      </h1>
      <form className="course-feedback__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="course-feedback__course-name"
          type="text"
          placeholder="Course Name"
        />
        <input
          className="course-feedback__feedback"
          type="text"
          placeholder="Course Feedback"
        />
        <button className="course-feedback__submit" type="submit">
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default CourseFeedback;
